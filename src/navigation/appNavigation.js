import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrderScreen from "../screens/Orders/OrderScreen";

export default function AppNavigation() {
  const AppNav = createNativeStackNavigator();

  return (
    <AppNav.Navigator>
      <AppNav.Screen
        name="Orders"
        component={OrderScreen}
        options={{
          headerTitle: "Current Orders",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </AppNav.Navigator>
  );
}
