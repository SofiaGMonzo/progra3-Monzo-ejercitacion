import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
function Card(props){ 
    return (
      <View style={styles.card}>
        <Image
          style={styles.imagen}
          source={{ uri: props.info.image }}
          resizeMode="contain"
        />
        <View style={styles.container}>
          <Text style={styles.nombre}>{props.info.name}</Text>
          <Text style={styles.texto}>Species: {props.info.species}</Text>
          <Text style={styles.texto}>Gender: {props.info.gender}</Text>
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    margin: 10,
    padding: 15,
    flexDirection: "row",
    backgroundColor: "#eee",
    alignItems: "center",
  },
  imagen: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
  },
  container: {
    flex: 1,
  },
  nombre: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  texto: {
    fontSize: 14,
  },
});

export default Card;
