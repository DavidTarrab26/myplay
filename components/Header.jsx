import React from "react"
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header: {
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'blue',
        paddingTop: 20,
    },
    title: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Popins-Bold'
    }
})

const Header = ({title}) => {
    return ( 
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
     );
}
 
export default Header;