import { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import Header from './components/Header';
import GameScreen from './screens/game';
import StartGame from './screens/start-game';

export default function App() {
  const [userNum, setUserNum] = useState(0)
  const [loaded] = useFonts({
    'Popins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Popins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Popins-Italic': require('./assets/fonts/Poppins-Italic.ttf'),
    'Popins-Black': require('./assets/fonts/Poppins-Black.ttf'),
    'Popins-Light': require('./assets/fonts/Poppins-Light.ttf')
  })

  if(!loaded){
    return (
      <View>
        <ActivityIndicator size='large' color='black' />
      </View>
    )
  }
  const title = !userNum ? 'Adivina un numero' : 'Comienza el Juego'

  const onStartGame = (selectedNum) => {
    setUserNum(selectedNum)
  }

  let content = <StartGame onStartGame={onStartGame} />

  if(userNum) {
    content = <GameScreen selectedNum={userNum} />
  }

  return (
    <View style={styles.container}>
      <Header title= {title}/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
