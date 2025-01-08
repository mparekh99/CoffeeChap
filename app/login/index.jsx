import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Colors from '../../constants/colors.ts';

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Coffee Chap</Text>
                <Image 
                    source={require('../../assets/images/coffee_cup1.jpg')}
                    style={styles.image}
                />
                <Text style={styles.subtext}>Welcome to the Coffee App!</Text>
            </View>

            
            <View style={styles.loginContainer}>

                <View style={[styles.buttom, {backgroundColor:Colors.LIGHTORANGE}]}>
                    <Text style={{textAlign:'center', color:'white', fontSize:15, fontWeight:'bold'}}>Sign Up</Text>
                </View>
                <View style={[styles.buttom, { marginTop: 25,  backgroundColor:Colors.DARKBORWN }]}>
                    <Text style={{textAlign:'center', color:'white', fontSize:15, fontWeight:'bold'}}>Login</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.LIGHTBROWN, // Very light coffee brown
    },
    header: {
        flex: 1,  // This ensures the header takes the space it needs
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: '90%',
        height: 300,
        resizeMode: 'contain',
    },
    subtext: {
        marginTop: 5,
        fontSize: 20,
        fontWeight: 'bold',
    },
    text: {
        marginTop: 10,
        fontSize: 50,
        fontWeight: 'bold',
    },
    loginContainer: {
        padding: 25,
        backgroundColor: 'white',
        height: 250,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000', //This adds a shadow 
        shadowOffset: { width: 0, height: -10 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5,
    },
    buttom: {
        width: '100%',
        padding:20,
        //backgroundColor:Colors.PRIMARY,
        borderRadius:40,

    },
});
