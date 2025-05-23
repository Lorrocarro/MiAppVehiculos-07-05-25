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
import styles from "../assets/styles/stylesPantalla3";
import VehicleCard from "../components/VehicleCard";

const VEHICLES = [
  {
    id: "carG",
    image: require("../assets/images/carG.png"),
    name: "Jeep Wrangler",
    motor: "V6 3.6L",
    cilindraje: "3600 cc",
    modelo: 2023,
    precio: "$40,000 USD",
  },
  {
    id: "carH",
    image: require("../assets/images/carH.png"),
    name: "Land Rover Defender",
    motor: "Diesel 2.0L",
    cilindraje: "2000 cc",
    modelo: 2022,
    precio: "$55,000 USD",
  },
  {
    id: "carI",
    image: require("../assets/images/carI.png"),
    name: "Toyota Land Cruiser",
    motor: "V8 4.5L",
    cilindraje: "4500 cc",
    modelo: 2023,
    precio: "$70,000 USD",
  },
];

export default function Pantalla3() {
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
      <Text style={styles.text}>Tus emociones te elevan</Text>

    
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar vehículo..."
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>


      <View style={{ alignItems: "center", marginVertical: 20 }}></View>
      <Video
        ref={videoRef}
        source={require("../assets/videos/video3.mp4")}
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
        <TouchableOpacity style={styles.button} onPress={() => router.push("/pantalla2")}>
          <Text style={styles.buttonText}>{"<"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/pantalla4")}>
          <Text style={styles.buttonText}>{">"}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
