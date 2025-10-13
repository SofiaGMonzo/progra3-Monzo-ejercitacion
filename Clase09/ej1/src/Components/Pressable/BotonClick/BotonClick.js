import React, { Component } from "react";
import { Pressable, StyleSheet, Text } from "react-native";


class BotonClick extends Component {
    clickeame (){
        console.log("me clickearon");   
    }

    render(){
        return(
            < Pressable onPress={() => this.clickeame()}>
                <Text style={styles.boton}>clickeame</Text>
            </Pressable>
        )
    };
}

const styles = StyleSheet.create({
        boton: {
            backgroundColor: "#ccc",
            fontWeight: "bold",
            padding: 4,
            borderRadius: 4,
            marginBottom: 10,
            textAlign: "center"
        }
    })

export default BotonClick;