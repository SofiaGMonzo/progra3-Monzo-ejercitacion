import React, { Component } from "react";
import { Pressable, Text, View, StyleSheet, TextInput } from "react-native";
import { auth, db } from "../firebase/config";

class NuevoPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            texto: ""
        };
    }

    onSubmit() {
        db.collection('posts').add({
            email: auth.currentUser.email,
            texto: this.state.texto,
            createdAt: Date.now(),
            likes: []
        })
            .then(() => {
                this.setState({ texto: "" });
                console.log('publicacion creado con éxito');
            })
            .catch(e => console.log('Error al crear la publicacion:', e));
        this.props.navigation.navigate("Home")
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Nuevo Post</Text>

                <TextInput
                    style={styles.texto}
                    placeholder="Publica algo"
                    onChangeText={text => this.setState({ texto: text })}
                    value={this.state.texto}
                />

                <Pressable onPress={() => this.onSubmit()} style={styles.boton2}>
                    <Text style={styles.text}>Publicar</Text>
                </Pressable>

                <Text>{this.state.email}</Text>
                <Text>{this.state.texto}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffe6f0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boton2: {
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
    },
    texto: {
        width: '70%',
        borderWidth: 1,
        borderColor: '#f4a9c6',
        borderRadius: 10,
        padding: 10,
        marginVertical: 8,
        backgroundColor: '#fff'
    }
});

export default NuevoPost;
