import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
const image = {uri:'https://img.freepik.com/free-photo/office-workers-using-finance-graphs_23-2150408682.jpg?t=st=1733982647~exp=1733986247~hmac=0059b6821a70c7844343e8a93dfba5c013618d1a402bd22c9fda34f5125317e4&w=1380'};
export default function ContactList() {
    const conatacList = [
        {
        uid:1,
        title : "This is A title",
        image : image,
        label: "This a label",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, minus modi. Incidunt totam, iste aspernatur obcaecati consequatur, asperiores libero saepe ullam dolorem deserunt veniam facilis!",
        footer: " 12 min away"
    },
    {
        uid:2,
        title : "This is A title 2",
        label: "This a label",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, minus modi. Incidunt totam, iste aspernatur obcaecati consequatur, asperiores libero saepe ullam dolorem deserunt veniam facilis!",
        footer: " 12 min away"
    },
    {
        uid:3,
        title : "This is A title 2",
        label: "This a label",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, minus modi. Incidunt totam, iste aspernatur obcaecati consequatur, asperiores libero saepe ullam dolorem deserunt veniam facilis!",
        footer: " 12 min away"
    },
]
  return (
    <View>
      <Text style={styles.headingText}>Fancy Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <Image source={image} style={styles.cardImage}/>
        {conatacList.map( ({title, label, description, footer})=>(
            <View key={uid} style={styles.cardBody}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardLabel}>{label}</Text>
                <Text style={styles.cardDes}>{description}</Text>
                <Text style={styles.cardFooter}>{footer}</Text>
            </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card:{
        width: 380,
        height: 360,
        marginHorizontal: 12,
        marginVertical: 16,
        borderRadius: 9
    },
    elevatedCard:{
        backgroundColor: '#8AD6F8',
        elevation: 3,
        shadowOffset:{
            width: 1,
            height: 1,
        }, 
        opacity: 0.7,

    },
    cardImage:{
        height: 180,
         borderTopLeftRadius: 6,
         borderTopRightRadius: 6,
         marginBottom: 8
    },
    cardBody:{
        flex:1,
        flexGrow: 1, 
        paddingHorizontal: 12
    },
    cardTitle:{
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4
    },
    cardLabel:{
        color: '#fff',
        fontSize: 14,
        marginBottom: 6
    },
    cardDes:{
        color: '#fff',
        fontSize: 12,
        marginBottom: 6,
        flexShrink: 1
    },
    cardFooter:{
        color: '#fff'
    }
})