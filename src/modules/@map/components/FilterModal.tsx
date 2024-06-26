import Checkbox from "expo-checkbox";
import { LinearGradient } from "expo-linear-gradient";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  Modal,
  View,
  Text,
  Pressable,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import { IRestaurant } from "../../../contexts/restaurants/context";
import { useRestaurant } from "../../../contexts/restaurants/hook";

interface Props {
  isVisible: boolean;
  onClose: () => void;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;

  restaurants: IRestaurant[];
  setFilteredRestaurants: Dispatch<SetStateAction<IRestaurant[]>>;

  canSearch?: boolean;
}

const typesOfCuisine = [
  { id: "1", label: "Italiana" },
  { id: "2", label: "Japonesa" },
  { id: "3", label: "Brasileira" },
  { id: "4", label: "Mexicana" },
];

const distance = [
  { id: "1", label: "Até 100m", value: 100 },
  { id: "2", label: " Até 500m", value: 500 },
  { id: "3", label: "Até 5km", value: 5000 },
  { id: "4", label: "Até 10km", value: 10000 },
];

export function FilterModal({
  isVisible,
  onClose,
  search,
  setSearch,
  restaurants,
  setFilteredRestaurants,
  canSearch = true,
}: Props) {
  const [selectedTypesOfCuisine, setSelectedTypesOfCuisine] = useState<
    string[]
  >(typesOfCuisine.map((item) => item.id));
  const [selectedDistance, setSelectedDistance] = useState<string>(
    distance[2].id
  );

  const [selectedStar, setSelectedStar] = useState<number>(1);

  const { restaurants: allRestaurants } = useRestaurant();

  function handleResetFilter() {
    setSearch("");
    setSelectedTypesOfCuisine(typesOfCuisine.map((item) => item.id));
    setSelectedDistance(distance[2].id);
    setSelectedStar(1)
  }

  const handleTypesOfCuisineChange = (id: string) => {
    setSelectedTypesOfCuisine((prevSelectedItems) => {
      if (prevSelectedItems.includes(id)) {
        return prevSelectedItems.filter((item) => item !== id);
      } else {
        return [...prevSelectedItems, id];
      }
    });
  };

  const handleDistanceChange = (id: string) => {
    setSelectedDistance(id);
  };

  useEffect(() => {
    const newState = allRestaurants.filter((restaurant) =>
      restaurant.categories.some((category) =>
        selectedTypesOfCuisine.some(
          (typeOfCuisine) => category.id === typeOfCuisine
        )
      ) && restaurant.rating >= selectedStar
    );

    setFilteredRestaurants(newState);
  }, [selectedTypesOfCuisine, allRestaurants, selectedStar]);

  // useEffect(() => {
  //   const newState = allRestaurants.filter(
  //     (restaurant) => restaurant.rating >= selectedStar
  //   );

  //   setFilteredRestaurants(newState);
  // }, [selectedStar, allRestaurants]);

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <Pressable onPress={onClose}>
        <LinearGradient
          colors={["#00000AAA", "#00000000"]} // Gradient from transparent to semi-transparent black
          start={{ x: 0, y: 1 }} // Bottom
          end={{ x: 0, y: 0 }} // Top
          className="w-full h-[120px]"
        />
      </Pressable>

      <View className="h-[90%] w-full bg-[#eee] rounded-tr-[16px] rounded-tl-[16px] absolute bottom-0 shadow-lg">
        <Pressable onPress={onClose}>
          <View className="h-[60px] bg-[#eee] rounded-tr-[16px] rounded-tl-[16px] px-4 flex-row items-center justify-center ">
            <Text className="text-[#333] font-semibold">Fechar</Text>

            <MaterialIcons name="close" color="#111" size={22} />
          </View>
        </Pressable>

        <View className="p-4 flex-1">
          {canSearch && (
            <TextInput
              className="px-2 py-2 rounded-md bg-[#FFF] h-[58px]"
              placeholder="Digite o nome do estabelecimento"
              value={search}
              onChangeText={setSearch}
            />
          )}
          <ScrollView>
            <View className="justify-center rounded-md py-4">
              <Text className="text-2xl mb-4">Tipos de culinária</Text>

              <View className="flex-row items-center mb-2">
                <Checkbox
                  value={
                    selectedTypesOfCuisine.length === typesOfCuisine.length
                  }
                  onValueChange={() =>
                    setSelectedTypesOfCuisine(
                      selectedTypesOfCuisine.length === typesOfCuisine.length
                        ? []
                        : typesOfCuisine.map((item) => item.id)
                    )
                  }
                  className="mr-2 border-[#FFF]"
                  color="#4AAD54"
                />
                <Text
                  className="text-lg"
                  onPress={() =>
                    setSelectedTypesOfCuisine(
                      selectedTypesOfCuisine.length === typesOfCuisine.length
                        ? []
                        : typesOfCuisine.map((item) => item.id)
                    )
                  }
                >
                  Todos
                </Text>
              </View>

              {typesOfCuisine.map((item) => (
                <View className="flex-row items-center mb-2" key={item.id}>
                  <Checkbox
                    value={selectedTypesOfCuisine.includes(item.id)}
                    onValueChange={() => handleTypesOfCuisineChange(item.id)}
                    className="mr-2 border-[#FFF]"
                    color="#4AAD54"
                  />
                  <Text
                    className="text-lg"
                    onPress={() => handleTypesOfCuisineChange(item.id)}
                  >
                    {item.label}
                  </Text>
                </View>
              ))}
            </View>

            <View className="justify-center rounded-md">
              <Text className="text-2xl mb-4">Distância</Text>

              {distance.map((item) => (
                <View className="flex-row items-center mb-2" key={item.id}>
                  <Pressable
                    onPress={() => handleDistanceChange(item.id)}
                    className="flex-row items-center"
                  >
                    <View
                      className={`w-6 h-6 mr-2 rounded-full border-2 border-primary ${
                        selectedDistance === item.id
                          ? "border-blue-500"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedDistance === item.id && (
                        <View className="w-4 h-4 bg-primary rounded-full m-auto" />
                      )}
                    </View>

                    <Text
                      className="text-lg"
                      onPress={() => handleDistanceChange(item.id)}
                    >
                      {item.label}
                    </Text>
                  </Pressable>
                </View>
              ))}
            </View>

            <View className="justify-center rounded-md">
              <Text className="text-2xl mb-4">Avaliação</Text>
              {[1, 2, 3, 4, 5].map((item) => (
                <View className="flex-row items-center mb-2" key={item}>
                  <Pressable
                    onPress={() => setSelectedStar(item)}
                    className="flex-row items-center"
                  >
                    <View
                      className={`w-6 h-6 mr-2 rounded-full border-2 border-primary ${
                        selectedStar === item
                          ? "border-blue-500"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedStar === item && (
                        <View className="w-4 h-4 bg-primary rounded-full m-auto" />
                      )}
                    </View>

                    <Text
                      className="text-lg"
                      onPress={() => setSelectedStar(item)}
                    >
                      No mínimo {item} estrela(s)
                    </Text>
                  </Pressable>
                </View>
              ))}
            </View>
          </ScrollView>
          <Pressable
            className="w-full p-4 rounded-md bg-[#ddd] items-center mt-4"
            onPress={handleResetFilter}
          >
            <Text className="text-[16px] font-semibold">Limpar filtro</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
