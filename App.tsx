import React from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { Jost_400Regular, Jost_600SemiBold } from "@expo-google-fonts/jost";
import Routes from "./src/routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Routes />;
  }
}
