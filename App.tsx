import React from 'react'
import { Image, Text, View } from 'react-native'

export default function App() {

  let nome = "Matheus"
  let img = "https://sujeitoprogramador.com/steve.png"

  return (
    <View>
      <Text>Hello World</Text>
      <Text>Meu primeiro App</Text>
      <Image source={{ uri: img }} style={{ width: 300, height: 300 }} />
      <Text>Meu nome é {nome}</Text>
    </View>
  )
}
