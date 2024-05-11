import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { SafeAreaView, View,  } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import { Header } from "../../modules/@map/components/Header";
import { MapItem } from "../../modules/@map/components/MapItem";


export default function Tab() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  
  return (
    <SafeAreaView className="justify-center items-center flex-1 mt-12">
      <Header />
      
      <MapView
        className="w-full h-full flex-1 mt-2"
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: location ? location.coords.latitude : 37.78825,
          longitude: location ? location.coords.longitude : -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        loadingEnabled={!location}
        region={{
          latitude: location ? location.coords.latitude : 37.78825,
          longitude: location ? location.coords.longitude : -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      > 

        {location &&
        <MapItem 
          latitude={location.coords.latitude}
          longitude={location.coords.longitude}
          placeName="Sabor Supremo"
          placeId="Sabor Supremo"
          rating={4.8}
          reviews={8523}
        />
        }
        </MapView>
    </SafeAreaView>
  );
}
