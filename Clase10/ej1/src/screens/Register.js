import React from "react"
import { Pressable, Text, View, StyleSheet } from "react-native"

function Register(props) {
    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={() => props.navigation.navigate('Login')}>
                <Text style={styles.text}>Ya tengo cuenta</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffe6f0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#f4a9c6',
        padding: 12,
        borderRadius: 10,
        width: '70%',
        alignItems: 'center'
    },
    text: {
        color: '#fff',
        fontWeight: 'bold'
    }
})

export default Register;
