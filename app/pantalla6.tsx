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
import styles from "../assets/styles/stylesPantalla6";
import VehicleCard from "../components/VehicleCard"; // ✅ Asegura que el componente está importado correctamente

const VEHICLES = [
  {
    id: "carQ",
    image: require("../assets/images/carQ.png"),
    name: "Tesla Model X",
    motor: "Eléctrico Dual Motor",
    cilindraje: "N/A",
    modelo: 2023,
    precio: "$90,000 USD",
  },
  {
    id: "carR",
    image: require("../assets/images/carR.png"),
    name: "Lamborghini Urus",
    motor: "V8 4.0L Twin-Turbo",
    cilindraje: "4000 cc",
    modelo: 2022,
    precio: "$220,000 USD",
  },
  {
    id: "carS",
    image: require("../assets/images/carS.png"),
    name: "Porsche Cayenne Turbo",
    motor: "V8 4.0L",
    cilindraje: "4000 cc",
    modelo: 2023,
    precio: "$130,000 USD",
  },
];

export default function Pantalla6() {
  const router = useRouter();
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const videoRef = useRef(null);

  useEffect(() => {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      staysActiveInBackground: false,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
    });
  }, []);

  const filteredVehicles = searchTerm.length > 0
    ? VEHICLES.filter(vehicle =>
        vehicle.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
      )
    : VEHICLES;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Disfruta de la vista</Text>

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
        source={require("../assets/videos/video6.mp4")}
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

      {/* 🔙 Botones de navegación */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/pantalla5")}>
          <Text style={styles.buttonText}>{"<"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/pantalla7")}>
          <Text style={styles.buttonText}>{">"}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
