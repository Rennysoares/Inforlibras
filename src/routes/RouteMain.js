import React from "react";
import {View } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen, Group } = createNativeStackNavigator();

//Screens
import Welcome from "../screens/Welcome";
import RouteTopTap from "./RouteTopTap";
const RouteMain = () => {

    const [isLoggedIn, setIsLoggedIn] = React.useState(true);

    return (
        <Navigator>
            {(isLoggedIn) && (
                <Group>
                    <Screen
                        name="Welcome"
                        component={Welcome}
                        options={{
                            headerShown: false,
                            statusBarColor: '#98FB98',
                            statusBarStyle: "dark"
                        }}
                    />
                </Group>
            )}
            <Group>
                <Screen
                    name="RouteTopTap"
                    component={RouteTopTap}
                    options={{
                        title: 'INFOLIBRAS',
                        headerLeft: ()=>(<View/>),
                        headerShadowVisible: false,
                        headerStyle: {backgroundColor: '#98FB98'},
                        statusBarColor: '#98FB98',
                        statusBarStyle: "dark"
                    }}
                />
            </Group>
        </Navigator>
    )
}

export default RouteMain;
