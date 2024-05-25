import { useLayoutEffect, useState } from "react";
import { Pressable, Text, ScrollView, View } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";

import { Banner } from "../../modules/@restaurant/components/Banner";
import { ReviewsOverview } from "../../modules/@restaurant/ReviewsOverview";
import { MapLocation } from "../../modules/@restaurant/components/MapLocation";
import { RecentComments } from "../../modules/@restaurant/components/RecentComments";
import { LocationInformation } from "../../modules/@restaurant/components/LocationInformation";

import { useAuth } from "../../contexts/auth/hook";
import { useRestaurant } from "../../contexts/restaurants/hook";
import { IRestaurant } from "../../contexts/restaurants/context";

import { LoginModal } from "./LoginModal";

export interface IComment {
  restaurantId: number;
  comments: {
    userId: number;
    name: string;
    content: string;
    publishedAt: Date;
    photoUrl: null | string;
    rating: number; // Just natural numbers between 1 and 5, without float
  }[];
}

export default function RestaurantScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { session } = useAuth();
  const { restaurants, comments: commentsMock } = useRestaurant();

  const [restaurant, setRestaurant] = useState<IRestaurant | null>(null);
  const [comments, setComments] = useState<IComment | null>(null);

  const [loginModalVisible, setLoginModalVisible] = useState(false);

  useLayoutEffect(() => {
    if (id) {
      setRestaurant(restaurants.find((item) => item.id === Number(id)) || null);
      setComments(
        commentsMock.find((item) => item.restaurantId === Number(id)) || null
      );
    }
  }, [restaurants, id, commentsMock]);

  return (
    restaurant && (
      <ScrollView className="bg-[#FFF]">
        <Banner url={restaurant?.imageUrl || ""} />

        <View className="p-4 -top-4 rounded-t-xl bg-[#FFF]">
          <Text className="text-[32px] font-bold">{restaurant?.name}</Text>

          <ReviewsOverview restaurant={restaurant} />

          <Text className="text-[#333] text-base">
            {restaurant?.description}
          </Text>
        </View>

        <LocationInformation location={restaurant?.location} />
        <MapLocation
          id={restaurant.id}
          location={restaurant.location}
          name={restaurant.name}
        />

        <RecentComments
          restaurant={restaurant}
          comments={comments?.comments || []}
        />

        {session?.user ? (
          <Link
            href={{
              pathname: "restaurant-feedback",
              params: { id: restaurant.id },
            }}
            asChild
          >
            <Pressable
              className="bg-primary m-4 rounded-lg p-4 items-center"
              android_ripple={{ color: "#FFFFFF88" }}
            >
              <Text className="text-[#FFF] text-[22px]">
                Avaliar estabelecimento
              </Text>
            </Pressable>
          </Link>
        ) : (
          <Pressable
            className="bg-primary m-4 rounded-lg p-4 items-center"
            android_ripple={{ color: "#FFFFFF88" }}
            onPress={() => setLoginModalVisible(true)}
          >
            <Text className="text-[#FFF] text-[22px]">
              Avaliar estabelecimento
            </Text>
          </Pressable>
        )}

        <LoginModal
          closeModal={() => setLoginModalVisible(false)}
          isVisible={loginModalVisible}
        />
      </ScrollView>
    )
  );
}
