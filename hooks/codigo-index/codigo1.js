import { useRouter } from 'expo-router';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function Pantalla1() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Estas en una aventura1 </Text>

      {/* Sección de imágenes */}
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/carA.png')} style={styles.image} />
        <Image source={require('../assets/images/carB.png')} style={styles.image} />
        <Image source={require('../assets/images/carC.png')} style={styles.image} />
      </View>

      {/* Botón de navegación */}
      <Button title="Continua" onPress={() => router.push('/pantalla2')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 12,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
});
