import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


export default function Task({ item, deleteItem }) {

    const [check, setCheck] = useState(false);

    const handleCheck = () => {
        setCheck(!check);
    };

    return (
        <View
            style={[
                styles.taskContainer,
                { backgroundColor: check === false ? "#23395d" : "green" },
            ]}
        >
            {check === false ? (
                <TouchableOpacity style={styles.checkcircle} onPress={handleCheck} />
            ) : (
                <TouchableOpacity onPress={handleCheck}>
                   <Image 
                    style={styles.iconImage}
                    source={require("generaltask/src/img/complete.png")} />
                </TouchableOpacity>
            )}

            <View>
                <Text style={styles.taskTitle}> {item.value}</Text>
            </View>

            <TouchableOpacity onPress={() => deleteItem (item.key)}>
                <Image 
                    style={styles.iconImage} 
                    source={require("generaltask/src/img/trash.png")} />
            </TouchableOpacity>
            
        </View>
    );

};

const styles = StyleSheet.create({
    taskContainer: {
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "#4B0082",
        flexDirection: "row",
        paddingVertical: 20,
        paddingHorizontal: 10,
        justifyContent: "center",
    },
    checkcircle: {
        borderWidth: 1,
        width: 25,
        height: 25,
        borderRadius: 12,
        borderColor: "white",
    },
    taskTitle: {
        color: 'white',
        fontSize: 16,
        minWidth: 180,
        maxWidth: 180,
        paddingHorizontal: 15,
    },
    iconImage: {
        width: 25,
        height: 25,
    }
});
