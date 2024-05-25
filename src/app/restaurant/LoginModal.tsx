import { Link, useNavigation } from "expo-router";
import { Text } from "react-native";
import { Modal, Pressable, TouchableOpacity } from "react-native";

interface Props {
  isVisible: boolean;
  closeModal: () => void;
}

export function LoginModal({ closeModal, isVisible }: Props) {
  const { navigate } = useNavigation();
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="fade"
      statusBarTranslucent
      onRequestClose={closeModal}
    >
      <TouchableOpacity
        className="flex-1 justify-center items-center bg-[#00000066] bg-opacity-50"
        activeOpacity={1}
        onPress={closeModal}
      >
        <TouchableOpacity
          className="bg-[#FFF] p-4 rounded-lg w-[90%]"
          activeOpacity={1}
          onPress={(e) => e.stopPropagation()}
        >
          <Text className="text-[24px] mb-3 font-semibold">Opsss...</Text>
          <Text className="text-base">
            Parece que você ainda não se registrou. {"\n"}Para avaliar um
            estabelecimento é necessário estar cadastrado no nosso app!
          </Text>

          <Link onPress={closeModal} href={"/login/sign-in"} asChild>
            <Pressable
              className="bg-primary mt-4 rounded-lg p-4 items-center w-full"
              android_ripple={{ color: "#FFFFFF88" }}
            >
              <Text className="text-[#FFF] text-[22px]">Efetuar login</Text>
            </Pressable>
          </Link>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
}
