import { Text } from "react-native";
import { View } from "react-native";
import { SvgXml } from "react-native-svg";

import { IRestaurant } from "../../contexts/restaurants/context";

const starSVG = `<svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0245 0.463524C14.1741 0.00286877 14.8259 0.00287008 14.9755 0.463525L17.8677 9.36475C17.9346 9.57076 18.1266 9.71024 18.3432 9.71024H27.7025C28.1869 9.71024 28.3883 10.33 27.9964 10.6147L20.4246 16.116C20.2494 16.2433 20.176 16.469 20.243 16.675L23.1351 25.5762C23.2848 26.0369 22.7576 26.42 22.3657 26.1353L14.7939 20.634C14.6186 20.5067 14.3814 20.5067 14.2061 20.634L6.63428 26.1353C6.24242 26.42 5.71518 26.0369 5.86486 25.5762L8.75704 16.675C8.82398 16.469 8.75065 16.2433 8.5754 16.116L1.00357 10.6147C0.611716 10.33 0.813104 9.71024 1.29747 9.71024H10.6568C10.8734 9.71024 11.0654 9.57076 11.1323 9.36475L14.0245 0.463524Z" fill="#F2CF63"/>
</svg>
`;

interface Props {
  restaurant: IRestaurant;
}

export function ReviewsOverview({ restaurant }: Props) {
  return (
    <View className="flex-row justify-between gap-4 mt-2 mb-4">
      <View className="flex-row">
        <SvgXml xml={starSVG} />

        <View className="flex-row gap-1 items-center">
          <Text className="font-semibold text-[18px]">{restaurant.rating}</Text>
          <Text>({restaurant.maxReviewsCount} Avaliações)</Text>
        </View>
      </View>

      <Text className="font-semibold">5 KM / 15 min</Text>
    </View>
  );
}
