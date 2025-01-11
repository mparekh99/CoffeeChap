import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { styled } from 'nativewind'
import { useAuth } from '../../context/authContext'

export default function Home() {

  const {logout, user} = useAuth();
  const handleLogout = async () => {
    await logout();
  }
  console.log('user data: ', user);
  return (
    <View className="flex-1 justify-center items-center bg-green-500">
      <Text className="text-white text-2xl">Home PAGE</Text>
      {/* <Button title="Sign Out">Sign Out</Button> */}
      <Pressable onPress={handleLogout}>
        <Text>Sign Out</Text>
      </Pressable>
    </View>
  )
}

