/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
//import MyStyle from '../style/my_style';
//import Preson from '../components/preson';
//import Navigation from '../page/main';

export default class TestComponent extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <View >
            <View>
               <Text> this is test </Text>
            </View>
            <View>
               <Text>sdfafa</Text>
            </View>
         </View>
      );
   }
}
