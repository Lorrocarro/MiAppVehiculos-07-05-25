import { Stack } from 'expo-router';


export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="pantalla1" component={Pantalla1} />
      <Stack.Screen name="pantalla2" component={Pantalla2} />
      <Stack.Screen name="pantalla3" component={Pantalla3} />
      <Stack.Screen name="pantalla4" component={Pantalla4} />
      <Stack.Screen name="pantalla5" component={Pantalla5} />
      <Stack.Screen name="pantalla6" component={Pantalla6} />
    </Stack>
  );
}