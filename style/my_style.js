import React, {Component} from 'react';
import {StyleSheet } from 'react-native';

const MyStyles = StyleSheet.create({
    
    textTitle :{
    	fontSize : 35,
    	color : 'blue',
    },

	textContent :{
		fontSize : 20,
		color : '#999',
	},

   	container :{
		flex : 1,
		backgroundColor : '#000',
	},

	view_1 :{
		flex : 1,
		backgroundColor : '#FFF',
		justifyContent: 'center',
		alignItems:'center',
	},

    view_2 :{
		flex : 2,
		backgroundColor : '#666',
		//justifyContent: 'center',
		//alignItems:'center',
	},

});

export default MyStyles;