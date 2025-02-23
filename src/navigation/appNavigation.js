import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrderScreen from "../screens/Orders/OrderScreen";
import OrderDetailScreen from "../screens/OrderDetails/OrderDetailScreen";
import OrderCompleteScreen from "../screens/OrderComplete/OrderCompleteScreen";

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
      <AppNav.Screen
        name="OrderDetail"
        component={OrderDetailScreen}
        options={{
          headerTitle: "Order Details",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <AppNav.Screen
        name="OrderComplete"
        component={OrderCompleteScreen}
        options={{
          headerShown: false,
        }}
      />
    </AppNav.Navigator>
  );
}
