import { Audio, Video } from "expo-av";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import styles from "../assets/styles/stylesPantalla1";
import VehicleCard from "../components/VehicleCard";

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

export default function Pantalla1() {
  const router = useRouter();
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const videoRef = useRef(null);

  useEffect(() => {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      staysActiveInBackground: true,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: false,
    });
  }, []);

  const filteredVehicles = searchTerm.length > 0
    ? VEHICLES.filter(vehicle =>
        vehicle.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
      )
    : VEHICLES;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Un viaje al pasado</Text>

  
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar vehículo..."
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>

      
      <Video
        ref={videoRef}
        source={require("../assets/videos/video1.mp4")}
        style={styles.video}
        isLooping
        useNativeControls
        shouldPlay
        volume={1.0}
      />

      
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          {filteredVehicles.map((vehicle, index) => (
            <VehicleCard
              key={index}
              vehicle={vehicle}
              selected={selectedVehicle === vehicle.id}
              onPress={() =>
                setSelectedVehicle(selectedVehicle === vehicle.id ? null : vehicle.id)
              }
            />
          ))}
        </View>
      </ScrollView>

      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/")}>
          <Text style={styles.buttonText}>{"<"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/pantalla2")}>
          <Text style={styles.buttonText}>{">"}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
