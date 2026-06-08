import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../screens/Home/Home';
import NuevoPost from '../../screens/NuevoPost/NuevoPost';
import MiPerfil from '../../screens/MiPerfil/MiPerfil';

const Tab = createBottomTabNavigator();

function HomeMenu() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="NuevoPost" component={NuevoPost} />
            <Tab.Screen name="MiPerfil" component={MiPerfil} />
        </Tab.Navigator>
    );
}

export default HomeMenu;