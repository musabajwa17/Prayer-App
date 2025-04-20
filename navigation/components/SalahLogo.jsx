import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Circle, Path, Text } from "react-native-svg";

const AsSalahLogo = ({ size = 150, color = "#008000", textColor = "#fff" }) => {
  return (
    <View style={styles.container}>
      <Svg width={size} height={size} viewBox="0 0 150 150">
        <Circle cx="75" cy="75" r="70" stroke={color} strokeWidth="5" fill="none" />
        {/* <Path
          d="M75 10C45 10 20 35 20 65C20 95 45 120 75 120C60 112 50 90 50 70C50 50 60 28 75 20"
          fill={color}
        />
        <Path
          d="M100 50 L105 65 L120 65 L108 75 L112 90 L100 82 L88 90 L92 75 L80 65 L95 65 Z"
          fill={color}
        /> */}
         {/* Arabic Calligraphy-style Text */}
         <Text
          x="75"
          y="85"
          fontSize="24"
          fontWeight="bold"
          fill={color}
          textAnchor="middle"
        >
          الصلاة
        </Text>

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

export default AsSalahLogo;
