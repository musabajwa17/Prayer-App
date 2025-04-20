import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path, Circle } from "react-native-svg";

const IslamicLogo = ({ size = 100, color = "#008000" }) => {
  return (
    <View style={styles.container}>
      <Svg width={size} height={size} viewBox="0 0 64 64" fill="none">
        {/* Crescent Moon */}
        <Path
          d="M32 4C17.64 4 6 15.64 6 30C6 44.36 17.64 56 32 56C35.44 56 38.72 55.36 41.72 54.2C39.6 55.72 37.04 57 34.2 57.88C26.96 60.36 18.36 58.56 12.28 52.72C6.2 46.88 4.52 38.32 7.24 31.08C9.96 23.84 17 19 25.04 18.28C27.08 18.08 29.16 18.24 31.16 18.76C30.76 18.52 30.36 18.24 29.96 18C27.88 16.88 25.64 16 23.32 15.36C26.84 8.4 33.92 4 42 4H32Z"
          fill={color}
        />
        
        {/* Star */}
        <Path
          d="M48 20L50.9 25.72L57.2 26.64L52.4 31.08L53.6 37.32L48 34.4L42.4 37.32L43.6 31.08L38.8 26.64L45.1 25.72L48 20Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default IslamicLogo;
