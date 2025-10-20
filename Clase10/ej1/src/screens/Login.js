import React from "react"
import { View, Pressable, Text, StyleSheet } from "react-native"

function Login(props) {
    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={() => props.navigation.navigate('Register')}>
                <Text style={styles.text}>Registrate</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={() => props.navigation.navigate('HomeMenu', {screen: 'Home'})}>
                <Text style={styles.text}>Home</Text>
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
        marginVertical: 10,
        borderRadius: 10,
        width: '70%',
        alignItems: 'center'
    },
    text: {
        color: '#fff',
        fontWeight: 'bold'
    }
})

export default Login;
