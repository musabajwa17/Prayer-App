// // import React from 'react'
// // import { View ,Text, Button} from 'react-native'

// // const SettingsScreen = ({navigation}) => {
// //   // const {itemId, otherParams} = route.params;
// //   return (
// //     <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
// //     <Text 
// //          onPress={()=> navigation.navigate('Home')} 
// //          style={{fontSize: 28, fontWeight: "bold"}}
// //          >Settings Screen</Text>
// //          {/* <Text style={{fontWeight: "bold", marginTop: 8}}>Item ID: {JSON.stringify(itemId)}</Text>
// //          <Text style={{fontWeight: "bold", marginTop: 8}}>Params: {JSON.stringify(otherParams)}</Text> */}
// //         <View style={{marginTop: 8}}>
// //          <Button title='Go to Details' onPress={() => navigation.navigate('Details')} />
// //         </View>
// //   </View>
// //   )
// // }

// // export default SettingsScreen

// import React, { useState, useEffect } from "react";
// import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
// import { Magnetometer } from "react-native-sensors"; // To get device orientation
// import * as Location from "expo-location"; // To get the user location

// // Kaaba Coordinates (Mecca)
// const kaabaLat = 21.4225;
// const kaabaLon = 39.8262;

// export default function SettingsScreen() {
//   const [location, setLocation] = useState(null);
//   const [heading, setHeading] = useState(null); // For compass heading
//   const [qiblaDirection, setQiblaDirection] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Get user's current location
//     const getLocation = async () => {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status === "granted") {
//         const { coords } = await Location.getCurrentPositionAsync({});
//         setLocation(coords);
//       } else {
//         setError("Permission Denied");
//       }
//     };

//     // Start monitoring device's magnetic field for heading (compass)
//     const sensorSubscription = Magnetometer.addListener((data) => {
//       const { x, y, z } = data;
//       const angle = Math.atan2(y, x) * (180 / Math.PI);
//       setHeading(angle >= 0 ? angle : angle + 360);
//     });

//     getLocation();

//     return () => {
//       sensorSubscription.remove();
//     };
//   }, []);

//   useEffect(() => {
//     // Calculate Qibla direction after getting the location and heading
//     if (location && heading !== null) {
//       const { latitude, longitude } = location;

//       // Convert latitude and longitude to radians
//       const lat1 = (latitude * Math.PI) / 180;
//       const lon1 = (longitude * Math.PI) / 180;
//       const lat2 = (kaabaLat * Math.PI) / 180;
//       const lon2 = (kaabaLon * Math.PI) / 180;

//       // Calculate the Qibla direction using the formula
//       const deltaLon = lon2 - lon1;
//       const qiblaAngle = Math.atan2(
//         Math.sin(deltaLon) * Math.cos(lat2),
//         Math.cos(lat1) * Math.sin(lat2) -
//           Math.sin(lat1) * Math.cos(lat2) * Math.cos(deltaLon)
//       );

//       // Convert the Qibla angle to degrees and normalize
//       const qiblaDirection = (qiblaAngle * 180) / Math.PI;
//       setQiblaDirection((qiblaDirection + 360) % 360); // Normalize to 0-360 degrees
//     }
//   }, [location, heading]);

//   const handleRefresh = () => {
//     setLocation(null);
//     setHeading(null);
//     setQiblaDirection(null);
//     setError(null);
//     setTimeout(() => {
//       getLocation();
//     }, 1000);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Qibla Direction</Text>
//       {error ? (
//         <Text style={styles.errorText}>{error}</Text>
//       ) : location && qiblaDirection !== null ? (
//         <View style={styles.qiblaContainer}>
//           <Text style={styles.qiblaText}>Qibla Direction: {qiblaDirection.toFixed(2)}°</Text>
//           <View style={[styles.compass, { transform: [{ rotate: `${heading}deg` }] }]}>
//             <Image
//               source={require("../assets/compass.png")} // Add a compass image in assets
//               style={styles.compassImage}
//             />
//           </View>
//         </View>
//       ) : (
//         <Text style={styles.loadingText}>Loading...</Text>
//       )}

//       <TouchableOpacity style={styles.refreshButton} onPress={handleRefresh}>
//         <Text style={styles.refreshButtonText}>Refresh</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#9bd49e", // Light Green background
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#fff",
//     marginBottom: 20,
//   },
//   errorText: {
//     fontSize: 16,
//     color: "#ff6347", // Red for errors
//     marginTop: 20,
//   },
//   qiblaContainer: {
//     alignItems: "center",
//   },
//   qiblaText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#fff",
//     marginBottom: 30,
//   },
//   compass: {
//     width: 200,
//     height: 200,
//     borderRadius: 100,
//     borderWidth: 10,
//     borderColor: "#fff",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   compassImage: {
//     width: 150,
//     height: 150,
//   },
//   loadingText: {
//     fontSize: 18,
//     color: "#fff",
//     fontStyle: "italic",
//   },
//   refreshButton: {
//     backgroundColor: "#25a05f", // Dark Green
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//   },
//   refreshButtonText: {
//     fontSize: 16,
//     color: "#fff",
//   },
// });

import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

export default function SettingsScreen() {
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello! How can I help you today?",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Bot",
        },
      },
    ]);
  }, []);

  const onSend = (newMessages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );

    // Simulate a bot response
    setTimeout(() => {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [
          {
            _id: Math.random(),
            text: "This is a bot response!",
            createdAt: new Date(),
            user: {
              _id: 2,
              name: "Bot",
            },
          },
        ])
      );
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chatbot</Text>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1, // User ID
        }}
        placeholder="Type a message..."
        renderBubble={(props) => (
          <View style={styles.bubbleContainer}>
            <GiftedChat.Bubble
              {...props}
              wrapperStyle={{
                left: {
                  backgroundColor: "#9bd49e", // Greenish for user messages
                },
                right: {
                  backgroundColor: "#25a05f", // Darker green for bot messages
                },
              }}
            />
          </View>
        )}
        renderInputToolbar={(props) => (
          <View style={styles.inputContainer}>
            <GiftedChat.InputToolbar {...props} containerStyle={styles.input} />
          </View>
        )}
        renderUsernameOnMessage={false} // Hide username on messages
        alignTop={true}
        isKeyboardInternallyHandled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#25a05f",
    textAlign: "center",
    marginBottom: 20,
  },
  bubbleContainer: {
    marginBottom: 5,
  },
  inputContainer: {
    paddingBottom: 10,
  },
  input: {
    backgroundColor: "#f1f1f1",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#dcdcdc",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
