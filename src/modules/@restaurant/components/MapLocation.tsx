import { Alert, Linking } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import { MapItem } from "../../@map/components/MapItem";
import { IRestaurant } from "../../../contexts/restaurants/context";

interface Props {
  location: IRestaurant["location"];
  name: string;
  id: number;
}

export function MapLocation({ location: { address, latitude, longitude }, name, id }: Props) {
  const handlePress = async () => {
    const url =
      "https://www.google.com/maps/dir/?api=1&destination=4.5137578,-133.7860133";
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  return (
    <MapView
      className="h-[220px] mx-4 rounded-lg overflow-hidden"
      provider={PROVIDER_GOOGLE}
      pitchEnabled={false}
      rotateEnabled={false}
      scrollEnabled={false}
      onPress={handlePress}
      zoomEnabled={false}
      initialRegion={{
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      region={{
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <MapItem
        latitude={latitude}
        longitude={longitude}
        placeName={name}
        placeId={id.toString()}
        rating={4.8}
        reviews={8523}
      />
    </MapView>
  );
}
