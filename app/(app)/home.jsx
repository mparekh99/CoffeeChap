import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { styled } from 'nativewind'
import { useAuth } from '../../context/authContext'

export default function Home() {

  const {logout} = useAuth();
  const handleLogout = async () => {
    console.log("Sign Out Clicked!!")
    await logout();
  }
  // console.log('user data: ', user);
  return (
    <View>
      <Pressable onPress={handleLogout}>
        <Text>Sign Out</Text>
      </Pressable>
    </View>
  )
}

