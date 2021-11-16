


import React, {useState} from 'react';
import * as native from 'native-base';
import {StyleSheet,StatusBar,Text,Button} from 'react-native';
import { useNavigation} from '@react-navigation/native';
import axios from 'axios';


StatusBar.setBarStyle('light-content', true);
StatusBar.setBackgroundColor('#4045a3');
// StatusBar.setBackgroundColor('#51118b');

const Login = () => {
  const navigation = useNavigation();


  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [errmsg, seterrmsg] = useState(false);
  

  function login(){
      axios({
        method: 'GET',
        url: `http://192.168.43.24:3000/user/${email}/${password}`,

      })
  
      .then(res => {
        if (res.data) {
          navigation.navigate('Home');
        } else {
          seterrmsg(true);
        }
      })
      .catch((err) => {
        console.log(err);
        console.log(email);
        console.log(password);
      });
  }


  return (
    <native.NativeBaseProvider>
    <native.Center flex={1} bg="white">
      <native.Image
        alt="Alternate Text"
        source={require('../asserts/images/4.jpg')}
        position="absolute"
        resizeMode="cover"
        height="100%"
        width="100%"
      />
      <native.Box height="600px" justifyContent="center" width="300px">
        <native.KeyboardAvoidingView
          flex={1}
          behavior="padding"
          justifyContent="center">
          <native.Text
            fontSize="32px"
            fontFamily="Rattoney"
            textAlign="center"
            mb={8}
           color="#800080"
           
          //  color="#6b5ff2"
           
            
          >
            
            Profit
            Handler
          </native.Text>
          <native.Input
            w="100%"
            h="40px"
            
            placeholder="E-mail"
            placeholderTextColor="gray.600"
            mb={4}
            borderRadius="30px"
            bg="rgba(245, 246, 250,0.8)"
            style={styles.shadow}
            onChangeText={email => {
              setemail(email);
            }}
          />
          <native.Input
            w="100%"
            h="40px"
            type="Password"
            placeholder="Password"
            placeholderTextColor="gray.600"
            mb={4}
            borderRadius="30px"
            bg="rgba(245, 246, 250,0.8)"
            style={styles.shadow}
            onChangeText={password => {
              setpassword(password);
            }}
          />
          {errmsg ? <native.Text color={'red.500'} mb={2}>Email or Password wrong</native.Text> : null}
          <native.Button
            style={styles.shadow}
            bg="#6b5ff2"
            borderRadius="20px"
            onPress={login}>
            Login
            
          </native.Button>

           < native.Text
           mt="5"
           textAlign="right"
           fontSize="15px">
           Foggeton Password?
           </native.Text>
       
           < native.Text
           mt="10"
           fontSize="15px"
           textAlign="center">
          Create an Account?
           </native.Text>

          <native.Pressable  onPress={()=> navigation.navigate('SignUp')}>
          <native.Text
            fontWeight="bold"
            textAlign="center"
            textDecoration="underline"
           
          >
            SignUp
          </native.Text>
          </native.Pressable>

        </native.KeyboardAvoidingView>
      </native.Box>
    </native.Center>
  </native.NativeBaseProvider> 
  )
}

export default Login


const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.5,
    shadowRadius: 16.0,

    elevation: 8,
  },
});