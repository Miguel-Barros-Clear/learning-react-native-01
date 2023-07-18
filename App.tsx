import React from 'react'
import { Image, Text, View } from 'react-native'

export default function App() {

  let nome = "Matheus"

  return (
    <View>
      <Text>Hello World</Text>
      <Text>Meu primeiro App</Text>
      <Jobs />
      <Text>Meu nome é {nome}</Text>
    </View>
  )
}


export function Jobs() {
  let img = "https://sujeitoprogramador.com/steve.png"

  return (
    <View>
      <Text>Jobs</Text>
      <Image source={{ uri: img }} style={{ width: 300, height: 300 }} />
    </View>
  )
}