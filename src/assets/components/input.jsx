import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native';



export default function Input({ submitHandler }){
    const[value, setValue ] = useState("");

    const onChangetext = (text) => {
        setValue(text);
    };

    const handleAddHabit = () => {
        setValue (submitHandler(value));
        setValue("");
        Keyboard.dismiss();
        
    };

    return (
        <View>
          <View>
            <TextInput 
                placeholder="O que a General ordena?"
                placeholderTextColor={"#bbbb"}
                value={value}
                onChangeText={onChangetext}
                style= {styles.input}
            />
            <TouchableOpacity onPress={handleAddHabit} style={styles.button}>
                <Text style={styles.buttonText}> Adicionar</Text>
            </TouchableOpacity>
          </View>
        </View>
    );

}

const styles = StyleSheet.create({
    input:{
        width: 200,
        color: "white",
        borderWidth: 1,
        borderColor: "#ffffff",
        borderRadius: 5,
        paddingVertical:8,
        paddingHorizontal: 15,
        marginTop: 20,
    },

    button:{
        borderWidth:1,
        borderColor:"#bbb",
        borderRadius: 5,
        paddingVertical: 15,
        marginTop:25,
    
    },

    buttonText:{
        color: "white",
        textAlign:"center",
        
    }
});
