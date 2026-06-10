import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Home from '../../screens/Home/Home';
import NuevoPost from '../../screens/NuevoPost/NuevoPost';
import MiPerfil from '../../screens/MiPerfil/MiPerfil';

const Tab = createBottomTabNavigator();

function HomeMenu() {
    return (
        <Tab.Navigator>
    
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="home" size={24} color="#4F46E5" />
                    )
                }}
            />
    
            <Tab.Screen
                name="NuevoPost"
                component={NuevoPost}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="add-circle" size={24} color="#4F46E5" />
                    )
                }}
            />
    
            <Tab.Screen
                name="MiPerfil"
                component={MiPerfil}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="person" size={24} color="#4F46E5" />
                    )
                }}
            />
    
        </Tab.Navigator>
    );
}

export default HomeMenu;