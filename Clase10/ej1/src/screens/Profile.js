import React from "react"
import { Pressable, Text, View, StyleSheet } from "react-native"

function Profile(props) {
    return (
        <View style={styles.container}>
            <Pressable style={styles.boton} onPress={() => props.navigation.navigate('Login')}>
                <Text style={styles.text}>Desloguearse</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffd6e8',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boton: {
        backgroundColor: '#f080a1',
        padding: 12,
        borderRadius: 10,
        width: '70%',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    }
})

export default Profile;
