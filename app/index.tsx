import { useRouter } from "expo-router";
import { Dimensions, Image, TouchableOpacity, View } from "react-native";
import styles from "../assets/styles/stylesIndex";

const { width, height } = Dimensions.get("window"); 

const VEHICLES = [
  { id: 1, src: require("../assets/images/car1.png"), route: "/pantalla1" },
  { id: 2, src: require("../assets/images/car2.png"), route: "/pantalla2" },
  { id: 3, src: require("../assets/images/car3.png"), route: "/pantalla3" },
  { id: 4, src: require("../assets/images/car4.png"), route: "/pantalla4" },
  { id: 5, src: require("../assets/images/car5.png"), route: "/pantalla5" },
  { id: 6, src: require("../assets/images/car6.png"), route: "/pantalla6" },
];

export default function Index() {
  const router = useRouter();

  return (
   <View style={styles.grid}>
  {VEHICLES.map((vehicle) => (
    <TouchableOpacity
      key={vehicle.id}
      style={styles.card}
      onPress={() => router.push(vehicle.route)}
    >
      <Image source={vehicle.src} style={styles.image} />
    </TouchableOpacity>
  ))}
</View>
  )
};
