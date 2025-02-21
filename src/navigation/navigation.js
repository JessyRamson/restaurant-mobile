import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./authNavigation";
import AppNavigation from "./appNavigation";

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      {/* <AuthNavigation /> */}
      <AppNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
