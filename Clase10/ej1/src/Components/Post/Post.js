import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Post extends Component {
    render() {
        return (
            <View style={styles.postContainer}>
                <Text style={styles.postEmail}>{this.props.data.email}</Text>
                <Text style={styles.postText}>{this.props.data.texto}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    postContainer: {
        backgroundColor: "#fff",
        marginVertical: 8,
        padding: 10,
        borderRadius: 10,
    },
    postEmail: {
        fontWeight: "bold",
        color: "#d63384",
    },
    postText: {
        marginTop: 6,
        fontSize: 16,
        color: "#333",
    },
});

export default Post;
