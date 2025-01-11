// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return (
//     <Stack>
//       <Stack.Screen name="index" />
//       {/* <Stack.Screen name="startPage/index" options={{headerShown:false}} /> */}
//     </Stack>
//   );
// }



import React, {useEffect} from 'react';
import { Text, View } from 'react-native';
import { Slot, useRouter, useSegments } from "expo-router";
import "../global.css";
import { AuthContext, AuthContextProvider, useAuth } from '../context/authContext';

const MainLayout = () => {
  const {isAuthenticated} = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    // check if user is authenticated or not
    if (typeof isAuthenticated == 'undefined') return;
    const inApp = segments[0] == '(app)';

    if (isAuthenticated && !inApp) {
      //redirect to home
      router.replace('/(app)/home');

    }else if (isAuthenticated == false) {
      //redirect to startPage
      router.replace('/startPage');
    }

  }, [isAuthenticated])

  return <Slot />
}

export default function RootLayout() {
  return (
    <AuthContextProvider>
      <MainLayout />
    </AuthContextProvider>
  );
}

// import { Stack } from 'expo-router';

// export default function RootLayout() {
//   return (
//     <Stack
//       screenOptions={{
//        headerShown:false
//       }}>
//       <Stack.Screen name="(startPage)/index" />
//       {/* <Stack.Screen name="details" /> */}
//     </Stack>
//   );
// }


// import { Slot } from "expo-router";

// // Import your global CSS file
// import "../global.css";

// export default Slot;