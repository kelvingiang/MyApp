import React, {Component} from 'react';
import {
	Text, 
	View
} from 'react-native';

export class MyComponentOne extends Component{
	constructor(props){
		super(props);
	}; 

	render(){
		return(
             <View>
                <Text style={{color:'#999'}}> This is my Component export from MyComponentOne class in MyComponent file </Text>
             </View>

			);
	};
}

export function myFunction(){
	alert('myfunction export form myComponent file !');
}	