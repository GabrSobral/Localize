import { Fragment } from "react";
import { SvgXml } from "react-native-svg";
import { Text, View } from "react-native";
import { IRestaurant } from "../../../contexts/restaurants/context";

const locationSVG = `<svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.25 15.2687V25.9184" stroke="#4AAD54" stroke-width="2.5" stroke-miterlimit="10"/>
<path d="M15.875 3.44238V16.2834" stroke="#4AAD54" stroke-width="2.5" stroke-miterlimit="10"/>
<path d="M6.125 1.31512V14.1561" stroke="#4AAD54" stroke-width="2.5" stroke-miterlimit="10"/>
<path d="M11 2.37866V15.2426" stroke="#4AAD54" stroke-width="2.5" stroke-miterlimit="10"/>
<path d="M1.25 9.11854L2.68 8.50704C3.8825 7.99345 5.17817 7.72862 6.48846 7.72862C7.763 7.72862 9.024 7.979 10.1994 8.46585L11.806 9.13138C12.9814 9.61823 14.2646 9.86861 15.5392 9.86861C16.8348 9.86861 18.117 9.60967 19.3086 9.10677L20.7516 8.49795" stroke="#4AAD54" stroke-width="2.5" stroke-miterlimit="10"/>
<path d="M15.5392 16.2888C16.8348 16.2888 18.117 16.0298 19.3086 15.527L20.7527 14.9176L20.75 2.07715L19.3059 2.68652C18.1142 3.18888 16.8348 3.44835 15.5392 3.44835C14.2646 3.44835 12.9787 3.19744 11.8033 2.71059L10.1967 2.04506C9.02129 1.55821 7.76029 1.30783 6.48575 1.30783C5.176 1.30783 3.87979 1.57265 2.67729 2.08625L1.25 2.69561L1.25271 15.5366L2.68 14.9272C3.8825 14.4136 5.17817 14.1488 6.48846 14.1488C7.763 14.1488 9.024 14.3992 10.1994 14.886L11.806 15.5516C12.9814 16.0384 14.2646 16.2888 15.5392 16.2888V16.2888Z" stroke="#4AAD54" stroke-width="2.5" stroke-miterlimit="10"/>
</svg>
`;

const mapIconSVG = `<svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.3131 8.25276C9.10688 8.25276 8.12563 9.22192 8.12563 10.4146C8.12563 11.6059 9.10688 12.5739 10.3131 12.5739C11.5194 12.5739 12.5006 11.6059 12.5006 10.4146C12.5006 9.22192 11.5194 8.25276 10.3131 8.25276M10.3131 14.4258C8.07313 14.4258 6.25063 12.627 6.25063 10.4146C6.25063 8.2009 8.07313 6.40085 10.3131 6.40085C12.5531 6.40085 14.3756 8.2009 14.3756 10.4146C14.3756 12.627 12.5531 14.4258 10.3131 14.4258" fill="#B03129"/>
<mask id="mask0_154_352" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="21" height="25">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.227814H20.6244V24.3026H0V0.227814Z" fill="white"/>
</mask>
<g mask="url(#mask0_154_352)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.3119 2.07972C5.65937 2.07972 1.87437 5.85391 1.87437 10.4911C1.87437 16.3913 8.90437 22.1396 10.3119 22.4458C11.7194 22.1384 18.7494 16.39 18.7494 10.4911C18.7494 5.85391 14.9644 2.07972 10.3119 2.07972V2.07972ZM10.3119 24.3026C8.06937 24.3026 -0.00062561 17.4481 -0.00062561 10.4911C-0.00062561 4.83166 4.62562 0.227814 10.3119 0.227814C15.9981 0.227814 20.6244 4.83166 20.6244 10.4911C20.6244 17.4481 12.5544 24.3026 10.3119 24.3026V24.3026Z" fill="#B03129"/>
</g>
</svg>
`;

interface Props {
  location: IRestaurant["location"];
}

export function LocationInformation({
  location: { address, latitude, longitude },
}: Props) {
  return (
    <Fragment>
      <View className="gap-3 p-4 flex-row">
        <SvgXml xml={locationSVG} />
        <View>
          <Text className="text-[#222] text-[16px] font-semibold">
            Distância
          </Text>

          <Text className="text-[#000] text-[16px]">
            15 Minutos aproximadamente
          </Text>
        </View>
      </View>

      <View className="gap-3 p-4 flex-row">
        <SvgXml xml={mapIconSVG} />

        <View className="flex-1">
          <Text className="text-[#222] text-[16px] font-semibold">
            Como chegar
          </Text>

          <Text className="text-[#000] text-[16px] flex-1 break-words">{address}</Text>
        </View>
      </View>
    </Fragment>
  );
}
