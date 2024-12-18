import { StyleSheet,ScrollView, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.heading}>Elevated Card</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Slide</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Corosal</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Navigate</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 8
    } ,
    container:{
        padding: 8
    },
    card:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 100,
        borderRadius: 5,
        margin: 8
    },
    cardElevated:{
        backgroundColor: "yellow",
        elevation: 4,
        shadowOffset:{
            width: 1,
            height: 1
        },
        shadowColor: '#333'
    }
})