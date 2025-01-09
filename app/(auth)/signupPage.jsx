import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import { Appbar, TextInput, Button, Text } from 'react-native-paper';
import { useRouter } from 'expo-router';
import {initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import Colors from '../../constants/colors';



const firebaseConfig = {
    apiKey: "AIzaSyBLGHAAI8eRqUfANaCW8FTl0fXrYRo5CTE",
    authDomain: "coffeechap-777ad.firebaseapp.com",
    projectId: "coffeechap-777ad",
    storageBucket: "coffeechap-777ad.firebasestorage.app",
    messagingSenderId: "1097727538277",
    appId: "1:1097727538277:web:4c7467c77a239893af028c",
    measurementId: "G-SBW991Y4V8"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);




export default function SignUpPage({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null); // Track user authentication state

  

  const router = useRouter();

  // const auth = getAuth(app);

  const handleRegister = async () => {
    if (email && password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log('User created successfully!');
        router.push('/(screens)/profile');
      
      } catch (error) {
        console.error('Authentication error:', error.message);
      }
      // console.log('Signing Up with:', email, password);
      // router.push('/(screens)/profile');
    }
    
  };


  const handleBack = () => {
    router.back('/(startPage)/index');
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Top App Bar with Back Button */}
      <Appbar.Header>
        <Appbar.BackAction onPress={handleBack} />
        <Appbar.Content title="Sign Up" />
      </Appbar.Header>

      {/* Main Content */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.container}>
          {/* Get Started */}
          <Text style={styles.welcomeText}>Get Started</Text>

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

          {/* Sign Up Button */}
          <Button
            mode="contained"
            onPress={handleRegister}
            style={styles.button}
          >
            Sign Up
          </Button>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
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
