import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import Video from "react-native-video";
import styles from "./styles/stylesPantalla1";

const VEHICLES = [
  {
    id: "carA",
    image: require("../assets/images/carA.png"),
    name: "Ford Modelo T",
    motor: "Gasolina 4 cilindros",
    cilindraje: "2870 cc",
    modelo: 1908,
    precio: "$15,000 USD",
  },
  {
    id: "carB",
    image: require("../assets/images/carB.png"),
    name: "Chevrolet Bel Air",
    motor: "V8 4.6L",
    cilindraje: "4600 cc",
    modelo: 1957,
    precio: "$30,000 USD",
  },
  {
    id: "carC",
    image: require("../assets/images/carC.png"),
    name: "Cadillac Eldorado",
    motor: "V8 8.2L",
    cilindraje: "8200 cc",
    modelo: 1972,
    precio: "$25,000 USD",
  },
];

export default function PantallaAntiguos() {
  const router = useRouter();
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido a la categoría de vehículos antiguos</Text>

      <Video source={require("../assets/videos/video1.mp4")} style={styles.video} resizeMode="cover" controls={true} />

      <View style={styles.imageContainer}>
        {VEHICLES.map((vehicle, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              console.log("Cambiando estado a:", vehicle.id);
              setSelectedVehicle(selectedVehicle === vehicle.id ? null : vehicle.id);
            }}
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
        <Button title="Siguiente" onPress={() => router.push("/pantalla2")} />
      </View>
    </View>
  );
}
