import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
export default function FlatCard() {
    const items = [
        {
        ids: 1,
        image: 'https://img.freepik.com/free-vector/unemployment-insurance-abstract-concept-vector-illustration-unemployment-benefits-lost-job-tired-stressed-businessman-claim-form-workers-compensation-paper-work-interview-abstract-metaphor_335657-1355.jpg?t=st=1734422078~exp=1734425678~hmac=fa42cf3b8b7c2582c5bd6e85df2e706955a7b9c3c97fefef586fc33ed6bf21b3&w=826',
        label: 'text',
    },
    {
        ids: 2,
        image: 'https://img.freepik.com/free-vector/statistical-analysis-man-cartoon-character-with-magnifying-glass-analyzing-data-circular-diagram-with-colorful-segments-statistics-audit-research-concept-illustration_335657-2063.jpg?t=st=1734422097~exp=1734425697~hmac=c039993cca1db1ef0f0128344aa1244bc99965c9db184200d2e92918a288af55&w=826',
        label: 'text',
    },
    {
        ids: 3,
        image: 'https://img.freepik.com/free-vector/online-ordering-purchase-making-buying-goods-internet-store-website-female-customer-with-tablet-adding-product-cart-cartoon-character_335657-2561.jpg?t=st=1734422123~exp=1734425723~hmac=cf72c5d0cc2d11d1e33c02d31c4923f9d15f8f9d14fcab7a6e4ac0ec706c6bb6&w=826',
        label: 'text',
    }
]
  return (
    <View>
      <Text style={styles.heading}>This is a Card Heading</Text>
      {items.map(({ids, image, label})=>(
        <View key={ids} style={styles.container}>
        <ImageBackground source={{uri:image}} resizeMode="cover" style={styles.image}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>{label}</Text>
        </View>
        </ImageBackground>
        </View>

      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    // width: '20%',
    height: 100,
    borderRadius: 8,
    margin: 8,
  },
  cardOne: {
    // backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'blue',
  },
  cardThree: {
    backgroundColor: 'green',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  image: {
    // flex: 1,
    justifyContent: 'center',
    width: 110,
    borderRadius: 12,
    margin: 8,
    overflow: 'hidden',
  }
});
