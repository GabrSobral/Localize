import { useNavigation } from "expo-router";
import { Image, Text, View } from "react-native";
import { Callout, Marker } from "react-native-maps";

interface Props {
  placeId: string;
  latitude: number;
  longitude: number;
  placeName: string;
  rating: number;
  reviews: number;
}

const markerIcon = `<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.0306 29.2402C15.8916 29.3704 15.7046 29.45 15.5 29.45C15.2949 29.45 15.1078 29.3704 14.9694 29.2402L7.36505 22.0958C5.05762 19.9278 3.61664 16.849 3.61664 13.4333C3.61664 6.87062 8.93675 1.54999 15.5 1.54999C22.0627 1.54999 27.3833 6.87062 27.3833 13.4333C27.3833 16.849 25.9423 19.9278 23.6349 22.0958L16.0306 29.2402ZM15.5 8.78332C12.9316 8.78332 10.85 10.865 10.85 13.4333C10.85 16.0017 12.9316 18.0833 15.5 18.0833C18.0683 18.0833 20.15 16.0017 20.15 13.4333C20.15 10.865 18.0683 8.78332 15.5 8.78332Z" fill="#B03129"/>
</svg>
`;

export function MapItem({
  latitude,
  longitude,
  placeName,
  rating,
  reviews,
}: Props) {
  const navigation = useNavigation();

  const formatter = Intl.NumberFormat("pt-BR", {
    notation: "compact",
    compactDisplay: "short",
  });

  return (
    <Marker
      calloutAnchor={{ x: 0.5, y: -0.05 }}
      coordinate={{ latitude, longitude }}
    >
      <Callout tooltip onPress={() => navigation.navigate("restaurant", { id: 2})}>
        <View
          className="rounded-lg shadow-xl bg-[#FFF] border overflow-hidden border-[#ddd]"
          style={{ height: 210, width: 220, elevation: 3 }}
        >
          <View className="w-full h-[100px] bg-[#EEE]">
            <Image
              source={require("../../../assets/example.png")}
              style={{ width: 220, height: 100 }}
            />
          </View>

          <View className="p-2 px-3 rounded-lg bg-[#FFF]">
            <Text className="text-gray-[#222] text-xl font-semibold">
              {placeName}
            </Text>

            <View className="flex-row gap-2 items-center">
              <Text className="text-gray-[#222] font-medium text-lg">
                {rating}
              </Text>
              <Text className="text-gray-[#222]">
                ({formatter.format(reviews)} avaliações)
              </Text>
            </View>
          </View>
            
          <Text className="text-base mx-auto text-primary font-semibold">Clique para ver mais</Text>
        </View>
      </Callout>
    </Marker>
  );
}
