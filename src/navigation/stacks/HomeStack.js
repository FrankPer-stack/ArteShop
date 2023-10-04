import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, ProductScreen, SearchScreen } from "../../screens/Home"
import { scrensName } from "../../utils";

const Stack = createNativeStackNavigator();

export function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={scrensName.home.home} component={HomeScreen} />
            <Stack.Screen name={scrensName.home.product} component={ProductScreen} />
            <Stack.Screen name={scrensName.home.search} component={SearchScreen} />
        </Stack.Navigator>
    );
}