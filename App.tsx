import React from "react";
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";

import { LoadAssets } from "./src/components";
import Onboarding from "./src/Onboarding/index.tsx/Onboarding";

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
};

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Onboarding" component={Onboarding} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <LoadAssets {...{ fonts }}>
      <StatusBar style="auto" />
      <StackNavigator />
    </LoadAssets>
  );
};

export default App;
