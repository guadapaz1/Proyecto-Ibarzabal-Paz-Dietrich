import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login/Login';
import Register from './src/screens/Register/Register';
import HomeMenu from './src/components/HomeMenu/HomeMenu';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="HomeMenu" component={HomeMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}