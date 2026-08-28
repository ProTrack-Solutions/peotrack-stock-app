import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import { AnimatedSplashOverlay } from "@/components/animated-icon";

import "../../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <AnimatedSplashOverlay />
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
}
