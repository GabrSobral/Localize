import { SvgXml } from "react-native-svg";
import { Image, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useAuth } from "../../../contexts/auth/hook";
import { useRestaurant } from "../../../contexts/restaurants/hook";

const bannerFoods = `<svg width="116" height="116" viewBox="0 0 103 103" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
    d="M91.5875 63.9959C92.4414 63.1591 93.5909 62.6931 94.7864 62.6992C95.9818 62.7052 97.1266 63.1828 97.9719 64.0281C98.8173 64.8734 99.2949 66.0182 99.3009 67.2137C99.3069 68.4091 98.8409 69.5587 98.0042 70.4125L70.4125 98.0042C69.5587 98.8409 68.4091 99.3069 67.2137 99.3009C66.0182 99.2948 64.8734 98.8173 64.0281 97.9719C63.1828 97.1266 62.7052 95.9818 62.6992 94.7864C62.6931 93.5909 63.1591 92.4413 63.9959 91.5875L91.5875 63.9959Z"
    stroke="#F6F6F6" stroke-width="2.5125" stroke-miterlimit="10" />
<path
    d="M91.0836 64.4999L90.2815 63.6979C89.6652 63.0798 88.933 62.5894 88.1268 62.2548C87.3207 61.9202 86.4564 61.748 85.5836 61.748C84.7108 61.748 83.8465 61.9202 83.0403 62.2548C82.2342 62.5894 81.502 63.0798 80.8857 63.6979L63.6982 80.8854C63.0801 81.5017 62.5897 82.2339 62.2551 83.04C61.9205 83.8462 61.7483 84.7104 61.7483 85.5833C61.7483 86.4561 61.9205 87.3204 62.2551 88.1265C62.5897 88.9327 63.0801 89.6649 63.6982 90.2812L64.5003 91.0833"
    stroke="#F6F6F6" stroke-width="2.5125" stroke-miterlimit="10" />
<path
    d="M97.5001 70.9167L98.3022 71.7188C98.9185 72.3349 99.4075 73.0664 99.741 73.8715C100.075 74.6766 100.246 75.5395 100.246 76.411C100.246 77.2824 100.075 78.1454 99.741 78.9505C99.4075 79.7556 98.9185 80.4871 98.3022 81.1031L81.1147 98.3021C80.4986 98.9185 79.7671 99.4074 78.962 99.741C78.1569 100.075 77.294 100.246 76.4225 100.246C75.551 100.246 74.6881 100.075 73.883 99.741C73.0779 99.4074 72.3464 98.9185 71.7303 98.3021L70.9282 97.5"
    stroke="#F6F6F6" stroke-width="2.5125" stroke-miterlimit="10" />
<path
    d="M90.1668 71.8333C89.1944 71.8333 88.2617 72.2196 87.5741 72.9073C86.8865 73.5949 86.5002 74.5275 86.5002 75.5C86.5002 76.4724 86.1139 77.4051 85.4262 78.0927C84.7386 78.7803 83.806 79.1666 82.8335 79.1666C81.861 79.1666 80.9284 79.553 80.2408 80.2406C79.5531 80.9282 79.1668 81.8609 79.1668 82.8333C79.1668 83.8058 78.7805 84.7384 78.0929 85.426C77.4053 86.1137 76.4726 86.5 75.5002 86.5C74.5277 86.5 73.5951 86.8863 72.9074 87.5739C72.2198 88.2616 71.8335 89.1942 71.8335 90.1666"
    stroke="#F6F6F6" stroke-width="2.5125" stroke-miterlimit="10" />
<path
    d="M50.8334 27.9583C50.8334 27.3505 51.0748 26.7676 51.5046 26.3378C51.9344 25.9081 52.5173 25.6666 53.125 25.6666H88.875C89.4828 25.6666 90.0657 25.9081 90.4955 26.3378C90.9253 26.7676 91.1667 27.3505 91.1667 27.9583C91.1667 28.5661 90.9253 29.149 90.4955 29.5787C90.0657 30.0085 89.4828 30.25 88.875 30.25H53.125C52.5173 30.25 51.9344 30.0085 51.5046 29.5787C51.0748 29.149 50.8334 28.5661 50.8334 27.9583V27.9583Z"
    stroke="#F6F6F6" stroke-width="2.5125" stroke-miterlimit="10" />
<path d="M88.6228 30.25L87.3051 40.3333H54.7061L53.377 30.25" stroke="#F6F6F6"
    stroke-width="2.5125" stroke-miterlimit="10" />
<path d="M67.3332 8.25H65.4999V10.0833H67.3332V8.25Z" fill="#F6F6F6" />
<path d="M76.4998 7.33331H74.6665V9.16665H76.4998V7.33331Z" fill="#F6F6F6" />
<path d="M72.8332 11H70.9999V12.8333H72.8332V11Z" fill="#F6F6F6" />
<path d="M56.3333 25.6666V20.1666" stroke="#F6F6F6" stroke-width="2.5125" stroke-miterlimit="10" />
<path d="M85.6666 20.1666V25.6666" stroke="#F6F6F6" stroke-width="2.5125" stroke-miterlimit="10" />
<path
    d="M71.1145 20.1666H55.8749C55.2671 20.1666 54.6842 19.9251 54.2545 19.4954C53.8247 19.0656 53.5833 18.4827 53.5833 17.8749C53.5833 17.2671 53.8247 16.6842 54.2545 16.2545C54.6842 15.8247 55.2671 15.5833 55.8749 15.5833H86.1249C86.7327 15.5833 87.3156 15.8247 87.7454 16.2545C88.1751 16.6842 88.4166 17.2671 88.4166 17.8749C88.4166 18.4827 88.1751 19.0656 87.7454 19.4954C87.3156 19.9251 86.7327 20.1666 86.1249 20.1666H76.3968"
    stroke="#F6F6F6" stroke-width="2.5125" stroke-miterlimit="10" />
<path
    d="M85.6666 15.5833V15.125C85.6666 8.79996 79.101 3.66663 70.9999 3.66663C62.8989 3.66663 56.3333 8.79996 56.3333 15.125V15.5833"
    stroke="#F6F6F6" stroke-width="2.5125" stroke-miterlimit="10" />
<path
    d="M63.6667 15.5833C64.8524 15.5825 66.002 15.9913 66.9209 16.7405L73.7501 22.3208L80.5793 16.7405C81.4982 15.9913 82.6477 15.5825 83.8334 15.5833"
    stroke="#F6F6F6" stroke-width="2.5125" stroke-miterlimit="10" />
<g clip-path="url(#clip0_97_604)">
    <path d="M11.4586 78.1666H32.542" stroke="#F6F6F6" stroke-width="2.5125"
        stroke-miterlimit="10" />
    <path d="M23.9937 47.1947L19.926 78.1666" stroke="#F6F6F6" stroke-width="2.5125"
        stroke-miterlimit="10" />
    <path d="M9.90002 66.2499L13.0167 90.0833H30.9834L34.1 66.2499" stroke="#F6F6F6"
        stroke-width="2.5125" stroke-miterlimit="10" />
    <path d="M8.25012 61.6666H35.7501V66.2499H8.25012V61.6666Z" stroke="#F6F6F6"
        stroke-width="2.5125" stroke-miterlimit="10" />
    <path
        d="M33.9167 61.6666V60.7499C33.9167 58.805 33.1441 56.9397 31.7688 55.5644C30.3936 54.1892 28.5283 53.4166 26.5834 53.4166H17.4167C15.4718 53.4166 13.6065 54.1892 12.2313 55.5644C10.856 56.9397 10.0834 58.805 10.0834 60.7499V61.6666"
        stroke="#F6F6F6" stroke-width="2.5125" stroke-miterlimit="10" />
</g>
<defs>
    <clipPath id="clip0_97_604">
        <rect width="44" height="44" fill="white" transform="translate(0 47)" />
    </clipPath>
</defs>
</svg>
`;

