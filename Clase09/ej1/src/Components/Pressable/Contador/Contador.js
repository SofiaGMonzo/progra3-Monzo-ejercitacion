import React, { Component } from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

class Contador extends Component {
    constructor(){
        super()
            this.state = {
                contador: 0
            }
    };

    contadorActualizado(){
        this.setState({ contador: this.state.contador + 1})
        
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.click}> Cantidad de clicks: {this.state.contador}</Text>
                <Pressable onPress={()=> this.contadorActualizado()}>
                    <Text style={styles.botonContador}> Haz click aqui</Text>
                </Pressable>
            </View>
        )
    }
}

const styles = StyleSheet.create({
        botonContador: {
            backgroundColor: "rgba(0, 255, 0, 0.5)",
            padding: 7,
            borderRadius: 4,
            marginBottom: 10,
            fontWeight: "bold",
            textAlign: "center"
        },
        container: {
            marginVertical: 5
        },
        click: {
             textAlign: "center"
        }
    })

export default Contador;