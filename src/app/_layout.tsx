import { Stack } from "expo-router/stack";
import { useFonts } from "expo-font";
import { AuthProvider } from "../contexts/auth/context";
import { RestaurantProvider } from "../contexts/restaurants/context";

export default function AppLayout() {
  let [fontsLoaded] = useFonts({
    "Montserrat-Regular": require("../../assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Semibold": require("../../assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("../../assets/fonts/Montserrat-Bold.ttf"),
  });

  return (
    <AuthProvider>
      <RestaurantProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </RestaurantProvider>
    </AuthProvider>
  );
}
