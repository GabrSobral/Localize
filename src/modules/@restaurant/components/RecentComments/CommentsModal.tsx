import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Modal, View, Text, Pressable, FlatList } from "react-native";

import { CommentItem } from "./CommentItem";
import { ReviewsOverview } from "../../ReviewsOverview";
import { IRestaurant } from "../../../../contexts/restaurants/context";
import { IComment } from "../../../../app/restaurant/[id]";

interface Props {
  isVisible: boolean;
  onClose: () => void;
  restaurant: IRestaurant;
  comments: IComment["comments"]
}

export function CommentsModal({ isVisible, onClose, restaurant, comments }: Props) {
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

      <View className="h-[90%] w-full bg-[#FFF] rounded-tr-[16px] rounded-tl-[16px] absolute bottom-0 shadow-lg">
        <Pressable onPress={onClose}>
          <View className="h-[60px] bg-[#eee] rounded-tr-[16px] rounded-tl-[16px] px-4 flex-row items-center justify-center ">
            <Text className="text-[#333] font-semibold">Fechar</Text>

            <MaterialIcons name="close" color="#111" size={22} />
          </View>
        </Pressable>

        <FlatList
          renderItem={comment => <CommentItem comment={comment.item}/>}
          data={comments}
          ListHeaderComponent={() => (
            <View className="mx-4">
              <ReviewsOverview restaurant={restaurant}/>
            </View>
          )}
          className=""
          ItemSeparatorComponent={() => (
            <View className="w-full h-[1px] bg-[#eee] my-2" />
          )}
        />
      </View>
    </Modal>
  );
}
