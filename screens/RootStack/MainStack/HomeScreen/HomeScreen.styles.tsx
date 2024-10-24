import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centers vertically
    alignItems: 'center',      // Centers horizontally
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,          // Space between title and first button
  },
  button: {
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff', // Add a background color to the buttons
    borderRadius: 5,
  },
  Text: {
    color: '#0096FF',             // Blue text for the buttons
    fontSize: 20,
  },
});