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
import styles from "../assets/styles/stylesPantalla4";
import VehicleCard from "../components/VehicleCard";

const VEHICLES = [
  {
    id: "carJ",
    image: require("../assets/images/carJ.png"),
    name: "Ram 1500",
    motor: "V8 5.7L",
    cilindraje: "5700 cc",
    modelo: 2023,
    precio: "$60,000 USD",
  },
  {
    id: "carK",
    image: require("../assets/images/carK.png"),
    name: "Mercedes-Benz G-Wagon",
    motor: "V8 4.0L",
    cilindraje: "4000 cc",
    modelo: 2022,
    precio: "$150,000 USD",
  },
  {
    id: "carL",
    image: require("../assets/images/carL.png"),
    name: "Ford Bronco",
    motor: "V6 2.7L",
    cilindraje: "2700 cc",
    modelo: 2023,
    precio: "$45,000 USD",
  }
];

export default function Pantalla4() {
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
      <Text style={styles.text}>Paisaje bello</Text>

      
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
        source={require("../assets/videos/video4.mp4")}
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
        <TouchableOpacity style={styles.button} onPress={() => router.push("/pantalla3")}>
          <Text style={styles.buttonText}>{"<"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/pantalla5")}>
          <Text style={styles.buttonText}>{">"}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
