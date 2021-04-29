import React, { useState,useRef } from "react";
import { Text, View,KeyboardAvoidingView,TextInput,Button } from "react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Lang from "./signup.lang";

interface Iprops {
    isInputFocus?: boolean
    userError?: string
    navigation:any
}


const Signup = (props:Iprops) => {
   const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');
  const [userDesription, setDescription] = useState('');
  const [image, setImage] = useState('');

  // const [firstNameError, setFirstNameError] = useState('');
  // const [lastNameError, setLastNameError] = useState('');
  // const [emailIdError, setEmailIdError] = useState('');
  // const [passwordError, setPasswordError] = useState('');
  // const [phoneNumberError, setPhoneNumberError] = useState('');
  // const [genderError, setGenderError] = useState('');
  // const [userDesriptionError, setDescriptionError] = useState('');
  // const [imageError, setImageError] = useState('');

  //  const [isFocused, setIsFocused] = useState(false);

  //   let userNameRef: any = useRef();
  //   let lastNameRef: any = useRef();
  //   let emailRef: any = useRef();
  //   let passwordRef: any = useRef();
  //   let phoneNumberRef: any = useRef();
  //   let genderRef: any = useRef();
  //   let userDescritionRef: any = useRef();
  //   let imageRef: any = useRef();

const handleSubmit = () =>{props.navigation.navigate('Login')}

  return (
    <KeyboardAvoidingView style={styles.root}>
      <View style={{
        justifyContent:"center",
        alignItems:"center",
        display:'flex',
      }}>
        <Text style={{fontSize:25}}>WI like to join {Lang.EN.signup}</Text>
        <TextInput
          style={{ width: 200,  height: 40, margin: 12,borderWidth: 1,paddingLeft:10,}}
          onChangeText={(value) =>setFirstName(value)}
          value={firstName}
          placeholder="first name"
          keyboardType="default"

        />
        <TextInput
          style={{ width: 200,  height: 40, margin: 12,borderWidth: 1,paddingLeft:10,}}
          onChangeText={(value) =>setLastName(value)}
          value={lastName}
          placeholder="last name"
          keyboardType="default"


        /><TextInput
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
          keyboardType="visible-password"

        /><TextInput
          style={{ width: 200,  height: 40, margin: 12,borderWidth: 1,paddingLeft:10,}}
          onChangeText={(value) => setPhoneNumber(value)}
          value={phoneNumber}
          placeholder="phone number"
          keyboardType="numeric"

        /><TextInput
          style={{ width: 200,  height: 40, margin: 12,borderWidth: 1,paddingLeft:10,}}
          onChangeText={(value) => setGender(value)}
          value={gender}
          placeholder="gender"
          keyboardType="default"

        /><TextInput
          style={{ width: 200,  height: 40, margin: 12,borderWidth: 1,paddingLeft:10,}}
          onChangeText={(value) => setDescription(value)}
          value={userDesription}
          placeholder="user description"
          keyboardType="numeric"

        />
        <TextInput
          style={{ width: 200,  height: 40, margin: 12,borderWidth: 1,paddingLeft:10,}}
          onChangeText={(value) => setImage(value)}
          value={image}
          placeholder="image"
          keyboardType="numeric"

        />
      </View>
<Text style={{
  borderBottomColor:'#0e1035',borderBottomWidth:1,paddingBottom:10,
}} onPress={() => props.navigation.navigate('Login')}>Login</Text>

      <View>
      <TouchableOpacity 
       style={{ marginTop: 20,borderWidth: 0,paddingHorizontal:20,paddingVertical:10, borderRadius:50,backgroundColor: '#0e1035'
      }}
  onPress={handleSubmit}>
    <Text style={{color:'#fff', fontSize:14, }}>Signup</Text>
      </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Signup;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
