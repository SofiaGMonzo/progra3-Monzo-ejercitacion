import React, { Component } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { auth, db } from "../../firebase/config";
import firebase from "firebase";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  actualizarDatos(){
    db.collection('posts')
    .doc(this.props.data.id)
    .update({
      likes: this.props.data.data.likes.includes(auth.currentUser.email)
      ? firebase.firestore.FieldValue.arrayRemove(auth.currentUser.email)
      : firebase.firestore.FieldValue.arrayUnion(auth.currentUser.email)
    })
    .then(
      () => console.log('actualizado')
    )
  }


  render() {
    return (
      <View style={styles.postContainer}>
        <Text style={styles.mail}>{this.props.data.data.email}</Text>
        <Text style={styles.texto}>{this.props.data.data.texto}</Text>
        <Pressable style={styles.boton} onPress={() => this.actualizarDatos(this.props.data.data.likes)}>
          <Text style={styles.textoBoton}> Likes:{this.props.data.data.likes.length} </Text> 
        </Pressable> 

      </View>
    );
  }
}

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: "#fff",
    marginVertical: 8,
    padding: 10,
    borderRadius: 10,
  },
  mail: {
    fontWeight: "bold",
    color: "#d63384",
  },
  texto: {
    marginTop: 6,
    fontSize: 16,
    color: "#333",
  },
  boton: {
    marginTop: 10,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#d63384",
    alignItems: "center",
  },
  textoBoton: { fontWeight: "600" },
});

export default Post;
