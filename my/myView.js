import React,{Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	TouchableOpacity,
}from  'react-native';

export default class MyView extends Component{
	constructor(props){
		super(props);

	};
	_onPressButton(text){
		alert('Touch Able Highlight');
	}

	_touchOpacity(text){
		alert('Touch Able Opacity');
	}

	render(){
		return( 
             <View style={Styles.container}>
             	<TouchableHighlight style={Styles.touch_style} underlayColor='#fff' onPress={this._onPressButton}>
                	<View style={Styles.view_1}></View>
             	</TouchableHighlight>

                <TouchableOpacity onPress ={this._touchOpacity}>
                	<View style={Styles.view_2}>
                		<Text style={Styles.textContent}> Touch Able Opacity </Text>
                	</View>
                </TouchableOpacity>

                <View style={Styles.view_3}></View>
             </View>
			);
	}
}

const Styles = StyleSheet.create({
	container :{
		flex : 1,
		backgroundColor : '#F4D5D5',
		justifyContent: 'center',
    	alignItems:'center',

	},

	touch_style :{
		borderRadius: 3, 
	},

	view_1 :{
		width:100,
		height : 100,
		backgroundColor : '#333',
		zIndex : 3,
	    margin : 3,
	    borderRadius: 3, 
	},

	view_2 :{
		width:100,
		height : 100,
		backgroundColor : '#666',
		zIndex : 2,
		margin : 3,
	    borderRadius: 3, 
		justifyContent: 'center',
    	alignItems:'center',
	},

	view_3 :{
		width:100,
		height : 100,
		backgroundColor : '#999',
		zIndex : 1,
		margin : 3,
	    borderRadius: 3, 
	},
    
    textContent :{
        fontSize : 10,
    	color : '#FFF',
    },


});