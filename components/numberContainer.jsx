import React from "react";
import { StyleSheet, Text, View } from "react-native";


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center"
    },
    number: {
        fontSize: 25,
        fontWeight: 'bold'
    }
})

const NumberContainer = ({children}) => {
    return ( 
        <View style={styles.container}>
            <Text style={styles.number}>{children}</Text>
        </View>
     );
}
 
export default NumberContainer;