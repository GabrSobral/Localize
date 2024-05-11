import { useRef } from "react";
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  ListRenderItemInfo,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.8;
const ITEM_HEIGHT = ITEM_WIDTH * 0.75;

const DATA = [
  {
    id: "1",
    title: "First Item",
    uri: "https://via.placeholder.com/450x300?text=First",
  },
  {
    id: "2",
    title: "Second Item",
    uri: "https://via.placeholder.com/450x300?text=Second",
  },
  {
    id: "3",
    title: "Third Item",
    uri: "https://via.placeholder.com/450x300?text=Third",
  },
];

const Item = ({ title }: { title: string }) => (
  <Pressable
    android_ripple={{ color: "#FFFFFF88" }}
    className="w-[250px] h-[300px] bg-primary rounded-md mr-4"
  >
    <Image
      source={require("../../../assets/example.png")}
      style={{ width: 250, height: 300, borderRadius: 6 }}
    />
    
    <LinearGradient
      colors={["#000000A0", "#00000000"]} // Gradient from transparent to semi-transparent black
      start={{ x: 0, y: 1 }} // Bottom
      end={{ x: 0, y: 0 }} // Top
      className="absolute bottom-0 left-0 p-3 w-full rounded-br-md rounded-bl-md"
    >
      <Text className="text-[#FFF] text-lg font-semibold">{title}</Text>
      <Text className="text-[#EEE]">5 KM / 15 min</Text>
    </LinearGradient>
  </Pressable>
);

export function RestaurantsList() {
  return (
    <View className="mt-4">
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={350} // Use a largura do item para snap
        decelerationRate="fast"
        bounces={false}
      />
    </View>
  );
}
