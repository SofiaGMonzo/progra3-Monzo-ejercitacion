import React, { Component } from "react"
import { Pressable, Text, View, StyleSheet, TextInput } from "react-native"
import { auth, db} from "../firebase/config";

class nuevoPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            texto: ''
        }
    }

    onSubmit(email, texto){
        auth.createUserWithEmailAndPassword(email, texto)
            .then( response => {
                db.collection('posts').add({
                    email: email,
                    texto: this.state.texto,
                    createdAt: Date.now(),
                })
                .then(response => console.log(response) )
                .catch( e => console.log(e))
            })     
             .catch( e => console.log(e))
        
          };

    render() {
        return (
            <View>
                <Text>NuevoPost</Text>

                <TextInput
                    style={styles.texto}
                    keyboardType='email-address'
                    placeholder='Email'
                    onChangeText={text => this.setState({ email: text })}
                    value={this.state.email}
                />
                <TextInput
                    style={styles.texto}
                    keyboardType='default'
                    placeholder='texto'
                    onChangeText={text => this.setState({ texto: text })}
                    value={this.state.texto}
                />

                <Pressable onPress={() => this.onSubmit(this.state.email, this.state.texto)} >
                    <Text style={styles.boton2}>Publica</Text>
                </Pressable>

                <Text>{this.state.email}</Text>
                <Text>{this.state.texto}</Text>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffe6f0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boton: {
        backgroundColor: '#f4a9c6',
        padding: 12,
        marginVertical: 10,
        borderRadius: 10,
        width: '70%',
        alignItems: 'center'
    },
    boton2: {
        backgroundColor: '#f4a9c6',
        padding: 12,
        marginVertical: 10,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
        color: '#fff',
        fontWeight: 'bold'
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
})

export default nuevoPost;
