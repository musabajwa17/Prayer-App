// import React from 'react'
// import { View ,Text, Button} from 'react-native'

// const DeatailsScreen = ({navigation}) => {
//   return (
//     <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
//       <Text 
//            onPress={()=> navigation.navigate('Home')} 
//            style={{fontSize: 28, fontWeight: "bold"}}
//            >Details Screen</Text>
//            <View style={{fontWeight: "bold", marginTop: 10}}><Button title='Go to Details Again' onPress={() => navigation.push('Details')} /></View>
//            <View style={{fontWeight: "bold", marginTop: 10}}><Button title='Go Back' onPress={() => navigation.goBack()} /></View>
//            {/* <View style={{fontWeight: "bold", margin: 15}}><Button title='Go Back' onPress={() => navigation.goBack()} /></View> */}
//            <View style={{fontWeight: "bold", marginTop: 10}}><Button title='Go to Settings' onPress={() => navigation.navigate('Settings', {
//             itemId: 96,
//             otherParams: 'Anything You want here'})} /></View>
//     </View>
//   )
// }

// export default DeatailsScreen
import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

// Sample data for Hadees and their narrators
const HADEES = [
  {
    id: "1",
    text: "Actions are judged by intentions, and everyone will get what was intended.",
    narrator: "Umar ibn Al-Khattab (RA)",
  },
  {
    id: "2",
    text: "The best of you are those who learn the Qur'an and teach it.",
    narrator: "Uthman ibn Affan (RA)",
  },
  {
    id: "3",
    text: "Seek knowledge from the cradle to the grave.",
    narrator: "Ali ibn Abi Talib (RA)",
  },
  {
    id: "4",
    text: "None of you truly believes until he loves for his brother what he loves for himself.",
    narrator: "Anas ibn Malik (RA)",
  },
  {
    id: "5",
    text: "The strongest among you is the one who controls his anger.",
    narrator: "Abu Huraira (RA)",
  },
];

export default function DeatailsScreen() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Hadees Panel</Text>
      </View>

      {/* Hadees List Section */}
      <FlatList
        data={HADEES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.hadeesCard}>
            <Text style={styles.hadeesText}>"{item.text}"</Text>
            <Text style={styles.narratorText}>- {item.narrator}</Text>
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
  hadeesCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 5,
  },
  hadeesText: {
    fontSize: 18,
    fontStyle: "italic",
    color: "#333",
    marginBottom: 10,
  },
  narratorText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#25a05f", // Dark Green for narrator
  },
});
