import React from "react"
import { View, Text, StyleSheet } from "react-native"

function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
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
    title: {
        color: '#d63384',
        fontSize: 24,
        fontWeight: 'bold'
    }
})

export default Home;
