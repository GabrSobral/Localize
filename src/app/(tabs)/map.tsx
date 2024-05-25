import Fuse from "fuse.js";
import * as Location from "expo-location";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useMemo, useState } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

import { Header } from "../../modules/@map/components/Header";
import { MapItem } from "../../modules/@map/components/MapItem";
import { useRestaurant } from "../../contexts/restaurants/hook";

export default function Tab() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState("");

  const { restaurants } = useRestaurant();

  const [search, setSearch] = useState("");

  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  useEffect(() => {
    setFilteredRestaurants(restaurants);
  }, [restaurants]);

  const searchedRestaurants = useMemo(() => {
    if (search.length < 3) return filteredRestaurants;

    const results = new Fuse(filteredRestaurants, {
      keys: ["name"],
      shouldSort: false,
      threshold: 0.3,
      minMatchCharLength: 3,
    })
      .search(search)
      .map((x) => ({ ...x.item }));

    return results;
  }, [filteredRestaurants, search]);

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
  }, [Location]);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <SafeAreaView className="justify-center items-center flex-1 mt-12">
      <StatusBar style="dark" />
      <Header
        restaurants={searchedRestaurants}
        setFilteredRestaurants={setFilteredRestaurants}
        search={search}
        setSearch={setSearch}
      />

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
        showsUserLocation
        region={{
          latitude: location ? location.coords.latitude : 37.78825,
          longitude: location ? location.coords.longitude : -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {filteredRestaurants.map((restaurant) => (
          <MapItem
            key={restaurant.id}
            latitude={restaurant.location.latitude}
            longitude={restaurant.location.longitude}
            placeName={restaurant.name}
            placeId={restaurant.id.toString()}
            rating={restaurant.rating}
            reviews={restaurant.maxReviewsCount}
            photoUrl={restaurant.imageUrl}
          />
        ))}
      </MapView>
    </SafeAreaView>
  );
}
