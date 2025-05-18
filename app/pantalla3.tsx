import { useRouter } from 'expo-router';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function Pantalla3() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Vive esta aventura3</Text>

      {/* Contenedor de imágenes */}
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/carG.png')} style={styles.image} />
        <Image source={require('../assets/images/carH.png')} style={styles.image} />
        <Image source={require('../assets/images/carI.png')} style={styles.image} />
      </View>

      {/* Botón de navegación */}
      <View style={styles.buttonContainer}>
        <Button title="Atrás" onPress={() => router.back()} />
        <Button title="Siguiente" onPress={() => router.push('/pantalla4')} />
      </View>
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


