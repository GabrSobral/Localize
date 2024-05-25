import { Text, View } from "react-native";
import { Fragment, useState } from "react";

import { CommentItem } from "./CommentItem";
import { CommentsModal } from "./CommentsModal";

import { IRestaurant } from "../../../../contexts/restaurants/context";
import { IComment } from "../../../../app/restaurant/[id]";

interface Props {
  restaurant: IRestaurant;
  comments: IComment["comments"];
}

export function RecentComments({ restaurant, comments }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Fragment>
      <View className="flex-row justify-between mx-4 mb-4 mt-8 items-center">
        <Text className="text-lg font-bold" onPress={() => setIsVisible(true)}>
          Avaliações recentes
        </Text>

        <Text className="text-primary" onPress={() => setIsVisible(true)}>
          Ver mais
        </Text>
      </View>

      <CommentsModal
        comments={comments}
        restaurant={restaurant}
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
      />

      {comments[0] && <CommentItem comment={comments[0]} />}
      <View className="my-1"></View>
      {comments[1] && <CommentItem comment={comments[1]} />}
    </Fragment>
  );
}
