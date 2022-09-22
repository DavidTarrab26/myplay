import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, Keyboard } from "react-native";
import NumberContainer from "../components/numberContainer";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        marginTop: 10,
        paddingVertical: 10,
        fontFamily: 'Popins-Bold'
    },
    label: {
        fontSize: 14,
        textAlign: "center",
        paddingVertical: 10,
        fontFamily: 'Popins-Regular'
    },
    inputCont: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal:20,
        paddingVertical: 20
    },
    input: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        fontSize: 30,
        paddingVertical: 15
    },
    buttonCont: {
        width: "70%",
        marginHorizontal: 20,
        flexDirection: "row",
        marginVertical: 20,
        justifyContent: "space-around"
    }
})

const StartGame = ({onStartGame}) => {
    const [number, setNumber] = useState('')
    const [confirmedNum, setConfirmedNum] = useState(false)
    const [selectedNum, setSelectedNum] = useState(0)

    const onHandleChange = (text) =>{
        setNumber(text.replace(/[^0-9]/g,''))
    }
    const onReset = () => {
        setNumber('')
        Keyboard.dismiss()
        setSelectedNum(0)
        setConfirmedNum(false)
    }
    const onConfirmed = () => {
        const chosenNum = parseInt(number, 10)
        if (isNaN(chosenNum) || chosenNum == 0 || chosenNum > 99) return;
        setConfirmedNum(true);
        setSelectedNum(chosenNum)
        setNumber('')
    }
    const onHandleStartGame = () => {
        onStartGame(selectedNum)
    }
    const confirmedOutput = () => confirmedNum && (
        <View>
            <Text>Tu seleccion</Text>
            <NumberContainer>{selectedNum}</NumberContainer>
            <Button 
                title="Iniciar Juego"
                onPress={onHandleStartGame}
            />
        </View>
    )
    return ( 
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()} >
            <View style={styles.container}>
                <Text style={styles.title}>Comenzar juego!!</Text>
                <View style={styles.inputCont}>
                    <Text style={styles.label}>Elija el numero</Text>
                    <TextInput 
                        style={styles.input} 
                        keyboardType="numeric" 
                        maxLength={2} 
                        onChangeText={(text)=> onHandleChange(text)}
                        value={number}
                        />
                </View>
                <View style={styles.buttonCont}>
                    <Button
                        title="Limpiar"
                        onPress={()=> onReset()}
                    />
                    <Button
                        title="Confirmar"
                        onPress={()=> onConfirmed()}
                    />
                </View>
                {confirmedOutput()}
            </View>
        </TouchableWithoutFeedback>
     );
}
 
export default StartGame;