export function ProfileBanner() {
  const { session } = useAuth();
  const { comments } = useRestaurant();

  const myComments = comments
    .map((comment) => comment.comments)
    .flat()
    .filter((comment) => comment.userId === session?.user.id);

  return (
    <View className="w-full h-[300px] bg-primary relative items-center justify-around flex-row">
      <LinearGradient
        colors={["#00000000", "#00000fff"]} // Gradient from transparent to semi-transparent black
        start={{ x: 0, y: 1 }} // Bottom
        end={{ x: 0, y: 0 }} // Top
        className="absolute top-0 left-0 w-full h-[70px]"
      ></LinearGradient>

      <View className="">
        <View className="rounded-full w-[128px] h-[128px] bg-primary border mb-3">
          {session?.user.img && (
            <Image
              width={128}
              height={128}
              className="rounded-full w-[128px] h-[128px]"
              source={{ uri: session?.user.img }}
            />
          )}
        </View>

        <Text className="text-[#FFF] text-lg font-semibold">
          Olá, {session?.user.name || "-"}
        </Text>
        <Text className="text-[#FFF] text-base">Santos</Text>
        <Text className="text-[#FFF] text-base">{myComments.length} Avaliações publicadas</Text>
      </View>

      <View className="items-center justify-center">
        <SvgXml xml={bannerFoods} />
      </View>
    </View>
  );
}
