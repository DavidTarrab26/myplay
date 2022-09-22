import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import NumberContainer from "../components/numberContainer";
import { generateRandomNumberBetween } from "../utils/functions";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    title: {
        fontSize: 18,
        textAlign: "center",
        paddingVertical: 10,
        fontFamily: 'Popins-Bold'
    },
    buttonCont: {
        width: "70%",
        marginHorizontal: 20,
        flexDirection: "row",
        marginVertical: 20,
        justifyContent: "space-around"
    }
})

const GameScreen = ({selectedNum}) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomNumberBetween(1, 100, selectedNum))
    return ( 
        <View style={styles.container}>
            <Text style={styles.title}>La suposicion del oponente</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View style={styles.buttonCont}>
                <Button title="MENOR" onPress={()=>null} />
                <Button title="MAYOR" onPress={()=>null} />
            </View>
        </View>
     );
}
 
export default GameScreen;