import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, TextInput, Button, View, Image, FlatList } from 'react-native';

const AnswerScreen = ({ navigation, route }) => {

    const [answer, setAnswer] = useState(null)

    useEffect(() => {
        const right = route.params.gotItRight
        setAnswer(right)
    }, [])

    if (answer !== null) {
        return (
            <View style={styles.container}>
                <Text>{answer ? 'Acertou' : 'Errou'}</Text>
                <Button
                    title='Continuar'
                    style={styles.confirmButton}
                 onPress={() => navigation.navigate('Quiz', {reset: true})}
                />
            </View>
        )
    } else {
        return (
            <Text>Carregando</Text>
        )

    }


}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center'
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
    }
});

export default AnswerScreen;
