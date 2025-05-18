import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const VEHICLES = [
  { id: 1, src: require("../assets/images/car1.png"), route: "/pantalla1" },
  { id: 2, src: require("../assets/images/car2.png"), route: "/pantalla2" },
  { id: 3, src: require("../assets/images/car3.png"), route: "/pantalla3" },
  { id: 4, src: require("../assets/images/car4.png"), route: "/pantalla4" },
  { id: 5, src: require("../assets/images/car5.png"), route: "/pantalla5" },
  { id: 6, src: require("../assets/images/car6.png"), route: "/pantalla6" }
];

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido a MiAppVehiculos</Text>
      
      <View style={styles.grid}>
        {VEHICLES.map((vehicle) => (
          <TouchableOpacity key={vehicle.id} onPress={() => router.push(vehicle.route)}>
            <Image source={vehicle.src} style={styles.image} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
    resizeMode: "contain",
  },
});
