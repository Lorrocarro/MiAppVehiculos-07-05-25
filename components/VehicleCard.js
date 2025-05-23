import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function VehicleCard({ vehicle, selected, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, selected && styles.selected]}>
      <Image source={vehicle.image} style={styles.image} />
      <Text style={styles.name}>{vehicle.name}</Text>

      {selected && (
        <View style={styles.details}>
          <Text>Motor: {vehicle.motor}</Text>
          <Text>Cilindraje: {vehicle.cilindraje}</Text>
          <Text>Modelo: {vehicle.modelo}</Text>
          <Text>Precio: {vehicle.precio}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    width: 180, // puedes ajustar el ancho para más espacio
  },
  selected: {
    borderColor: "#007AFF",
    borderWidth: 3,
  },
  image: {
    width: 120,
    height: 80,
    resizeMode: "contain",
  },
  name: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  details: {
    marginTop: 10,
    alignItems: "flex-start",
  },
});
