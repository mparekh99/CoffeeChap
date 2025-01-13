import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import { Appbar, TextInput, Button, Text } from 'react-native-paper';
import { useRouter } from 'expo-router';
import Colors from '../constants/colors.ts';
import { useAuth } from '../context/authContext'; 
import {initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';


export default function LoginPage({ navigation }) {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useAuth();


  const handleLogin = async () => {
    if (email && password) {
      try {
        const response = await login(email, password);

        // if (!response.success) {
        //   Alert.alert('Login In Failed', response.msg);
        // } 
      
      } catch (error) {
        console.error('Authentication error:', error.message);
        // Alert.alert('Error', 'Something went wrong. Please try again.');
      }
    }else {
      Alert.alert('Input Error', 'Please fill out all fields.');
    }
  };

  const handleBack = () => {
    router.back('/(startPage)/index');
  }

  return (
    <View style={styles.big_container}>
      {/* Top App Bar with Back Button */}
      <Appbar.Header>
        <Appbar.BackAction onPress={handleBack} />
        <Appbar.Content title="Login" />
      </Appbar.Header>

      {/* Main Content */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.container}>
          {/* Welcome Back Text */}
          <Text style={styles.welcomeText}>Welcome Back!</Text>

          {/* Email Input */}
          <TextInput
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            style={styles.input}
            autoCapitalize="none"
            autoCompleteType="email"
            textContentType="emailAddress"
          />

          {/* Password Input */}
          <TextInput
            label="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            style={styles.input}
            autoCapitalize="none"
            textContentType="password"
          />

          {/* Login Button */}
          <Button
            mode="contained"
            onPress={handleLogin}
            style={styles.button}
          >
            Login
          </Button>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  big_container: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    padding: 20,
    justifyContent: 'center',
    flexGrow: 1,
    justifyContent: 'flex-start',
    marginTop: 50,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: Colors.DARKBORWN,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
    borderRadius: 40,
  },
});
