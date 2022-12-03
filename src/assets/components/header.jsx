import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function Header(){

    return (
        <View>
            <Text style={styles.title}>Check-List da General </Text>
        </View>
    )

}

const styles = StyleSheet.create({

    title: {
        fontSize: 30,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },

})
