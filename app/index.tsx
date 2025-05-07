import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido a esta experiencia </Text>

      {/* Primera fila de imágenes */}
      <View style={styles.row}>
        <TouchableOpacity onPress={() => router.push('/pantalla1')}>
          <Image source={require('../assets/imagen/car1.png')} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/pantalla2')}>
          <Image source={require('../assets/imagen/car2.png')} style={styles.image} />
        </TouchableOpacity>
      </View>

      {/* Segunda fila de imágenes */}
      <View style={styles.row}>
        <TouchableOpacity onPress={() => router.push('/pantalla3')}>
          <Image source={require('../assets/imagen/car3.png')} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/pantalla4')}>
          <Image source={require('../assets/imagen/car4.png')} style={styles.image} />
        </TouchableOpacity>
      </View>

      {/* Tercera fila de imágenes */}
      <View style={styles.row}>
        <TouchableOpacity onPress={() => router.push('/pantalla5')}>
          <Image source={require('../assets/imagen/car5.png')} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/pantalla6')}>
          <Image source={require('../assets/imagen/car6.png')} style={styles.image} />
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff', // Azul claro más suave
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    color: '#187fe7',
    marginBottom: 40,
    textAlign: 'center',
    textShadowColor: '#cce0ff',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    marginBottom: 25,
  },
  image: {
    width: 140,
    height: 100,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});

