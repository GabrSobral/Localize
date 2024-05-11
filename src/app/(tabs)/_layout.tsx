import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarActiveBackgroundColor: "",
        tabBarStyle: { backgroundColor: "#4AAD54", paddingVertical: 6, paddingBottom: 12, height: 70 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          header: () => null,
          tabBarIcon: ({ color }) => (
            <Feather size={28} name="home" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="map"  
        options={{
          title: "Mapa",
          header: () => null,
          tabBarIcon: ({ color }) => (
            <Feather size={28} name="map-pin" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          header: () => null,
          tabBarIcon: ({ color }) => (
            <Feather size={28} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
