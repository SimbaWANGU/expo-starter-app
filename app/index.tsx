import { Pressable, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { useRouter } from 'expo-router'

const index = (): JSX.Element => {
  const router = useRouter()

  return (
    <View style={tw`h-full w-full items-center justify-center`}>
      <Text style={tw`text-red-500 text-4xl text-center my-4`}>Index Page</Text>
      <Text style={tw`text-red-500 text-xl text-center mb-2`}>Open up /app/index.tsx to start working on your app!</Text>
      <Pressable
        style={tw`h-20 w-8/12 border-red-500 border-2 rounded-xl items-center justify-center`}
        onPress={() => router.push('/Home')}  
      >
        <Text style={tw`text-red-500 text-2xl text-center`}>Press Me</Text>
      </Pressable>
    </View>
  )
}

export default index
