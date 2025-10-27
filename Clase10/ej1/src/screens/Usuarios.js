import React, { Component } from "react";
import { db, auth } from "../firebase/config";
import { FlatList, Text, View } from "react-native";

class Usuarios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios: []
        }
    }

    componentDidMount() {
        db.collection('users').onSnapshot(
            docs => {
                let users = [];
                docs.forEach(doc => {
                    users.push({
                        id: doc.id,
                        data: doc.data()
                    })
                    this.setState({
                        usuarios: users,
                        loading: false
                    })
                })
            })

    }
    render(){
        return(
            <View>
                <Text>Usuarios</Text>
                <Text>{console.log(this.state.usuarios)}</Text>
                <FlatList
                    data={this.state.usuarios}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <Text>{item.data.email}</Text>} />
            </View>
            

        )
    }
}

export default Usuarios;