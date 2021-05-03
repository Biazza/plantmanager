import React, { useEffect } from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { Jost_400Regular, Jost_600SemiBold } from "@expo-google-fonts/jost";
import * as Notifications from "expo-notifications";
import Routes from "./src/routes";
import { PlantProps } from "./src/libs/storage";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Jost_400Regular,
    Jost_600SemiBold,
  });

  useEffect(() => {
    /* const subscription = Notifications.addNotificationReceivedListener(
      async (notification) => {
        const data = notification.request.content.data.plant as PlantProps;
        console.log(data);
      }
    );

    return () => subscription.remove(); */

    async function notifications() {
      const data = await Notifications.getAllScheduledNotificationsAsync();
      console.log(data);
    }

    notifications();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Routes />;
  }
}
