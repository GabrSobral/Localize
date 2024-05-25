import { useState } from "react";
import { SvgXml } from "react-native-svg";
import Feather from "@expo/vector-icons/Feather";
import {
  SafeAreaView,
  TextInput,
  Alert,
  Pressable,
  Text,
  View,
  KeyboardAvoidingView,
} from "react-native";
import { Link, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useAuth } from "../../contexts/auth/hook";

const logo = `<svg width="219" height="120" viewBox="0 0 219 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.215 119C4.23633 119 2.823 118.611 1.975 117.834C1.127 117.057 0.703 115.944 0.703 114.495C0.703 113.788 0.756 112.587 0.862 110.891C0.968 109.16 1.10933 107.199 1.286 105.008C1.46267 102.817 1.63933 100.503 1.816 98.065C1.99267 95.627 2.16933 93.3303 2.346 91.175C2.52267 89.0197 2.664 87.1293 2.77 85.504C2.876 83.8787 2.929 82.7657 2.929 82.165C2.929 81.635 3.21167 81.37 3.777 81.37H6.692C8.67067 81.37 10.031 81.7587 10.773 82.536C11.5503 83.278 11.939 84.391 11.939 85.875C11.939 86.0517 11.9213 86.2107 11.886 86.352C11.886 86.4933 11.886 86.6523 11.886 86.829L10.137 111.58H19.677C19.889 111.58 20.0833 111.651 20.26 111.792C20.4367 111.898 20.525 112.075 20.525 112.322L20.313 115.449C20.2423 116.509 19.942 117.375 19.412 118.046C18.9173 118.682 17.875 119 16.285 119H6.215ZM42.4972 80.787C45.0766 80.787 47.2849 81.158 49.1222 81.9C50.9596 82.6067 52.4612 83.6667 53.6272 85.08C54.7932 86.458 55.6412 88.154 56.1712 90.168C56.7012 92.1467 56.9662 94.408 56.9662 96.952C56.9662 98.3653 56.8602 99.9023 56.6482 101.563C56.4716 103.224 56.1182 104.902 55.5882 106.598C55.0936 108.259 54.4046 109.866 53.5212 111.421C52.6379 112.976 51.4896 114.354 50.0762 115.555C48.6982 116.756 47.0376 117.728 45.0942 118.47C43.1509 119.177 40.8542 119.53 38.2042 119.53C35.2716 119.53 32.8336 119.088 30.8902 118.205C28.9822 117.322 27.4452 116.138 26.2792 114.654C25.1486 113.135 24.3359 111.35 23.8412 109.301C23.3819 107.252 23.1522 105.061 23.1522 102.729C23.1522 99.973 23.4702 97.2877 24.1062 94.673C24.7422 92.023 25.8022 89.6733 27.2862 87.624C28.8056 85.5747 30.8019 83.9317 33.2752 82.695C35.7486 81.423 38.8226 80.787 42.4972 80.787ZM41.3842 89.002C40.1476 89.002 39.0699 89.2317 38.1512 89.691C37.2679 90.115 36.5082 90.698 35.8722 91.44C35.2716 92.182 34.7769 93.0123 34.3882 93.931C34.0349 94.8497 33.7522 95.8037 33.5402 96.793C33.3282 97.747 33.1869 98.6833 33.1162 99.602C33.0456 100.485 33.0102 101.28 33.0102 101.987C33.0102 105.202 33.5402 107.552 34.6002 109.036C35.6956 110.52 37.2326 111.262 39.2112 111.262C40.8366 111.262 42.1616 110.75 43.1862 109.725C44.2109 108.665 45.0059 107.411 45.5712 105.962C46.1719 104.478 46.5782 102.959 46.7902 101.404C47.0022 99.814 47.1082 98.4713 47.1082 97.376C47.1082 94.7967 46.6666 92.765 45.7832 91.281C44.8999 89.7617 43.4336 89.002 41.3842 89.002ZM77.3149 111.262C78.7636 111.262 79.9826 111.05 80.9719 110.626C81.9966 110.202 82.8622 109.725 83.5689 109.195C84.2756 108.665 84.8939 108.188 85.4239 107.764C85.9892 107.34 86.5546 107.128 87.1199 107.128C87.8266 107.128 88.1799 107.658 88.1799 108.718C88.1799 109.283 88.1093 109.972 87.9679 110.785C87.8266 111.562 87.6322 112.446 87.3849 113.435C87.2436 114.036 86.8902 114.689 86.3249 115.396C85.7949 116.103 85.0529 116.774 84.0989 117.41C83.1449 118.011 81.9612 118.523 80.5479 118.947C79.1699 119.336 77.5799 119.53 75.7779 119.53C73.9759 119.53 72.1739 119.265 70.3719 118.735C68.5699 118.205 66.9622 117.304 65.5489 116.032C64.1356 114.76 62.9872 113.046 62.1039 110.891C61.2206 108.736 60.7789 106.033 60.7789 102.782C60.7789 101.616 60.8496 100.273 60.9909 98.754C61.1676 97.1993 61.4856 95.6093 61.9449 93.984C62.4042 92.3587 63.0402 90.7687 63.8529 89.214C64.7009 87.624 65.7786 86.2107 67.0859 84.974C68.3932 83.7373 69.9832 82.748 71.8559 82.006C73.7639 81.2287 76.0252 80.84 78.6399 80.84C80.7246 80.84 82.5266 81.0873 84.0459 81.582C85.6006 82.0767 86.8726 82.7657 87.8619 83.649C88.8866 84.497 89.6286 85.504 90.0879 86.67C90.5826 87.836 90.8299 89.0727 90.8299 90.38C90.8299 92.6413 90.1586 94.302 88.8159 95.362C87.5086 96.3867 85.6359 96.899 83.1979 96.899C82.4206 96.899 81.9259 96.846 81.7139 96.74C81.5372 96.5987 81.4489 96.3337 81.4489 95.945C81.4136 94.7437 81.3782 93.7013 81.3429 92.818C81.3076 91.9347 81.1839 91.2103 80.9719 90.645C80.7599 90.0443 80.4242 89.6203 79.9649 89.373C79.5409 89.0903 78.9402 88.949 78.1629 88.949C77.0322 88.949 76.0606 89.1963 75.2479 89.691C74.4706 90.1503 73.7992 90.7687 73.2339 91.546C72.7039 92.288 72.2622 93.136 71.9089 94.09C71.5909 95.044 71.3259 96.0157 71.1139 97.005C70.9372 97.9943 70.8136 98.9483 70.7429 99.867C70.7076 100.786 70.6899 101.581 70.6899 102.252C70.6899 105.503 71.2199 107.817 72.2799 109.195C73.3752 110.573 75.0536 111.262 77.3149 111.262ZM110.459 81.37C111.342 81.37 112.066 81.5467 112.632 81.9C113.232 82.218 113.727 82.6597 114.116 83.225C114.504 83.755 114.822 84.3733 115.07 85.08C115.317 85.7867 115.529 86.511 115.706 87.253C117.119 92.977 118.285 97.694 119.204 101.404C120.122 105.114 120.847 108.117 121.377 110.414C121.907 112.675 122.278 114.354 122.49 115.449C122.702 116.544 122.808 117.304 122.808 117.728C122.808 118.223 122.684 118.558 122.437 118.735C122.225 118.912 121.871 119 121.377 119H118.674C117.154 119 115.935 118.823 115.017 118.47C114.133 118.081 113.444 117.534 112.95 116.827C112.49 116.12 112.155 115.272 111.943 114.283C111.731 113.258 111.554 112.11 111.413 110.838H102.191L100.442 118.152C100.265 118.717 99.8585 119 99.2225 119H96.4135C95.8482 119 95.2652 118.947 94.6645 118.841C94.0639 118.7 93.5162 118.488 93.0215 118.205C92.5622 117.922 92.1735 117.569 91.8555 117.145C91.5375 116.686 91.3785 116.138 91.3785 115.502C91.3785 114.725 91.6259 113.453 92.1205 111.686C92.6152 109.919 93.2335 107.923 93.9755 105.697C94.7529 103.436 95.6009 101.086 96.5195 98.648C97.4735 96.1747 98.3922 93.8427 99.2755 91.652C100.159 89.4613 100.954 87.5357 101.661 85.875C102.403 84.2143 102.968 83.0483 103.357 82.377C103.639 81.8823 103.887 81.5997 104.099 81.529C104.346 81.423 104.788 81.37 105.424 81.37H110.459ZM104.099 103.153H110.194L107.968 89.161L104.099 103.153ZM132.09 119C130.111 119 128.698 118.611 127.85 117.834C127.002 117.057 126.578 115.944 126.578 114.495C126.578 113.788 126.631 112.587 126.737 110.891C126.843 109.16 126.984 107.199 127.161 105.008C127.338 102.817 127.514 100.503 127.691 98.065C127.868 95.627 128.044 93.3303 128.221 91.175C128.398 89.0197 128.539 87.1293 128.645 85.504C128.751 83.8787 128.804 82.7657 128.804 82.165C128.804 81.635 129.087 81.37 129.652 81.37H132.567C134.546 81.37 135.906 81.7587 136.648 82.536C137.425 83.278 137.814 84.391 137.814 85.875C137.814 86.0517 137.796 86.2107 137.761 86.352C137.761 86.4933 137.761 86.6523 137.761 86.829L136.012 111.58H145.552C145.764 111.58 145.958 111.651 146.135 111.792C146.312 111.898 146.4 112.075 146.4 112.322L146.188 115.449C146.117 116.509 145.817 117.375 145.287 118.046C144.792 118.682 143.75 119 142.16 119H132.09ZM155.847 119C153.868 119 152.455 118.611 151.607 117.834C150.759 117.057 150.335 115.944 150.335 114.495C150.335 113.788 150.388 112.587 150.494 110.891C150.6 109.16 150.741 107.199 150.918 105.008C151.095 102.817 151.271 100.503 151.448 98.065C151.625 95.627 151.801 93.3303 151.978 91.175C152.155 89.0197 152.296 87.1293 152.402 85.504C152.508 83.8787 152.561 82.7657 152.561 82.165C152.561 81.635 152.844 81.37 153.409 81.37H156.324C158.479 81.37 159.928 81.8293 160.67 82.748C161.412 83.6667 161.783 85.027 161.783 86.829C161.783 87.0057 161.748 87.571 161.677 88.525C161.642 89.479 161.571 90.6803 161.465 92.129C161.359 93.5777 161.235 95.203 161.094 97.005C160.988 98.7717 160.864 100.591 160.723 102.464C160.617 104.337 160.493 106.174 160.352 107.976C160.246 109.743 160.14 111.35 160.034 112.799C159.928 114.248 159.84 115.467 159.769 116.456C159.698 117.41 159.645 117.993 159.61 118.205C159.575 118.488 159.504 118.7 159.398 118.841C159.292 118.947 159.08 119 158.762 119H155.847ZM165.252 119C164.863 119 164.669 118.806 164.669 118.417L164.828 115.555C164.863 115.237 164.916 114.848 164.987 114.389C165.058 113.894 165.217 113.488 165.464 113.17C166.065 112.075 166.789 110.891 167.637 109.619C168.485 108.347 169.51 106.792 170.711 104.955C171.912 103.118 173.308 100.909 174.898 98.33C176.523 95.7153 178.396 92.5353 180.516 88.79H168.432C168.149 88.79 167.973 88.737 167.902 88.631C167.867 88.525 167.849 88.3307 167.849 88.048L168.008 85.08C168.043 84.6207 168.096 84.179 168.167 83.755C168.273 83.2957 168.45 82.8893 168.697 82.536C168.98 82.1827 169.368 81.9 169.863 81.688C170.358 81.476 171.011 81.37 171.824 81.37H192.07C192.282 81.37 192.476 81.423 192.653 81.529C192.83 81.635 192.918 81.8293 192.918 82.112L192.706 84.974C192.635 85.8927 192.423 86.6523 192.07 87.253C191.964 87.4297 191.452 88.2777 190.533 89.797C189.614 91.281 188.448 93.1713 187.035 95.468C185.622 97.7647 184.032 100.326 182.265 103.153C180.534 105.98 178.785 108.789 177.018 111.58H190.48C190.692 111.58 190.886 111.633 191.063 111.739C191.24 111.845 191.328 112.039 191.328 112.322L191.116 115.449C191.045 116.509 190.745 117.375 190.215 118.046C189.72 118.682 188.678 119 187.088 119H165.252ZM201.86 119C199.881 119 198.468 118.611 197.62 117.834C196.772 117.057 196.348 115.944 196.348 114.495C196.348 113.788 196.401 112.587 196.507 110.891C196.613 109.16 196.754 107.199 196.931 105.008C197.107 102.817 197.284 100.503 197.461 98.065C197.637 95.627 197.814 93.3303 197.991 91.175C198.167 89.0197 198.309 87.1293 198.415 85.504C198.521 83.8787 198.574 82.7657 198.574 82.165C198.574 81.635 198.856 81.37 199.422 81.37H218.078C218.29 81.37 218.484 81.423 218.661 81.529C218.837 81.635 218.926 81.8293 218.926 82.112L218.714 85.239C218.643 86.299 218.343 87.1647 217.813 87.836C217.318 88.472 216.276 88.79 214.686 88.79H207.372L206.842 96.263H214.368C214.58 96.263 214.774 96.316 214.951 96.422C215.127 96.528 215.216 96.7223 215.216 97.005L215.004 100.132C214.933 101.192 214.633 102.058 214.103 102.729C213.608 103.365 212.566 103.683 210.976 103.683H206.365L205.782 111.58H217.442C217.654 111.58 217.848 111.651 218.025 111.792C218.201 111.898 218.29 112.075 218.29 112.322L218.078 115.449C218.007 116.509 217.707 117.375 217.177 118.046C216.682 118.682 215.64 119 214.05 119H201.86Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M111.199 24.4375C108.505 24.4375 106.314 26.6944 106.314 29.4716C106.314 32.246 108.505 34.5 111.199 34.5C113.893 34.5 116.085 32.246 116.085 29.4716C116.085 26.6944 113.893 24.4375 111.199 24.4375ZM111.199 38.8125C106.197 38.8125 102.126 34.6236 102.126 29.4716C102.126 24.3168 106.197 20.125 111.199 20.125C116.202 20.125 120.272 24.3168 120.272 29.4716C120.272 34.6236 116.202 38.8125 111.199 38.8125Z" fill="white"/>
<mask id="mask0_0_1" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="88" y="5" width="47" height="57">
<path fill-rule="evenodd" clip-rule="evenodd" d="M88.1667 5.75H134.228V61.8125H88.1667V5.75Z" fill="white"/>
</mask>
<g mask="url(#mask0_0_1)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M111.197 10.0625C100.806 10.0625 92.3528 18.8514 92.3528 29.6499C92.3528 43.3895 108.053 56.7755 111.197 57.4885C114.34 56.7726 130.04 43.3866 130.04 29.6499C130.04 18.8514 121.587 10.0625 111.197 10.0625ZM111.197 61.8125C106.188 61.8125 88.1653 45.8505 88.1653 29.6499C88.1653 16.4709 98.4972 5.75 111.197 5.75C123.896 5.75 134.228 16.4709 134.228 29.6499C134.228 45.8505 116.205 61.8125 111.197 61.8125Z" fill="white"/>
</g>
</svg>
`;

