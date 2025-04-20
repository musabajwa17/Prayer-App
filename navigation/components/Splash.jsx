import React from "react";
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';
// import IslamicLogo from "./Logo";
import AsSalahLogo from "./SalahLogo";

const Splash = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      {/* Logo at the top center */}
      <View style={styles.logoContainer}>
        <AsSalahLogo />
      </View>

      {/* Welcome message in the center */}
      <Text style={styles.welcomeText}>Welcome to Prayer App!</Text>

      {/* Description at the bottom center */}
      <Text style={styles.description}>
        This app helps you to fulfill your prayer goals during busy days.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    logoContainer: {
      position: 'absolute',
      top: '20%', // You can adjust this value to move the logo
    },
    logo: {
      width: 120,
      height: 120,
      resizeMode: 'contain',
    },
    welcomeText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'black', // Dark Green from your theme
      marginTop: 150, // Adjust to place the text below the logo
      textAlign: 'center',
    },
    description: {
      fontSize: 16,
      color: '#black', // Lighter Green from your theme
      textAlign: 'center',
      marginTop: 20,
      marginHorizontal: 20, // To ensure it doesn't touch the screen edges
    },
  });

export default Splash;
