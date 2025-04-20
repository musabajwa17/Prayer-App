// import * as React from 'react'
// import { View, Text, Button, TouchableOpacity } from 'react-native'

// const HomeScreen = ({navigation}) => {
//   const [count, setCount] = React.useState(0);
//   React.useEffect(()=> {
//     navigation.setOptions({
//       headerRight: () => (
//         // <Button onPress={() => setCount((c) => c+1)}  title='Update count'/>
//         <TouchableOpacity onPress={() => setCount((c) => c+1)} style={{margin: 10, color: "white"}}>Inc Count</TouchableOpacity>
//       )
//     })
//   }, [navigation]);
//   return (
//     <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
//       <Text>Count: {count}</Text>
//       <Text 
//            onPress={()=> alert("this is home screen.")} 
//            style={{fontSize: 28, fontWeight: "bold"}}
//            >Home Screen</Text>
//            <View style={{marginTop: 5}}>
//            <Button title='Go to Settings' onPress={() => navigation.navigate('Settings', 
//            {
//             itemId: 86,
//             otherParams: 'Anything You want here'
//            }
//            )} />
//            </View>
//            <TouchableOpacity  onPress={() => navigation.setOptions({title: "Updated"})} 
//            style={{padding: 10, borderWidth: 2, margin: 15, fontSize: 15}}
//             >
//               Update title
//             </TouchableOpacity>
//     </View>
//   )
// }

// export default HomeScreen

import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const PRAYERS = [
  { name: "Fajr", time: "05:00 AM" },
  { name: "Dhuhr", time: "12:30 PM" },
  { name: "Asr", time: "04:00 PM" },
  { name: "Maghrib", time: "06:45 PM" },
  { name: "Isha", time: "08:15 PM" },
];

export default function HomeScreen() {
  const [nextPrayer, setNextPrayer] = useState(null);

  useEffect(() => {
    const getNextPrayer = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const currentMinutes = now.getMinutes();
      
      const upcoming = PRAYERS.find((prayer) => {
        const [hour, minute] = prayer.time.split(/[:\s]/);
        const formattedHour = prayer.time.includes("PM") && hour !== "12" ? parseInt(hour) + 12 : parseInt(hour);
        return formattedHour > currentHour || (formattedHour === currentHour && parseInt(minute) > currentMinutes);
      });

      setNextPrayer(upcoming || PRAYERS[0]); // Loop back to Fajr if no prayer left today
    };

    getNextPrayer();
  }, []);

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Prayer Times</Text>
      </View>

      {/* Next Prayer Section */}
      {nextPrayer && (
        <View style={styles.nextPrayerContainer}>
          <Text style={styles.nextPrayerText}>Next Prayer: {nextPrayer.name}</Text>
          <Text style={styles.nextPrayerTime}>{nextPrayer.time}</Text>
        </View>
      )}

      {/* Prayer Times List */}
      <FlatList
        data={PRAYERS}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={[styles.prayerCard, nextPrayer?.name === item.name && styles.highlightCard]}>
            <Text style={styles.prayerName}>{item.name}</Text>
            <Text style={styles.prayerTime}>{item.time}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9bd49e", // Light Green Background
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
  },
  nextPrayerContainer: {
    backgroundColor: "#25a05f",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15,
  },
  nextPrayerText: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
  nextPrayerTime: {
    fontSize: 16,
    color: "#fff",
    marginTop: 5,
  },
  prayerCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 3,
  },
  highlightCard: {
    backgroundColor: "#25a05f",
  },
  prayerName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  prayerTime: {
    fontSize: 16,
    color: "#666",
  },
});

