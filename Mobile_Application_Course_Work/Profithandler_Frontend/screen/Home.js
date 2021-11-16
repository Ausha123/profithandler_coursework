import React from 'react';
import * as native from 'native-base';
import { AccessibilityInfo, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { InfoIcon, MoonIcon, NativeBaseProvider } from 'native-base';
import { VictoryChart,VictoryGroup,VictoryBar,VictoryTheme } from 'victory-native';
import Animated from 'react-native-reanimated';
import { Children } from 'react';

StatusBar.setBarStyle('light-content', true);
StatusBar.setBackgroundColor('black');

const data = [
  { x: "Jan", y: 100 },
  { x: "Feb", y: 70 },
  { x: "Mar", y: 40 },
  { x: "Apr", y: 60 },
  { x: "May", y: 85 },
  { x: "Jun", y: 80 },
  { x: "Jul", y: 30 },
  { x: "Aug", y: 63 },
  { x: "Sep", y: 83 },
  { x: "Oct", y: 48 },
  { x: "Nov", y: 53 },
  { x: "Dec", y: 90 },
]

const Home = () => {

  const navigation = useNavigation();


  return (
    <NativeBaseProvider
      position='absolute'
    >
      <native.Image
        alt="Alternate Text"
        source={require('../asserts/images/login5.jpg')}
        position="absolute"
        resizeMode="cover"
        height="100%"
        width="100%"
      />
      <TouchableOpacity>
        <native.ArrowBackIcon
          mt='2'
          backgroundColor='white'
          height='40'
          width='40'
          borderRadius='100'
        ></native.ArrowBackIcon>
      </TouchableOpacity>

      <native.Center>
        <native.Text
          mt='12'
          fontFamily='fantasy'
          fontWeight='bold'
          fontSize={30}
          alignContent='center'
          justifyContent='center'
          textAlign='center'
        >Welcome to Our Income Tracking App</native.Text>
      </native.Center>

      <native.Square 
        borderRadius={30}
        backgroundColor='lightyellow'
        mt='30'
        style={styles.chart}
      >
        <NativeBaseProvider>
          <VictoryChart height='200' theme={VictoryTheme.grayscale}>
            <VictoryGroup>
              <VictoryBar barWidth='15' alignment='middle' data={data} y="y" x="x"></VictoryBar>
              <VictoryBar data={data} y="y" x="x"></VictoryBar>
              <VictoryBar data={data} y="y" x="x"></VictoryBar>
              <VictoryBar data={data} y="y" x="x"></VictoryBar>
            </VictoryGroup>
          </VictoryChart>
        </NativeBaseProvider>
      </native.Square>

      <native.Square
        mt='2'
        backgroundColor='lightblue'
        height='50'
        borderRadius='30'
        paddingRight='80%'
      >
        <InfoIcon ></InfoIcon>
        <native.Text
          position='absolute'
          fontSize='20'
          fontFamily='serif'
          fontWeight='bold'
        >Billing</native.Text>
      </native.Square>

      <native.Square
        mt='2'
        backgroundColor='lightblue'
        height='50'
        borderRadius='30'
        paddingRight='80%'
      >
        <InfoIcon ></InfoIcon>
        <native.Text
          position='absolute'
          fontSize='20'
          fontFamily='serif'
          fontWeight='bold'
        >Food</native.Text>
      </native.Square>

      <native.Square
        mt='2'
        backgroundColor='lightblue'
        height='50'
        borderRadius='30'
        paddingRight='80%'
      >
        <InfoIcon ></InfoIcon>
        <native.Text
          position='absolute'
          fontSize='20'
          fontFamily='serif'
          fontWeight='bold'
        >Vat</native.Text>
      </native.Square>

      <native.Square
        backgroundColor='white'
        position='absolute'
        bottom='0'
        height='50px'
        width='100%'
        borderTopLeftRadius='30'
        borderTopRightRadius='30'
      >
        <native.Square
          position='absolute'
          height='30'
          width='30'
          left='30'
        >
          <TouchableOpacity
          onPress={navigation.navigate('Home')}
          >
            <native.SearchIcon
            ></native.SearchIcon>
          </TouchableOpacity>
        </native.Square>

        <native.Square>
          <TouchableOpacity
          onPress={navigation.navigate('Home')}
          >
            <native.AddIcon
              height='30'
              width='30'

            ></native.AddIcon>
          </TouchableOpacity>
        </native.Square>

        <native.Square
          position='absolute'
          height='30'
          width='30'
          right='30'
        >
          <TouchableOpacity
          onPress={navigation.navigate('Home')}
          >
            <native.CloseIcon
            height='30'
            width='30'
            ></native.CloseIcon>
          </TouchableOpacity>
        </native.Square>

      </native.Square>
    </NativeBaseProvider>
  );
};

export default Home;

const styles=StyleSheet.create({
chart:{
  height: 200,
  borderColor:'black'
}
});
