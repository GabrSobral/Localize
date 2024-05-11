import { FlatList, ListRenderItemInfo, Pressable, Text, TouchableOpacity, View } from "react-native";

const data = [
  { id: "1", title: "Popular" },
  { id: "2", title: "Mais próximo" },
  { id: "3", title: "Saudável" },
  { id: "4", title: "Pasta" },
  { id: "5", title: "Churrasco" },
];

const renderItem = ({ item }: ListRenderItemInfo<{ title: string }>) => (
  <Pressable android_ripple={{ color: "#FFFFFF88" }} className="bg-primary rounded-md mx-2 px-4 py-3">
    <Text className="text-[#FFF]">{item.title}</Text>
  </Pressable>
);

export function CategoriesList() {
  return (
    <View className="mt-4">
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
    </View>
  );
}
