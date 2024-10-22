import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  view: {
    flex: 1,
    margin: 20,
  },
  title: { // This is the missing style
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
  },
});
