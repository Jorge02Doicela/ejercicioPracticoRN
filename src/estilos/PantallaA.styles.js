import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#E0F2FE",
    flexGrow: 1,
    alignItems: "center",
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1E40AF",
  },
  imagen: {
    width: "80%",
    aspectRatio: 3,
    borderRadius: 15,
    marginBottom: 20,
    resizeMode: "contain",
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#2563EB",
    textAlign: "center",
  },
  parrafo: {
    fontSize: 16,
    marginBottom: 10,
    color: "#1E293B",
    textAlign: "center",
  },
  lista: {
    alignSelf: "flex-start",
    marginLeft: 10,
    marginBottom: 25,
  },
  item: {
    fontSize: 16,
    marginVertical: 4,
    color: "#334155",
  },
  botonContainer: {
    width: "60%",
  },
});

export default styles;
