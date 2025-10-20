import React, { Component } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

class DynamicForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comentario: ""
    };
  }

  onSubmit() {
    console.log(this.state.comentario);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.texto}
          keyboardType="default"
          placeholder="Comentarios"
          onChangeText={(text) => this.setState({ comentario: text })}
          value={this.state.comentario}
        />

        <Pressable style={styles.boton} onPress={() => this.onSubmit()}>
          <Text style={styles.text}>Registrarse</Text>
        </Pressable>

        <View style={styles.datos}>
          <Text>Datos ingresados:</Text>
          <Text>{this.state.comentario}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe6f0",
    justifyContent: "center",
    alignItems: "center"
  },
  texto: {
    backgroundColor: "#fff",
    borderColor: "#f4a9c6",
    borderWidth: 1,
    borderRadius: 10,
    width: "70%",
    padding: 10,
    marginBottom: 15
  },
  boton: {
    backgroundColor: "#f4a9c6",
    padding: 12,
    borderRadius: 10,
    width: "70%",
    alignItems: "center"
  },
  text: {
    color: "#fff",
    fontWeight: "bold"
  },
  datos: {
    marginTop: 20,
    alignItems: "center"
  }
});

export default DynamicForm;
