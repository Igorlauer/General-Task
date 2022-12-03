import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function Empty(){

    return (
        <View>
            <Text style={styles.title}>Suas Taks estão vazias!</Text>
            <Text style={styles.div}>Você é um Homem livre</Text>
        </View>
    )

}

const styles = StyleSheet.create({

    title: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 25,
    },
    div: {
        fontSize: 12,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 5,
    },

})
