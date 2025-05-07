import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Linking from 'expo-linking';

import Pantalla1 from './Pantalla1';
import Pantalla2 from './Pantalla2';
import Pantalla3 from './app/Pantalla3';
import Pantalla4 from './app/Pantalla4';
import Pantalla5 from './app/Pantalla5';
import Pantalla6 from './app/Pantalla6';

const Stack = createNativeStackNavigator();

const linking = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Pantalla1: '',
      Pantalla2: 'pantalla2',
      Pantalla3: 'pantalla3',
      Pantalla4: 'pantalla4',
      Pantalla5: 'pantalla5',
      Pantalla6: 'pantalla6',
    },
  },
};

export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Pantalla1" component={Pantalla1} />
        <Stack.Screen name="Pantalla2" component={Pantalla2} />
        <Stack.Screen name="Pantalla3" component={Pantalla3} />
        <Stack.Screen name="Pantalla4" component={Pantalla4} />
        <Stack.Screen name="Pantalla5" component={Pantalla5} />
        <Stack.Screen name="Pantalla6" component={Pantalla6} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
