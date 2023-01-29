import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import ModalScreen from "../screens/ModalScreen";
import OrderModalScreen from "../screens/OrderModalScreen";

export type RootStackParamList = {
  Main: undefined;
  MyModal: { userId: string; name: string };
  Order: { Order: any };
};
const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Main" component={TabNavigator} />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ presentation: "fullScreenModal" }}>
        <RootStack.Screen
          options={{ headerShown: false }}
          name="MyModal"
          component={ModalScreen}
        />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ presentation: "fullScreenModal" }}>
        <RootStack.Screen
          options={{ headerShown: false }}
          name="Order"
          component={OrderModalScreen}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
