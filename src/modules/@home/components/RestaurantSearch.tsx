import { SvgXml } from "react-native-svg";
import { FlatList, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Dispatch, SetStateAction } from "react";

export const filterIcon = `
<svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.34009 15.9169H1.25146C0.785715 15.9169 0.407715 15.5389 0.407715 15.0731C0.407715 14.6074 0.785715 14.2294 1.25146 14.2294H8.34009C8.80584 14.2294 9.18384 14.6074 9.18384 15.0731C9.18384 15.5389 8.80584 15.9169 8.34009 15.9169" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5898 5.01294H11.5023C11.0366 5.01294 10.6586 4.63494 10.6586 4.16919C10.6586 3.70344 11.0366 3.32544 11.5023 3.32544H18.5898C19.0556 3.32544 19.4336 3.70344 19.4336 4.16919C19.4336 4.63494 19.0556 5.01294 18.5898 5.01294" fill="white"/>
<mask id="mask0_98_401" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="8" height="8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.375 0.625427H7.37903V7.59098H0.375V0.625427Z" fill="white"/>
</mask>
<g mask="url(#mask0_98_401)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.87688 2.3125C2.87676 2.3125 2.06226 3.118 2.06226 4.10912C2.06226 5.09912 2.87676 5.9035 3.87688 5.9035C4.87813 5.9035 5.69151 5.09912 5.69151 4.10912C5.69151 3.118 4.87813 2.3125 3.87688 2.3125M3.87688 7.591C1.94638 7.591 0.374756 6.0295 0.374756 4.10912C0.374756 2.18875 1.94638 0.625 3.87688 0.625C5.80851 0.625 7.37901 2.18875 7.37901 4.10912C7.37901 6.0295 5.80851 7.591 3.87688 7.591" fill="white"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5611 13.234C15.5599 13.234 14.7454 14.0395 14.7454 15.0295C14.7454 16.0206 15.5599 16.825 16.5611 16.825C17.5612 16.825 18.3746 16.0206 18.3746 15.0295C18.3746 14.0395 17.5612 13.234 16.5611 13.234M16.5611 18.5125C14.6295 18.5125 13.0579 16.9499 13.0579 15.0295C13.0579 13.1091 14.6295 11.5465 16.5611 11.5465C18.4916 11.5465 20.0621 13.1091 20.0621 15.0295C20.0621 16.9499 18.4916 18.5125 16.5611 18.5125" fill="white"/>
</svg>
`

interface Props {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  openFilterModal: () => void;
}

export function RestaurantSearch({ search, setSearch, openFilterModal }: Props) {
  return (
    <View className="flex-row gap-x-2">
      <TextInput
        className="px-2 py-2 rounded-md bg-[#FFF] flex-1"
        placeholder="Digite o nome do estabelecimento"
        value={search}
        onChangeText={setSearch}
      />

      <Pressable
        android_ripple={{ color: "#FFF" }}
        className="bg-[#4AAD54] rounded-md p-2 w-[54px] h-[54px] items-center justify-center"
        onPress={openFilterModal}
      >
        <SvgXml xml={filterIcon}/>
      </Pressable>
    </View>
  );
}
