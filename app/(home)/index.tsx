import { View, Text } from 'react-native'
import React from 'react'
import tw from '@Utils/tailwind'
import useTodos from '@Hooks/useTodos'

const index = () => {
  const { todos } = useTodos()

  console.log(todos)

  return (
    <View style={tw`flex-1 items-center justify-center `}>
      <Text style={tw`text-accent`}>index</Text>
    </View>
  )
}

export default index