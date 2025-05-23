import { StyleSheet } from "react-native";

export default StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    borderRadius: 12,
    margin: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  infoContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginTop: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
  specs: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#007AFF",
    textAlign: "center",
    marginTop: 5,
  },
});
