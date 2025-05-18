import { useRouter } from "expo-router";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import Video from "react-native-video";
import styles from "./styles/stylesPantalla2"; // 👈 Importamos los estilos desde otro archivo

const VEHICLES = [
  {
    id: "carD",
    image: require("../assets/images/carD.png"),
    name: "Ford Ranger",
    motor: "V6 3.2L",
    cilindraje: "3200 cc",
    modelo: 2023,
    precio: "$38,000 USD",
  },
  {
    id: "carE",
    image: require("../assets/images/carE.png"),
    name: "Toyota Hilux",
    motor: "Diesel 2.8L",
    cilindraje: "2800 cc",
    modelo: 2022,
    precio: "$35,000 USD",
  },
  {
    id: "carF",
    image: require("../assets/images/carF.png"),
    name: "Chevrolet Silverado",
    motor: "V8 6.2L",
    cilindraje: "6200 cc",
    modelo: 2023,
    precio: "$50,000 USD",
  }
];

export default function Pantalla2() {
  const router = useRouter();
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>La aventura de viajar en un Ford</Text>

      <Video source={require("../assets/videos/video2.mp4")} style={styles.video} resizeMode="cover" controls={true} />

      <View style={styles.imageContainer}>
        {VEHICLES.map((vehicle, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedVehicle(selectedVehicle === vehicle.id ? null : vehicle.id)}
          >
            <Image source={vehicle.image} style={styles.image} />
            {selectedVehicle === vehicle.id && (
              <View style={styles.infoContainer}>
                <Text style={styles.name}>{vehicle.name}</Text>
                <Text style={styles.specs}>Motor: {vehicle.motor}</Text>
                <Text style={styles.specs}>Cilindraje: {vehicle.cilindraje}</Text>
                <Text style={styles.specs}>Modelo: {vehicle.modelo}</Text>
                <Text style={styles.price}>Precio: {vehicle.precio}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Atrás" onPress={() => router.back()} />
        <Button title="Siguiente" onPress={() => router.push("/pantalla3")} />
      </View>
    </View>
  );
}
