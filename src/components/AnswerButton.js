import React from "react";
import { Button, StyleSheet, TouchableOpacity, View, Text } from "react-native";

const AnswerButton = ({ countryName, handlePress, selected }) => {



    return (
        <TouchableOpacity
            style={selected ? styles.containerSelected : styles.container }
            onPress={() => handlePress(countryName)}>
            <Text style={selected ? {color: 'white'} : {} }>{countryName}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 10,
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 20,
        marginBottom: 10,
        marginTop: 10,
        height: 50
    },
    containerSelected: {
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 20,
        marginBottom: 10,
        marginTop: 10,
        height: 50,
        backgroundColor: 'green',
    }
})

export default AnswerButton