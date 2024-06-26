import Fuse from "fuse.js";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useMemo, useState } from "react";

import { Header } from "../../modules/@home/components/Header";
import { AppBanner } from "../../modules/@home/components/AppBanner";
import { CategoriesList } from "../../modules/@home/components/CategoriesList";
import { RestaurantsList } from "../../modules/@home/components/RestaurantsList";
import { RestaurantSearch } from "../../modules/@home/components/RestaurantSearch";
import { useRestaurant } from "../../contexts/restaurants/hook";
import { FilterModal } from "../../modules/@map/components/FilterModal";

export default function Tab() {
  const { restaurants } = useRestaurant();

  const [search, setSearch] = useState("");

  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  const [isFilterModalOpened, setIsFilterModalOpened] = useState(false);

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

  return (
    <View className="px-4 mt-12">
      <StatusBar style="dark" />
      <Header />
      <AppBanner />

      <Text className="font-semibold text-[20px] my-4">Buscar restaurante</Text>

      <RestaurantSearch search={search} setSearch={setSearch} openFilterModal={() => setIsFilterModalOpened(true)} />
      <CategoriesList />

      <RestaurantsList restaurants={searchedRestaurants} />

      <FilterModal
        isVisible={isFilterModalOpened}
        onClose={() => setIsFilterModalOpened(false)}
        restaurants={searchedRestaurants}
        search={search}
        setFilteredRestaurants={setFilteredRestaurants}
        setSearch={setSearch}
        canSearch={false}
      />
    </View>
  );
}
