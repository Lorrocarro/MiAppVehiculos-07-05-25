import { Audio, Video } from "expo-av";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import styles from "../assets/styles/stylesPantalla5";
import VehicleCard from "../components/VehicleCard";

const VEHICLES = [
  {
    id: "carÑ",
    image: require("../assets/images/carÑ.png"),
    name: "BMW X5",
    motor: "V6 3.0L",
    cilindraje: "3000 cc",
    modelo: 2023,
    precio: "$75,000 USD",
  },
  {
    id: "carO",
    image: require("../assets/images/carO.png"),
    name: "Audi Q7",
    motor: "V8 4.0L",
    cilindraje: "4000 cc",
    modelo: 2022,
    precio: "$85,000 USD",
  },
  {
    id: "carP",
    image: require("../assets/images/carP.png"),
    name: "Mercedes-Benz GLE",
    motor: "V6 3.5L",
    cilindraje: "3500 cc",
    modelo: 2023,
    precio: "$80,000 USD",
  }
];

export default function Pantalla5() {
  const router = useRouter();
  const [selectedVehicle, setSelectedVehicle] = useState(null);
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
        vehicle.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : VEHICLES;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>La ruta libre</Text>

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
        source={require("../assets/videos/video5.mp4")}
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
        <TouchableOpacity style={styles.button} onPress={() => router.push("/pantalla4")}>
          <Text style={styles.buttonText}>{"<"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/pantalla6")}>
          <Text style={styles.buttonText}>{">"}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
