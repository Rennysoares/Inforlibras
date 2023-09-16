import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
const { Navigator, Screen } = createMaterialTopTabNavigator();

import Hardware from "../screens/Hardware";
import Software from "../screens/Software";
import Network from "../screens/Network";
import ProgramLanguage from "../screens/ProgramLanguage";
import Acronyms from "../screens/Acronyms";

const RouteTopTap = () => {
    return(
        <Navigator  screenOptions={{
            tabBarIndicatorStyle: {
                backgroundColor: '#FFF',
                height: 4,
                elevation: 3
            },
            tabBarScrollEnabled: true,
            tabBarStyle: {
              backgroundColor: '#98FB98',
            },
            tabBarItemStyle: {
              width: 'auto',
              alignItems: 'flex-start',
            },
            tabBarLabelStyle: {
              fontSize: 15,
              color: '#000',
              textTransform: 'capitalize',
            },
          }}>
            <Screen
                name="Hardware"
                component={Hardware}
                options={{
                    title: 'Hardware',
                }}
            />
            <Screen
                name="Software"
                component={Software}
                options={{
                    title: 'Software',
                }}
            />
            <Screen
                name="Network"
                component={Network}
                options={{
                    title: 'Redes',
                }}
            />
            <Screen
                name="ProgramLanguage"
                component={ProgramLanguage}
                options={{
                    title: 'Linguagens de Programação',
                }}
            />
            <Screen
                name="Acronyms"
                component={Acronyms}
                options={{
                    title: 'Siglas',
                }}
            />
        </Navigator>
    )
}

export default RouteTopTap;