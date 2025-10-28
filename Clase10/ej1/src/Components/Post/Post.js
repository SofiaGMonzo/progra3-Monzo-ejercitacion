import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Post(props) {
    return (
        <View style={styles.postContainer}>
            <Text style={styles.mail}>{props.data.email}</Text>
            <Text style={styles.texto}>{props.data.texto}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    postContainer: {
        backgroundColor: "#fff",
        marginVertical: 8,
        padding: 10,
        borderRadius: 10,
    },
    mail: {
        fontWeight: "bold",
        color: "#d63384",
    },
    texto: {
        marginTop: 6,
        fontSize: 16,
        color: "#333",
    },
});

export default Post;
