import { SvgXml } from "react-native-svg";
import { useNavigation } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, Image, Pressable, View } from "react-native";

const arrowBack = `<svg width="17" height="27" viewBox="0 0 17 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7134 1.89072C15.1239 2.30122 15.1612 2.94357 14.8254 3.39622L14.7134 3.52591L4.73988 13.5L14.7134 23.4741C15.1239 23.8845 15.1612 24.5269 14.8254 24.9796L14.7134 25.1092C14.3029 25.5197 13.6606 25.557 13.2079 25.2212L13.0783 25.1092L2.28658 14.3176C1.87609 13.9071 1.83877 13.2647 2.17463 12.8121L2.28658 12.6824L13.0783 1.89072C13.5298 1.43918 14.2619 1.43918 14.7134 1.89072Z" fill="#0DA31A" stroke="#0DA31A" stroke-width="2"/>
</svg>
`;

const { width } = Dimensions.get("window");

export function Banner({ url }: { url: string }) {
  const { goBack } = useNavigation();

  return (
    <View className="w-full h-[300px] bg-[#EEE] relative">
      <Image
        source={{ uri: url }}
        style={{ width, height: 300 }}
      />

      <LinearGradient
        colors={["#00000000", "#00000fff"]} // Gradient from transparent to semi-transparent black
        start={{ x: 0, y: 1 }} // Bottom
        end={{ x: 0, y: 0 }} // Top
        className="absolute top-0 left-0 w-full h-[70px]"
      ></LinearGradient>

      <Pressable
        onPress={goBack}
        android_ripple={{ color: "#FFFFFF88" }}
        className="p-4 rounded-lg bg-[#FFFFFF88] mr-auto w-[56px] h-[56px] items-center justify-center absolute left-4 top-10"
        aria-label="Voltar"
      >
        <SvgXml xml={arrowBack} />
      </Pressable>
    </View>
  );
}
