import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import MyStyle from '../style/my_style';

export default class Preson extends Component{
   constructor(props){
   		super(props);
      this.state={
        chieucao:0
      }	
   }

   lickMe(){
    this.setState({
       chieucao : 20

    });
   }

  render(){
  		return(
        <TouchableOpacity onPress={()=>this.lickMe()}>
            <View>
                <Text style={MyStyle.textContent}> {this.props.name} </Text>
                <Text> {this.state.chieucao} </Text>
            </View> 
        </TouchableOpacity>  
  			)
  }

}