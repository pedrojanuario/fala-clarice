import React, { useState } from 'react' // UseState é um React hook
import { SafeAreaView, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'
import clarice from './assets/clarice.png'
import { FontAwesome } from '@expo/vector-icons'
import * as Speech from 'expo-speech'


export default function App() {

  const [falando, setFalando] = useState(false)

  let frases = [
    "Até cortar os próprios defeitos pode ser perigoso. Nunca se sabe qual é o defeito que sustenta nosso edifício inteiro.",
    "Que ninguém se engane, só se consegue a simplicidade através de muito trabalho.",
    "Tenho várias caras. Uma é quase bonita, outra é quase feia. Sou um o quê? Um quase tudo.",
    "A gente tem o direito de deixar o barco correr. As coisas se arranjam, não é preciso empurrar com tanta força.",
    "Amar não acaba. É como se o mundo estivesse a minha espera. E eu vou ao encontro do que me espera.",
    "Mas há a vida que é para ser intensamente vivida. Há o amor. Que tem que ser vivido até a última gota. Sem nenhum medo. Não mata.",
    "Toda mulher leva um sorriso no rosto e mil segredos no coração.",
    "Não tenho tempo pra mais nada, ser feliz me consome muito.",
    "Ela acreditava em anjo e, porque acreditava, eles existiam."
  ]
  const iniciaFala = () => {
    setFalando(true)
  }
  const finalizaFala = () => {
    setFalando(false)
  }
  function falar() {
    let frase = frases[parseInt(Math.random() * frases.length)]
    Speech.speak(frase, {
      language: 'pt',
      onStart: iniciaFala,
      onDone: finalizaFala
    })
  }
  function parar() {

    Speech.stop()
  }

  return (
    <SafeAreaView style={styles.Principal}>
      <Text style={styles.Titulo}>
        <FontAwesome name="comment-o" size={50} />
        Fala Clarice !!! {falando}

      </Text>
      <Image source={clarice} style={styles.Imagem} />

      {falando && <ActivityIndicator size = "large" color = "#00ff00"/>}

      <FontAwesome.Button
        nome="volume-up"
        backgroundColor="#0275d8"
        onPress={falar}
        styles={styles.Botao}> Ouvir a Frase

</FontAwesome.Button>

      <FontAwesome.Button
        name="stop-circle"
        backgroundColor={!falando ? "#cccccc":"#d9534f"}
        onPress={parar}
        disabled = {!falando}
        style={styles.Botao}>Parar
        

</FontAwesome.Button>

    </SafeAreaView>
  )

}

const styles = StyleSheet.create({

  Principal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around', // distribui uniformemente os elementos na vertical
    alignItems: 'center'


  },
  Titulo: {
    color: '#1A237E',
    fontSize: 30
  },
  Imagem: {
    height: 400,
    width: '100%',
    resizeMode: 'center'
  },

  Botao: {
    width: 150,
    height: 30,



  }

})