// import { View, Text } from 'react-native'
// import React from 'react'
// import { styled } from 'nativewind'

// export default function signupPage() {
//   return (
//     <View className="flex-1 justify-center items-center bg-green-500">
//       <Text>signupPage</Text>
//     </View>
//   )
// }

import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import { Appbar, TextInput, Button, Text } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { useAuth } from '../context/authContext';  // Correctly use useAuth hook
import Colors from '../constants/colors.ts';

export default function SignUpPage() {
  const router = useRouter();
  const { register } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleRegister = async () => {
    if (email && password && username) {
      try {
        const response = await register(email, password, username);
        
        if (!response.success) {
          Alert.alert('Sign Up Failed', response.msg);
        } 
      } catch (error) {
        console.error('Error during registration:', error.message);
        // Alert.alert('Error', 'Something went wrong. Please try again.');
      }
    } else {
      Alert.alert('Input Error', 'Please fill out all fields.');
    }
  };

  const handleBack = () => {
    router.back('startPage');
  };

  return (
    <View style={styles.big_container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={handleBack} />
        <Appbar.Content title="Sign Up" />
      </Appbar.Header>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.welcomeText}>Get Started</Text>

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

          <TextInput
            label="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            style={styles.input}
            autoCapitalize="none"
            textContentType="password"
          />

          <TextInput
            label="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
            style={styles.input}
            autoCapitalize="none"
          />

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



// import React, { useState } from 'react';
// import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
// import { Appbar, TextInput, Button, Text } from 'react-native-paper';
// import { useRouter } from 'expo-router';
// import {initializeApp } from 'firebase/app';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
// import Colors from '../constants/colors.ts';
// import {useAuth, register} from '../context/authContext.jsx'; 

// export default function SignUpPage({ navigation }) {
//   const router = useRouter();
//   const {register} = useAuth();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [username, setUsername] = useState('');

  

//   // const auth = getAuth(app);

//   const handleRegister = async () => {
//     if (email && password && username) {
//       try {
    
//         await register(auth, email, password, username);

//       // if (!response.sucess) {
//       //   Alert.alert('Sign Up', response.msg);
//       // }



//         console.log('User created successfully!');
//       // router.push('/(screens)/profile');
      
//       } catch (error) {
//         console.error('Authentication error:', error.message);
//       }
//       // console.log('Signing Up with:', email, password);
//       // router.push('/(screens)/profile');
//     }
    
//   };


//   const handleBack = () => {
//     router.back('/startPage');
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       {/* Top App Bar with Back Button */}
//       <Appbar.Header>
//         <Appbar.BackAction onPress={handleBack} />
//         <Appbar.Content title="Sign Up" />
//       </Appbar.Header>

//       {/* Main Content */}
//       <KeyboardAvoidingView
//         style={{ flex: 1 }}
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       >
//         <ScrollView contentContainerStyle={styles.container}>
//           {/* Get Started */}
//           <Text style={styles.welcomeText}>Get Started</Text>

//           {/* Email Input */}
//           <TextInput
//             label="Email"
//             value={email}
//             onChangeText={(text) => setEmail(text)}
//             keyboardType="email-address"
//             style={styles.input}
//             autoCapitalize="none"
//             autoCompleteType="email"
//             textContentType="emailAddress"
//           />

//           {/* Password Input */}
//           <TextInput
//             label="Password"
//             value={password}
//             onChangeText={(text) => setPassword(text)}
//             secureTextEntry
//             style={styles.input}
//             autoCapitalize="none"
//             textContentType="password"
//           />

//           {/* Username Input */}
//           <TextInput
//             label="Username"
//             value={username}
//             onChangeText={(text) => setUsername(text)}
//             keyboardType="username"
//             style={styles.input}
//             autoCapitalize="none"
//           />

//           {/* Sign Up Button */}
//           <Button
//             mode="contained"
//             onPress={handleRegister}
//             style={styles.button}
//           >
//             Sign Up
//           </Button>
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     justifyContent: 'center',
//     flexGrow: 1,
//     justifyContent: 'flex-start',
//     marginTop: 50,
//   },
//   welcomeText: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     marginBottom: 30,
//     textAlign: 'center',
//     color: Colors.DARKBORWN,
//   },
//   input: {
//     marginBottom: 15,
//   },
//   button: {
//     marginTop: 20,
//     borderRadius: 40,
//   },
// });
