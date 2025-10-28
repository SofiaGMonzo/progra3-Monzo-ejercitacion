import React, { Component } from "react";
import { db } from "../firebase/config";
import { FlatList, Text, View, StyleSheet } from "react-native";
import Post from "../Components/Post/Post";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
        db.collection("posts").onSnapshot(
            docs => {
                let postsArray = [];
                docs.forEach(doc => {
                    postsArray.push({
                        id: doc.id,
                        data: doc.data(),
                    });
                    this.setState({
                        posts: postsArray
                    });
                });
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Home</Text>
                <FlatList
                    data={this.state.posts}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <Post data={item.data} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffe6f0",
        padding: 10,
    },
    title: {
        color: "#d63384",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 10,
    },
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

export default Home;
