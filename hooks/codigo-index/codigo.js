import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';


export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido a MiAppVehiculos</Text>

      {/* Primera fila de imágenes */}
      <View style={styles.row}>
        <TouchableOpacity onPress={() => router.push('/pantalla1')}>
          <Image source={require('../assets/images/car1.png')} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/pantalla2')}>
          <Image source={require('../assets/images/car2.png')} style={styles.image} />
        </TouchableOpacity>
      </View>

      {/* Segunda fila de imágenes */}
      <View style={styles.row}>
        <TouchableOpacity onPress={() => router.push('/pantalla3')}>
          <Image source={require('../assets/images/car3.png')} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/pantalla4')}>
          <Image source={require('../assets/images/car4.png')} style={styles.image} />
        </TouchableOpacity>
      </View>

      {/* Tercera fila de imágenes */}
      <View style={styles.row}>
        <TouchableOpacity onPress={() => router.push('/pantalla5')}>
          <Image source={require('../assets/images/car5.png')} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/pantalla6')}>
          <Image source={require('../assets/images/car6.png')} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
