import { SplashScreen, Slot } from "expo-router";

import {
  useFonts,
  Nunito_400Regular,
  Nunito_400Regular_Italic,
  Nunito_700Bold,
  Nunito_900Black,
} from "@expo-google-fonts/nunito";

export const unstable_settings = { initialRouteName: "main" };

export default function Layout() {
  const [fontsLoaded, fontError] = useFonts({
    Nunito_700Bold,
    Nunito_400Regular,
    Nunito_400Regular_Italic,
    Nunito_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const stackOptions = {
    title: "",
    headerBackTitleVisible: false,
    headerTintColor: "#FFFFFF",
    headerTransparent: true,
    headerShown: false,
  };

  return <Slot screenOptions={stackOptions} />;
}
