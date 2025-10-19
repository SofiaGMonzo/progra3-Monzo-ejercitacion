import React, { Component } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Card from "../Components/Card/Card";

class ProductsAll extends Component {
  constructor() {
    super();
    this.state = {
      lista: []
    };
  }

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ lista: data.results });
      })
      .catch((error) => {
        console.error("Error al obtener los personajes:", error);
      });
  }

  render() {
    return (
      <View style={styles.flatlist}>
        <FlatList
          data={this.state.lista}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Card info={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flatlist: {
    width: "100%",
    flex: 1
  }
});

export default ProductsAll;
