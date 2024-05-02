import { Text, View } from "react-native";
import { SvgXml } from "react-native-svg";

const localizationIcon = `<svg width="27" height="32" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.3967 10.8125C11.8688 10.8125 10.6259 12.0881 10.6259 13.6579C10.6259 15.226 11.8688 16.5 13.3967 16.5C14.9246 16.5 16.1675 15.226 16.1675 13.6579C16.1675 12.0881 14.9246 10.8125 13.3967 10.8125M13.3967 18.9375C10.5594 18.9375 8.25085 16.5699 8.25085 13.6579C8.25085 10.7442 10.5594 8.375 13.3967 8.375C16.234 8.375 18.5425 10.7442 18.5425 13.6579C18.5425 16.5699 16.234 18.9375 13.3967 18.9375" fill="#272D2F"/>
<mask id="mask0_98_167" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="27" height="32">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.333374 0.25H26.4576V31.9375H0.333374V0.25Z" fill="white"/>
</mask>
<g mask="url(#mask0_98_167)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.3951 2.6875C7.50198 2.6875 2.70764 7.65513 2.70764 13.7586C2.70764 21.5245 11.6123 29.0905 13.3951 29.4935C15.178 29.0889 24.0826 21.5229 24.0826 13.7586C24.0826 7.65513 19.2883 2.6875 13.3951 2.6875V2.6875ZM13.3951 31.9375C10.5546 31.9375 0.332642 22.9155 0.332642 13.7586C0.332642 6.30962 6.19256 0.25 13.3951 0.25C20.5977 0.25 26.4576 6.30962 26.4576 13.7586C26.4576 22.9155 16.2356 31.9375 13.3951 31.9375V31.9375Z" fill="#272D2F"/>
</g>
</svg>
`;

export function Header() {
  return (
    <View className="px-4 py-2 flex-row justify-between mb-4">
      <View className="flex-row gap-x-3">
        <SvgXml xml={localizationIcon} />
        <Text className="font-bold text-[23px]">Santos</Text>
      </View>
    </View>
  );
}
