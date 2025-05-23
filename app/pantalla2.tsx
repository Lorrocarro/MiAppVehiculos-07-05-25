import { Audio, Video } from "expo-av";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../assets/styles/stylesPantalla2"; // ✅ Asegura que estás usando los estilos correctos
import VehicleCard from "../components/VehicleCard";

const VEHICLES = [
  {
    id: "carD",
    image: require("../assets/images/carD.png"),
    name: "Toyota Corolla",
    motor: "1.8L I4",
    cilindraje: "1800 cc",
    modelo: 2020,
    precio: "$20,000 USD",
  },
  {
    id: "carE",
    image: require("../assets/images/carE.png"),
    name: "Honda Civic",
    motor: "2.0L I4",
    cilindraje: "2000 cc",
    modelo: 2021,
    precio: "$22,000 USD",
  },
  {
    id: "carF",
    image: require("../assets/images/carF.png"),
    name: "Mazda 3",
    motor: "2.5L I4",
    cilindraje: "2500 cc",
    modelo: 2022,
    precio: "$24,000 USD",
  }
];

export default function Pantalla2() {
  const router = useRouter();
  const [selectedVehicle, setSelectedVehicle] = useState(null);
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
      <Text style={styles.text}>Te liberas al volante</Text>

      {/* 🔍 Barra de búsqueda */}
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
        source={require("../assets/videos/video2.mp4")}
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
        <TouchableOpacity style={styles.button} onPress={() => router.push("/pantalla1")}>
          <Text style={styles.buttonText}>{"<"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/pantalla3")}>
          <Text style={styles.buttonText}>{">"}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
