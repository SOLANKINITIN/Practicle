import React, { useState } from "react";
import { Text, View, KeyboardAvoidingView, TextInput,Button, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import Lang from "./login.lang";

interface Iprops {
    navigation:any
}
const Login = (props:Iprops) => {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  
const handleSubmit = () =>{props.navigation.navigate('Home')}

  return (
    <KeyboardAvoidingView style={styles.root}>
      <View 
      style={{
        justifyContent:"center",
        alignItems:"center",
        display:'flex',
      }}>
        <Text style={{fontSize:25}}>WI like to join {Lang.EN.loginHeader}</Text>
        <TextInput
          style={{ width: 200,  height: 40, margin: 12,borderWidth: 1,paddingLeft:10,}}
          onChangeText={(value) => setEmailId(value)}
          value={emailId}
          placeholder="email Id"
          keyboardType="email-address"

        /><TextInput
          style={{ width: 200,  height: 40, margin: 12,borderWidth: 1,paddingLeft:10,}}
          onChangeText={(value) =>setPassword(value)}
          value={password}
          placeholder="password"
          secureTextEntry={true}
          keyboardType="visible-password"
        />
      </View>

<Text style={{
  borderBottomColor:'#0e1035',borderBottomWidth:1,paddingBottom:10,
}} onPress={() => props.navigation.navigate('Signup')}>Signup</Text>

       <View>
        <TouchableOpacity 
       style={{ marginTop: 20,borderWidth: 0,paddingHorizontal:20,paddingVertical:10, borderRadius:50,backgroundColor: '#0e1035'
      }}
  onPress={handleSubmit}>
    <Text style={{color:'#fff', fontSize:14, }}>Login</Text>
      </TouchableOpacity>
       </View>
    </KeyboardAvoidingView>
  );
};
export default Login;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
