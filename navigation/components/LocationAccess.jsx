import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import * as Location from "expo-location";

export default function LocationAccessPage({ navigation }) {
  const [locationPermission, setLocationPermission] = useState(null);

  // Request location permission when the component mounts
  useEffect(() => {
    const requestLocationPermission = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      setLocationPermission(status);
    };

    requestLocationPermission();
  }, []);

  // Handle user response based on permission status
  const handlePermissionStatus = () => {
    if (locationPermission === "granted") {
      Alert.alert("Permission granted", "You can proceed with the app.");
      // Navigate to next screen (e.g., Home or Main)
      navigation.navigate("Home");
    } else {
      Alert.alert("Permission denied", "Location access is required to continue.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <Text style={styles.headerText}>Location Access</Text>

      {/* Info Section */}
      <Text style={styles.infoText}>
        We need your location to provide accurate prayer times based on your
        location.
      </Text>

      {/* Buttons based on permission status */}
      {locationPermission === null ? (
        <Text style={styles.loadingText}>Requesting location permission...</Text>
      ) : locationPermission === "granted" ? (
        <View style={styles.buttonContainer}>
          <Button title="Proceed" onPress={handlePermissionStatus} />
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <Button title="Grant Permission" onPress={handlePermissionStatus} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9bd49e", // Light Green Background
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  infoText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginBottom: 30,
  },
  loadingText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginBottom: 30,
    fontStyle: "italic",
  },
  buttonContainer: {
    marginTop: 20,
    width: "80%",
  },
});
