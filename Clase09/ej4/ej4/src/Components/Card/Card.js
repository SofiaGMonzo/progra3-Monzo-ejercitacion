import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Card(props) {
  return (
    <View style={styles.card}>
      <Image
        style={styles.imagen}
        source={{ uri: props.image }}
        resizeMode="contain"
      />
      <View style={styles.container}>
        <Text style={styles.titulo}>{props.title}</Text>
        <Text style={styles.precio}>Precio: {props.price}</Text>
        <Text style={styles.descripcion}>Descripcion: {props.description}</Text>
        <Text style={styles.categoria}>Categoria: {props.category}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    margin: 10,
    padding: 15,
    flexDirection: "row"
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5
  },
  precio: {
    fontSize: 15,
    fontWeight: "bold",
    marginVertical: 5
  },
  descripcion: {
    fontSize: 13
  },
  categoria: {
    fontSize: 14
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
});

export default Card;