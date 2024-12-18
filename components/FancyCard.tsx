import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
export default function FancyCard() {
    contentlist =[
        {
            uid:1,
            title : 'This is A title2 1',
            image : 'https://img.freepik.com/free-vector/unemployment-insurance-abstract-concept-vector-illustration-unemployment-benefits-lost-job-tired-stressed-businessman-claim-form-workers-compensation-paper-work-interview-abstract-metaphor_335657-1355.jpg?t=st=1734422078~exp=1734425678~hmac=fa42cf3b8b7c2582c5bd6e85df2e706955a7b9c3c97fefef586fc33ed6bf21b3&w=826',
            label: 'This a label',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, minus modi. Incidunt totam, iste aspernatur obcaecati consequatur, asperiores libero saepe ullam dolorem deserunt veniam facilis!',
            footer:  '12 min away',
        },
        {
            uid:2,
            title : 'This is A title 2',
            image : 'https://img.freepik.com/free-vector/preparing-test-together-learning-studying-with-friends-effective-revision-revision-timetables-planning-how-revise-exams-concept-pinkish-coral-bluevector-isolated-illustration_335657-1258.jpg?t=st=1734422138~exp=1734425738~hmac=dc9e5d8b40057f1c9c59f8009ff6fd9ad586b98b2ba0a0c0bd24a443092a385a&w=1380',
            label: 'This a label',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, minus modi. Incidunt totam, iste aspernatur obcaecati consequatur, asperiores libero saepe ullam dolorem deserunt veniam facilis!',
            footer:  '12 min away',
        },
        {
            uid:2,
            title : 'This is A title ',
            image : 'https://img.freepik.com/free-vector/two-business-partners-shaking-hands-big-briefcase-partnership-agreement-cooperation-deal-completed-concept-white-background_335657-1643.jpg?t=st=1734422156~exp=1734425756~hmac=c06f691ee228e36a32ad1d31044e02f0cb43a2481c0b0213ffb07cb1cb15edc7&w=1380',
            label: 'This a label',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, minus modi. Incidunt totam, iste aspernatur obcaecati consequatur, asperiores libero saepe ullam dolorem deserunt veniam facilis!',
            footer:  '12 min away',
        },
    ]
  return (
    <View>
      <Text style={styles.headingText}>Fancy Card</Text>
      {contentlist.map(({uri, title, label, image, description, footer})=>(
            <View key={uri} style={[styles.card, styles.elevatedCard]}> 
        
            <Image source={{uri: image}} style={styles.cardImage}/>
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>{title}</Text>
                <Text style={styles.cardLabel}>{label}</Text>
                <Text style={styles.cardDes}>{description}</Text>
                <Text style={styles.cardFooter}>{footer}</Text>
            </View>
          </View>
        ))}
      
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