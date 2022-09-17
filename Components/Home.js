import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { auth } from './config/firebase'
import {useNavigation} from '@react-navigation/core'

const Home = () => {
 const navigation = useNavigation()

    const handleSignOut = () =>{
        auth
        .signOut()
        .then(() =>{
            navigation.replace("Login")
        })
        .catch(error => alert(error.message))
    }

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity 
      onPress={handleSignOut}
      style={styles.button}
      >
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttons: {
        backgroundColor: '#328da8',
        width:'60%',
        padding: 20,
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 40,
    },
    buttonText:{
        color: 'white',
        fontWeight:'700',
        fontSize: 16,
    }
})