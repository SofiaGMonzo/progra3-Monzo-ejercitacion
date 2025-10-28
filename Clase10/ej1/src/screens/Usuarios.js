import React, { Component } from "react";
import { db } from "../firebase/config";
import { FlatList, Text, View, StyleSheet } from "react-native";

class Usuarios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: []
        }
    }

    componentDidMount() {
        db.collection('users').onSnapshot(
            docs => {
                let users = [];
                docs.forEach(doc => {
                    users.push({
                        id: doc.id,
                        data: doc.data()
                    });
                    this.setState({
                        usuarios: users
                    });
                });
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Usuarios</Text>
                <FlatList
                    data={this.state.usuarios}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.userContainer}>
                            <Text style={styles.userEmail}>{item.data.email}</Text>
                        </View>
                    )}
                />
            </View>
        )
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
    userContainer: {
        backgroundColor: "#fff",
        marginVertical: 6,
        padding: 10,
        borderRadius: 10,
    },
    userEmail: {
        fontWeight: "bold",
        color: "#d63384",
        fontSize: 16,
    },
});

export default Usuarios;
