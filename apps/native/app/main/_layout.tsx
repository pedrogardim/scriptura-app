import { SplashScreen, Slot } from "expo-router";
import { AppNavigation, Container } from "@components";

export const unstable_settings = { initialRouteName: "bible" };

export default function Layout() {
  return (
    <Container>
      <Slot />
      <AppNavigation />
    </Container>
  );
}
