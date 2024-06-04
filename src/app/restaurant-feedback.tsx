import { SvgXml } from "react-native-svg";
import { StatusBar } from "expo-status-bar";
import { useEffect, useLayoutEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";

import { Banner } from "../modules/@restaurant/components/Banner";
import { IRestaurant } from "../contexts/restaurants/context";
import { useRestaurant } from "../contexts/restaurants/hook";

const starFilled = `<svg width="35" height="33" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2008 1.33619L11.0441 9.76409L1.74417 11.1199C0.076416 11.3618 -0.591959 13.4179 0.617482 14.5955L7.34579 21.1519L5.75442 30.4137C5.46798 32.0878 7.23122 33.3418 8.70801 32.5589L17.0277 28.1858L25.3474 32.5589C26.8242 33.3355 28.5874 32.0878 28.301 30.4137L26.7096 21.1519L33.4379 14.5955C34.6473 13.4179 33.979 11.3618 32.3112 11.1199L23.0112 9.76409L18.8546 1.33619C18.1098 -0.166059 15.9519 -0.185156 15.2008 1.33619Z" fill="#F2CF63"/>
</svg>
`;

const starUnmarked = `<svg width="35" height="33" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2008 1.33619L11.0441 9.76409L1.74417 11.1199C0.076416 11.3618 -0.591959 13.4179 0.617482 14.5955L7.34579 21.1519L5.75442 30.4137C5.46798 32.0878 7.23122 33.3418 8.70801 32.5589L17.0277 28.1858L25.3474 32.5589C26.8242 33.3355 28.5874 32.0878 28.301 30.4137L26.7096 21.1519L33.4379 14.5955C34.6473 13.4179 33.979 11.3618 32.3112 11.1199L23.0112 9.76409L18.8546 1.33619C18.1098 -0.166059 15.9519 -0.185156 15.2008 1.33619Z" fill="#D0D0D0"/>
</svg>
`;

export default function RestaurantFeedback() {
  const [star, setStar] = useState(5);
  const [arrayStar, setArrayStar] = useState(generateBooleanArray(star));
  const [restaurant, setRestaurant] = useState<IRestaurant | null>(null);
  const [content, setContent] = useState("");

  const { goBack } = useNavigation()

  const { id } = useLocalSearchParams<{ id: string }>();
  const { restaurants, createComment } = useRestaurant();

  useLayoutEffect(() => {
    if (id) {
      setRestaurant(restaurants.find((item) => item.id === Number(id)) || null);
    }
  }, [restaurants, id]);

  function generateBooleanArray(num: number): boolean[] {
    if (num < 0 || num > 5) {
      throw new Error("O número deve estar entre 0 e 5.");
    }

    const result = [];
    for (let i = 0; i < 5; i++) {
      result.push(i < num);
    }

    return result;
  }

  useEffect(() => {
    setArrayStar(generateBooleanArray(star));
  }, [star]);

  return restaurant && (
    <ScrollView className="bg-[#FFF]">
      <StatusBar style="light" animated translucent />
      <Banner url={restaurant.imageUrl} />

      <View className="p-4 -top-4 rounded-t-xl bg-[#FFF]">
        <Text className="text-[32px] font-bold">{restaurant.name}</Text>

        <View className="w-full h-[1px] bg-[#eee] my-3" />

        <Text className="text-base font-semibold">
          Selecione uma nota ({star})
        </Text>

        <View className="flex-row gap-x-3 justify-between my-4">
          {arrayStar.map((star, i) => (
            <SvgXml
              xml={star ? starFilled : starUnmarked}
              key={i}
              onPress={() => setStar(i + 1)}
              width={56}
              height={56}
            />
          ))}
        </View>

        <TextInput
          placeholder="Digite a sua avaliação"
          className="rounded-lg h-[200px] bg-[#eee] p-4 text-base"
          value={content}
          onChangeText={setContent}
        />
      </View>

      <Pressable
        className="bg-primary mx-4 rounded-lg p-4 items-center mb-4"
        android_ripple={{ color: "#FFFFFF88" }}
        onPress={() => {
          createComment(restaurant?.id, star, content);
          goBack()
        }}
      >
        <Text className="text-[#FFF] text-[22px]">Enviar avaliação</Text>
      </Pressable>
    </ScrollView>
  );
}
