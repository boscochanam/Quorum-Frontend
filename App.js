import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, RefreshControl, ImageBackground, TextInput, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Alert } from 'react-native';

export default function App() {

  const url = "https://img.freepik.com/free-vector/blue-fluid-background-frame_53876-99019.jpg?w=360&t=st=1710821074~exp=1710821674~hmac=9943f23eb8e3e45e394a69fe6cdf08bdf6dd09801d0ee1046a946e15ad6fe3ed";
    const logo_img = "quorum.png";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    function onSubmit() {
      if (userEmail.includes("@") && userEmail.includes(".") && userPassword.length >= 8) {
        setEmail(userEmail);
        setPassword(userPassword);
      }
      else {
        Alert.alert("Invalid Email or Password", "Please enter a valid email and password");
      }
    }

    return (
    <ImageBackground style={styles.body} source={{uri: url}}>
      <View style={{ marginTop: 150, alignItems: 'center'}}>
      {/* <Text style={{color: "white", fontSize: 40, }}> Sign Up to Quorum </Text> */}
      </View>

      <View style={{alignItems: 'center'}}>
      <Image source={{uri: "https://i.imgur.com/POecYIA.png"}} style={{width: 300, height: 100, margin: 10, marginRight: 30, marginBottom: 0}} />
      <TextInput id='email' placeholder="Email" style={{backgroundColor: 'white', width: 300, padding: 10, margin: 10}} onChangeText={text => setUserEmail(text)} />
      <TextInput id='password' placeholder="Password" style={{backgroundColor: 'white', width: 300, padding: 10, margin: 10}} onChangeText={text => setUserPassword(text)} />
      
      </View>
    
      <View style={{width: 300, marginTop: 10}}>
      <Button title="Sign Up" onPress={onSubmit} />
      </View>

      <View>
      <Text style={{color: "white", fontSize: 20, marginTop: 20}}>Email: {email}</Text>
      <Text style={{color: "white", fontSize: 20}}>Password: {password}</Text>
      </View>
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
    alignItems: 'center'
  },
  body: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center'
  },
});
