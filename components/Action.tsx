import { Image, StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Action() {
    function openWebsite( websiteLink: string){
        Linking.openURL(websiteLink)
    }
    const image = {uri: "https://img.freepik.com/premium-vector/program-coding-concept_24640-24016.jpg?w=740"}
  return (
    <View>
      <Text style={styles.heandingText}>Blog card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>What is new in javascript ES12 </Text>
        </View>
        <Image source={image} style={styles.image}/>
        <View style={styles.bodyContainer}>
            <Text style={styles.bodyText}>This is a blog post about the new features in javascript Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, voluptates?</Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity style={styles.socialLinks} onPress={() => openWebsite("https://www.w3schools.com/js/")}><Text>Read More</Text></TouchableOpacity>
            <TouchableOpacity style={styles.socialLinks} onPress={() => openWebsite("https://qasimaly.vercel.app/")}><Text>Follow Me</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    heandingText:{
            fontSize: 24,
            fontWeight: 'bold',
            paddingHorizontal: 8
    },
    card:{
        width: 380,
        height: 360,
        borderRadius: 6,
        marginHorizontal: 12,
        marginVertical: 16,
        },
    elevatedCard:{
        backgroundColor: "#8AD6F8",
        opacity: 0.7,
        elevation: 3,
        shadowOffset:{
            width: 1,
            height: 1,
        }, 
        shadowColor: "#000",
        shadowOpacity: 0.4,
    },
    headingContainer:{
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    image:{
        height: 190,
        // borderTopLeftRadius: 6,
        // borderTopRightRadius: 6,
        // marginBottom: 8
    },
    headerText:{
        color: '#fff', 
        fontSize: 16,
        fontWeight: 600,

    },
    bodyContainer:{
        padding: 10,

    },
    bodyText:{
        color: "#fff"

    },
    footerContainer:{
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: "center",
        color: '#fff'
    },
    socialLinks:{
        color: 'red',
        backgroundColor: '#87C5FE',
        padding: 8,
        borderRadius: 6,
        fontSize: 16,
        
    }
})