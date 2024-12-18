import React from "react";
import {SafeAreaView,ImageBackground, ScrollView, StyleSheet, } from "react-native";
import FlatCard  from "./components/FlatCard";
import ElevatedCard  from "./components/ElevatedCard";
import FancyCard  from "./components/FancyCard";
import Action  from "./components/Action";
import ContactList  from "./components/ContactList";
const image = {uri: 'https://img.freepik.com/free-vector/white-polygon-pattern-bluish-gradient-background-social-template-vector_53876-118052.jpg?t=st=1733747026~exp=1733750626~hmac=1edbd41657295950bb5180952cd72a16dfba91f9218f0ce462fe250cd55b157c&w=740'};

const App =()=>{
  return(
    <SafeAreaView>
     <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <ScrollView>
      <FlatCard/>
      <ElevatedCard/>
      <FancyCard/>
      <Action/>
      {/* <ContactList/> */}
    </ScrollView>
    </ImageBackground>
   </SafeAreaView>
   
  )
}
const styles = StyleSheet.create({ image: {
  // flex: 1,
  justifyContent: 'center',
}})
export default App;