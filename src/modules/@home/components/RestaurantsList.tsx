import { Link, router } from "expo-router";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { useRestaurant } from "../../../contexts/restaurants/hook";
import { IRestaurant } from "../../../contexts/restaurants/context";

const Item = ({ restaurant }: { restaurant: IRestaurant }) => (
  <Link href={{ pathname: "/restaurant/[id]", params: { id: restaurant.id.toString() } }} asChild>
    <Pressable
      android_ripple={{ color: "#FFFFFF88" }}
      className="w-[250px] h-[300px] bg-primary rounded-md mr-4"
    >
      <Image
        source={{ uri: restaurant.imageUrl }}
        style={{ width: 250, height: 300, borderRadius: 6 }}
      />
      
      <LinearGradient
        colors={["#000000A0", "#00000000"]} // Gradient from transparent to semi-transparent black
        start={{ x: 0, y: 1 }} // Bottom
        end={{ x: 0, y: 0 }} // Top
        className="absolute bottom-0 left-0 p-3 w-full rounded-br-md rounded-bl-md"
        >
        <Text className="text-[#FFF] text-lg font-semibold">{restaurant.name}</Text>
        <Text className="text-[#EEE]">5 KM / 15 min</Text>
      </LinearGradient>
    </Pressable>
    </Link>
);

interface Props {
  restaurants: IRestaurant[]
}

export function RestaurantsList({ restaurants }: Props) {

  return (
    <View className="mt-4">
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <Item restaurant={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={350} // Use a largura do item para snap
        decelerationRate="fast"
        bounces={true}
      />
    </View>
  );
}
