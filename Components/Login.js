import {KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React, {useState, useEffect} from 'react'
import { auth } from './config/firebase'
import {useNavigation} from '@react-navigation/core'

const Login = () => {
    const [email, setEmail] = useState('')
const[password, setPassword] = useState('')

useEffect(()=> {

   const unsubscribe = auth.onAuthstateChanged(user =>{
        if (user) {
            navigation.replace("Home")
        }
    })

    return unsubscribe
}, [])

const handleSignUp = () =>{
    auth

    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
        const user = userCredentials.user;
        console.log(user.email)

    })
    .catch(error => alert(error.message))
}

const handleLogin = () =>{
    auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with', user.email);
    })
    .catch(error => alert(error.message))
}

  return (
    <KeyboardAvoidingView 
    style={styles.container}
    behavior="padding"
    >
<View style={styles.inputContainer}>
      <TextInput 
      placeholder="Email"
    //   value={ }
    //   onChangeText={text =>}
      style={styles.input}
      />
    <TextInput 
      placeholder="Password"
    //   value={ }
    //   onChangeText={text =>}
      style={styles.input}
      secureTextEntry
      />

    </View>

<View style={styles.buttonContainer}>
    <TouchableOpacity
    onPress={handleLogin}
    style={styles.button}
    >
        <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>

    <TouchableOpacity 
    onPress={handleSignUp}
    style={styles.buttonOutline}
    >
        <Text style={styles.buttonOutlineText}>Register</Text>
    </TouchableOpacity>
</View>
    </KeyboardAvoidingView>
    
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    inputContainer:{
        width:'80%'
    },
    input:{
        backgroundColor:'white',
        paddingHorizontal:20,
        paddingVertical: 15,
        borderRadius:15,
        marginTop:8,
    },
    buttonContainer:{
        width:'60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35
    },

    button:{
        backgroundColor: '#328da8',
        width: '100%',
        padding: 20,
        borderRadius:15,
        alignItems: 'center',

    },
    buttonOutline:{
        backgroundColor:'white',
        marginTop:5,
        borderColor:'#328da8',
        borderWidth:3,

    },
    buttonText:{
        color:'white',
        fontWeight:'800',
        fontSize:20,
    },
    buttonOutlineText:{
        color:'#328da8',
        fontWeight:'800',
        fontSize:20,
    },

})