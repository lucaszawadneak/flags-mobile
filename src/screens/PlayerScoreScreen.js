import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, TextInput, Button, View, Image, FlatList } from 'react-native';
import useStore from '../store';

const PlayerScoreScreen = ({ navigation, route }) => {

    const { name, score, setCurrentStage, setScore } = useStore()

    const reset = () => {
        setScore(0)
        setCurrentStage(1)
        navigation.navigate('Quiz')
    }
    
    const end = () => {
        setScore(0)
        setCurrentStage(1)
        navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fim de jogo!</Text>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.title}>{score}</Text>

            <View style={styles.btnContainer}>
                <Button
                    title='Recomeçar'
                    style={styles.confirmButton}
                    onPress={() => reset()}
                />
                <Button
                    title='Encerrar'
                    style={styles.confirmButton}
                    onPress={() => end()}
                />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnContainer: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 30
    },
    containerIncorrect: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'red',
        paddingVertical: 30
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 50
    },
    countriesList: {
        width: '100%',
        paddingHorizontal: 20,
    },
    flag: {
        height: 100,
        width: 170,
        marginTop: 15,
        marginBottom: 15
    },
    confirmButton: {
        width: 100,
        paddingHorizontal: 20,
    },
    icon: {
        height: 200,
        width: 200
    }
});

export default PlayerScoreScreen
