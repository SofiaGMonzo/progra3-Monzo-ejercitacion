import React, { Component } from "react"
import { Pressable, Text, View, StyleSheet, TextInput } from "react-native"

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mail: "",
            username: "",
            password: ""
        }
    }

    onSubmit() {
        console.log(this.state.mail, this.state.username, this.state.password);
    }

    render() {
        return (
            <View style={styles.container}>
                <Pressable style={styles.boton} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.text}>Ya tengo cuenta</Text>
                </Pressable>

                <TextInput
                    style={styles.texto}
                    keyboardType='email-address'
                    placeholder='Email'
                    onChangeText={text => this.setState({ mail: text })}
                    value={this.state.mail}
                />
                <TextInput
                    style={styles.texto}
                    keyboardType='default'
                    placeholder='Username'
                    onChangeText={text => this.setState({ username: text })}
                    value={this.state.username}
                />
                <TextInput
                    style={styles.texto}
                    keyboardType='default'
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={text => this.setState({ password: text })}
                    value={this.state.password}
                />

                <Pressable onPress={() => this.onSubmit()}>
                    <Text style={styles.boton2}>Registrate</Text>
                </Pressable>

                <Text>{this.state.mail}</Text>
                <Text>{this.state.username}</Text>
                <Text>{this.state.password}</Text>
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

export default Register;
