import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: props.info
    };
  }

  render() {

    return (
      <View style={styles.card}>
        <Image
          style={styles.imagen}
          source={{ uri: this.state.info.image }}
          resizeMode="contain"
        />
        <View style={styles.container}>
          <Text style={styles.titulo}>{this.state.info.title}</Text>
          <Text style={styles.categegoria}>{this.state.info.category}</Text>
          <Text style={styles.precio}>${this.state.info.price}</Text>
          <Text style={styles.descripcion}>{this.state.info.description}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    margin: 10,
    padding: 15,
    flexDirection: "row"
  },
  imagen: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5
  },
  categoria: {
    fontSize: 14
  },
  precio: {
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: 5
  },
  descripcion: {
    fontSize: 13
  },
});

export default Card;
