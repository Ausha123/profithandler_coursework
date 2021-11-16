/* eslint-disable prettier/prettier */
import React from 'react';
import { KeyboardAvoidingView, TextInput, StyleSheet, Text, TouchableOpacity, View,Alert, Image, Heading, NativeBaseProvider, Center, HStack, Spinner, useToast } from 'react-native'
import * as native from 'native-base';
import { StatusBar } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { fontFamily } from 'styled-system';

StatusBar.setBarStyle('light-content', true);
StatusBar.setBackgroundColor('#4045a3');


const Main = () => {
    const navigation = useNavigation();
    
    return (
        <native.NativeBaseProvider>
        <native.Image
        alt="Main Image"
        source={require('../asserts/images/2.jpg')}
        position="absolute"
        resizeMode="cover"
        height="100%"
        width="100%"
        />

        {/* <native.Center flex={1}>
        <native.Text
        // color={'#d7141a'}
        // w="100%"
        // mb={8}
        // fontFamily="Rattoney"
        // fontSize="50px"
        // textAlign="center"

        
        >Profit
        Handler</native.Text>
        
        </native.Center> */}

<Text style={{
                            color: '#d7141a',
                            fontSize: 60,
                            letterSpacing: 3,
                            position: 'absolute',
                            top:70,
                            left:55,
                            textAlign: 'center',
                            fontFamily:"Rattoney"
                            
                        }}>
                            Profit Handler
                        </Text>

      
            <native.Box position="absolute" w="100%" bottom={5}>
                <native.Button
                colorScheme={'blue'}
                h="52px"
                w="75%"
                borderRadius={'50px'}
                margin="auto"
                onPress={() => navigation.navigate('Login')}>
                    Get Started
                    
                </native.Button>
            </native.Box>
       

        </native.NativeBaseProvider>
    );
};

export default Main
