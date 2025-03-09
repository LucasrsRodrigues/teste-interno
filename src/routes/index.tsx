import { NavigationContainer } from "@react-navigation/native";
import SafeNavigation from "./safe.routes";
import UnsafeNavigation from "./unsafe.routes";

export function Routes() {
    const isAuthenticated = false;

    return (
        <NavigationContainer>
            {isAuthenticated ? <SafeNavigation /> : <UnsafeNavigation />}
        </NavigationContainer>
    )
}