import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Onboarding from "../screens/unsafeRoutes/Onboarding";
import Welcome from "../screens/unsafeRoutes/Welcome";
import CreatePin from "../screens/unsafeRoutes/CreatePin";
import RegisterAddress from "../screens/unsafeRoutes/RegisterAddress";
import RegisterConfirmPhone from "../screens/unsafeRoutes/RegisterConfirmPhone";
import RegisterPersonalInfo from "../screens/unsafeRoutes/RegisterPersonalInfo";
import RegisterPhone from "../screens/unsafeRoutes/RegisterPhone";

const { Navigator, Screen } = createNativeStackNavigator();

export default function UnsafeNavigation() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name="Welcome" component={Welcome} />
            <Screen name="Onboarding" component={Onboarding} />
            <Screen name="CreatePin" component={CreatePin} />
            <Screen name="RegisterAddress" component={RegisterAddress} />
            <Screen name="RegisterConfirmPhone" component={RegisterConfirmPhone} />
            <Screen name="RegisterPersonalInfo" component={RegisterPersonalInfo} />
            <Screen name="RegisterPhone" component={RegisterPhone} />
        </Navigator>
    )
}