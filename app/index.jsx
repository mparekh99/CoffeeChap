import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

export default function StartPage() {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-green-500 text-2xl">Hello World!!</Text>
      <ActivityIndicator size="large" color="gray" />
    </View>
  );
}