const arrowBack = `<svg width="17" height="27" viewBox="0 0 17 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7134 1.89072C15.1239 2.30122 15.1612 2.94357 14.8254 3.39622L14.7134 3.52591L4.73988 13.5L14.7134 23.4741C15.1239 23.8845 15.1612 24.5269 14.8254 24.9796L14.7134 25.1092C14.3029 25.5197 13.6606 25.557 13.2079 25.2212L13.0783 25.1092L2.28658 14.3176C1.87609 13.9071 1.83877 13.2647 2.17463 12.8121L2.28658 12.6824L13.0783 1.89072C13.5298 1.43918 14.2619 1.43918 14.7134 1.89072Z" fill="#0DA31A" stroke="#0DA31A" stroke-width="2"/>
</svg>
`;

export default function SignInScreen() {
  const { goBack, navigate } = useNavigation();
  const { setSession } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignIn() {
    setSession(state => ({
      user: {
        name: "Gabriel Sobral",
        email,
        createdAt: new Date(),
        img: "https://randomuser.me/api/portraits/men/11.jpg",
        id: 31242
      },
      accessToken: "<access-token>"
    }));

    navigate("(tabs)")
  }

  return (
    <SafeAreaView className="bg-primary flex-1 p-4 pt-11">
      <StatusBar animated style="light" />

      <View className="">
        <View className="flex items-center gap-4">
          <Pressable
            onPress={() => navigate("index")}
            android_ripple={{ color: "#FFFFFF88" }}
            className="p-4 rounded-lg bg-[#FFFFFF88] mr-auto w-[56px] h-[56px] items-center justify-center"
            aria-label="Voltar"
          >
            <SvgXml xml={arrowBack} />
          </Pressable>

          <SvgXml xml={logo} />
        </View>

        <View className="h-[1px] my-8 w-full bg-[#FFFFFF88]" />
        
        <Text className="text-[#FFF] text-[24px] font-bold justify-center h-[px] mb-4">
            <Feather size={32} name="user" color="#FFF" /> Login
        </Text>

        <KeyboardAvoidingView className="justify-center" behavior="height">
          <View className="h-fit">
            <Text className="text-base font-semibold text-[#FFF] mb-3">
              E-mail
            </Text>

            <TextInput
              onChangeText={setEmail}
              value={email}
              placeholder="Insira seu e-mail"
              className="px-4 h-14 text-base rounded-md bg-[#FFF] mb-4"
            />
          </View>

          <View className="">
            <Text className="text-base font-semibold text-[#FFF] mb-3">
              Senha
            </Text>

            <TextInput
              onChangeText={setPassword}
              value={password}
              placeholder="Insira sua senha"
              className="px-4 h-14 text-base rounded-md bg-[#FFF]"
            />
          </View>

          <Pressable
            android_ripple={{ color: "#FFFFFF88" }}
            onPress={handleSignIn}
            className="px-4 py-3 rounded-md bg-[#54D361] mt-8 items-center"
          >
            <Text className="text-lg text-[#FFF] font-bold">Entrar</Text>
          </Pressable>
        </KeyboardAvoidingView>
      </View>

      <View className="gap-1 mt-8 items-center">
        <Text className="text-[#FFF] text-base">Ainda não possui conta?</Text>
        <Link href={"/login/sign-up-user"}>
          <Text className="text-[#FFF] text-base font-bold">Cadastre-se já!</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}
