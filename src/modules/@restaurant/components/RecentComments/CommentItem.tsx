import { Image, Text, View } from "react-native";
import { IComment } from "../../../../app/restaurant/[id]";
import { formatDate } from "../../../../utils/formatDate";
import { SvgXml } from "react-native-svg";
import { useEffect, useState } from "react";

interface Props {
  comment: IComment["comments"][0];
}

const starFilled = `<svg width="35" height="33" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2008 1.33619L11.0441 9.76409L1.74417 11.1199C0.076416 11.3618 -0.591959 13.4179 0.617482 14.5955L7.34579 21.1519L5.75442 30.4137C5.46798 32.0878 7.23122 33.3418 8.70801 32.5589L17.0277 28.1858L25.3474 32.5589C26.8242 33.3355 28.5874 32.0878 28.301 30.4137L26.7096 21.1519L33.4379 14.5955C34.6473 13.4179 33.979 11.3618 32.3112 11.1199L23.0112 9.76409L18.8546 1.33619C18.1098 -0.166059 15.9519 -0.185156 15.2008 1.33619Z" fill="#F2CF63"/>
</svg>
`;

const starUnmarked = `<svg width="35" height="33" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2008 1.33619L11.0441 9.76409L1.74417 11.1199C0.076416 11.3618 -0.591959 13.4179 0.617482 14.5955L7.34579 21.1519L5.75442 30.4137C5.46798 32.0878 7.23122 33.3418 8.70801 32.5589L17.0277 28.1858L25.3474 32.5589C26.8242 33.3355 28.5874 32.0878 28.301 30.4137L26.7096 21.1519L33.4379 14.5955C34.6473 13.4179 33.979 11.3618 32.3112 11.1199L23.0112 9.76409L18.8546 1.33619C18.1098 -0.166059 15.9519 -0.185156 15.2008 1.33619Z" fill="#D0D0D0"/>
</svg>
`;

export function CommentItem({ comment }: Props) {
  const [arrayStar, setArrayStar] = useState(generateBooleanArray(comment.rating));

  useEffect(() => {
    setArrayStar(generateBooleanArray(comment.rating));
  }, [comment.rating]);

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

  return (
    <View className="rounded-lg p-4 mx-4 border border-[#eee]">
      <View className="flex-row gap-4">
        <View className="h-[64px] w-[64px] rounded-full bg-primary shadow-lg">
          {comment.photoUrl ? (
            <Image source={{ uri: comment.photoUrl }} className="h-[64px] w-[64px] rounded-full"/>
          ) : null}
        </View>

        <View className="w-full flex-1">
          <Text className="text-[16px] font-semibold">{comment.name}</Text>

          <Text className="text-[16px]">{comment.content}</Text>
        </View>
      </View>

      <View className="flex-row gap-x-3 justify-between my-4">
          {arrayStar.map((star, i) => (
            <SvgXml
              xml={star ? starFilled : starUnmarked}
              key={i}
              width={36}
              height={36}
            />
          ))}
        </View>

      <Text className="text-base flex-1 ml-auto text-[#777] mt-2">
        Publicado em: {formatDate(comment.publishedAt)}
      </Text>
    </View>
  );
}
