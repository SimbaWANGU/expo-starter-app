import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { router } from 'expo-router'

const Fallback = (props: { error: Error, resetError: () => void }) => {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text>Something happened!</Text>
      <TouchableOpacity
        onPress={() => router.push('/')}
      >
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Fallback