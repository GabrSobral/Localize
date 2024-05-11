import { Image, Pressable, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, View, Dimensions } from "react-native";
import { SvgXml } from "react-native-svg";

const { width } = Dimensions.get("window");

const starSVG = `<svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0245 0.463524C14.1741 0.00286877 14.8259 0.00287008 14.9755 0.463525L17.8677 9.36475C17.9346 9.57076 18.1266 9.71024 18.3432 9.71024H27.7025C28.1869 9.71024 28.3883 10.33 27.9964 10.6147L20.4246 16.116C20.2494 16.2433 20.176 16.469 20.243 16.675L23.1351 25.5762C23.2848 26.0369 22.7576 26.42 22.3657 26.1353L14.7939 20.634C14.6186 20.5067 14.3814 20.5067 14.2061 20.634L6.63428 26.1353C6.24242 26.42 5.71518 26.0369 5.86486 25.5762L8.75704 16.675C8.82398 16.469 8.75065 16.2433 8.5754 16.116L1.00357 10.6147C0.611716 10.33 0.813104 9.71024 1.29747 9.71024H10.6568C10.8734 9.71024 11.0654 9.57076 11.1323 9.36475L14.0245 0.463524Z" fill="#F2CF63"/>
</svg>
`;

const arrowBack = `<svg width="17" height="27" viewBox="0 0 17 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7134 1.89072C15.1239 2.30122 15.1612 2.94357 14.8254 3.39622L14.7134 3.52591L4.73988 13.5L14.7134 23.4741C15.1239 23.8845 15.1612 24.5269 14.8254 24.9796L14.7134 25.1092C14.3029 25.5197 13.6606 25.557 13.2079 25.2212L13.0783 25.1092L2.28658 14.3176C1.87609 13.9071 1.83877 13.2647 2.17463 12.8121L2.28658 12.6824L13.0783 1.89072C13.5298 1.43918 14.2619 1.43918 14.7134 1.89072Z" fill="#0DA31A" stroke="#0DA31A" stroke-width="2"/>
</svg>
`;

export default function RestaurantScreen() {
  const { id } = useLocalSearchParams();
  const { goBack } = useNavigation();

  return (
    <ScrollView className="bg-[#FFF]">
      <StatusBar style="light" />

      <View className="w-full h-[300px] bg-[#EEE] relative">
        <Image
            source={require("../assets/example.png")}
            style={{ width, height: 300 }}
        />

        <LinearGradient
          colors={["#00000000", "#00000fff"]} // Gradient from transparent to semi-transparent black
          start={{ x: 0, y: 1 }} // Bottom
          end={{ x: 0, y: 0 }} // Top
          className="absolute top-0 left-0 w-full h-[70px]"
        >

        </LinearGradient>

        <Pressable
          onPress={goBack}
          android_ripple={{ color: "#FFFFFF88" }}
          className="p-4 rounded-lg bg-[#FFFFFF88] mr-auto w-[56px] h-[56px] items-center justify-center absolute left-4 top-10"
          aria-label="Voltar"
        >
          <SvgXml xml={arrowBack} />
        </Pressable>
      </View>

      <View className="p-4 -top-4 rounded-t-xl bg-[#FFF]">
        <Text className="text-[32px] font-bold">Sabor Supremo</Text>

        <View className="flex-row mt-2 mb-4">
          <SvgXml xml={starSVG} />

          <View className="flex-row gap-1 items-center">
            <Text className="font-semibold text-[18px]">4.8</Text>
            <Text>(8.5k Avaliações)</Text>
          </View>
        </View>

        <Text className="text-[#333] text-base">
          Nossa cozinha é uma homenagem à riqueza da culinária brasileira,
          servindo pratos caseiros repletos de sabores autênticos. Nossos chefs
          talentosos preparam com carinho receitas tradicionais de todo o
          Brasil, oferecendo uma experiência gastronômica que leva você de volta
          às raízes.
        </Text>
      </View>

      <Pressable
        className="bg-primary m-4 rounded-lg p-4 items-center"
        android_ripple={{ color: "#FFFFFF88" }}
      >
        <Text className="text-[#FFF] text-[22px]">Ver mais</Text>
      </Pressable>
    </ScrollView>
  );
}
