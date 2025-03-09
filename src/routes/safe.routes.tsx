import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ConfirmPin from "../screens/safeRoutes/ConfirmPin";
import Dashboard from "../screens/safeRoutes/Dashboard";
import Exchange from "../screens/safeRoutes/Exchange";
import ListTokens from "../screens/safeRoutes/ListTokens";
import TokenDetail from "../screens/safeRoutes/TokenDetail";
import WelcomeBack from "../screens/safeRoutes/WelcomeBack";

const { Navigator, Screen } = createNativeStackNavigator();

export default function SafeNavigation() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name="ConfirmPin" component={ConfirmPin} />
            <Screen name="Dashboard" component={Dashboard} />
            <Screen name="Exchange" component={Exchange} />
            <Screen name="ListTokens" component={ListTokens} />
            <Screen name="TokenDetail" component={TokenDetail} />
            <Screen name="WelcomeBack" component={WelcomeBack} />
        </Navigator>
    )
}