import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-web";
import BotonClick from "../Components/Pressable/BotonClick/BotonClick";
import Contador from "../Components/Pressable/Contador/Contador";

function Home (){
    return(
        <View style={styles.container}>
            <Text style={styles.mundo}>Hola Mundo</Text>
            <BotonClick/>
            <Contador/>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        padding: 10,
        
    },
    mundo: {
        textAlign: "center"
    }
})

export default Home;

