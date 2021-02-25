import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Image,
}from 'react-native';

export default class MyFirst extends Component<{}>{
	constructor(props){
		super(props);
		this.state={
			FirstName :'',
			LastName : '',
			inputValue :'',
		}
		mytext = "this is my text heee co dc chua ban";

	};

    _onChangeTextFirstName(text){
    	this.setState({FirstName : text});
    };

    _onChangeTextLastName(text){
       this.setState({LastName : text});
    };

	 _onPress(){
  		let fname= this.state.FirstName;
  		let lname = this.state.LastName;
  		this.setState({inputValue: 'FirstName :' + fname + 'LastName :' + lname});
	};

	render() {
		return(
			<View style={Styles.container}>
				<Text>this is my First</Text>
				<View>
					<TextInput
					onChangeText ={this._onChangeTextFirstName.bind(this)}
					style ={Styles.input}
					underlineColorAndroid= {'rgba(0, 0, 0, 0)'}
					placeholder={'Fill Your FirstName '}
					placeholderTextColor={'#999'}
					windowSoftInputMode = {'adjustResize'}
					/>

					<TextInput
					onChangeText = {this._onChangeTextLastName.bind(this)}
					style ={Styles.input}
					underlineColorAndroid= {'rgba(0, 0, 0, 0)'}
					placeholder={'Fill Your LastName '}
					placeholderTextColor={'#999'}
					windowSoftInputMode = {'adjustResize'}
					/>
	            </View>
	            <View style={Styles.viewRow}>
		            <View style={Styles.view50}>
			            <Text style={Styles.btn}>
							Reset
						</Text>
		            </View>
					<View style={Styles.view50}>
			            <Text style={Styles.btn} onPress={this._onPress.bind(this)}>
							Submit
						</Text>
		            </View>
                </View>  

                <Text style={{color:'white', fontSize:15, fontWeight :'bold', marginLeft:20 }}>
                  {this.state.inputValue}
                </Text>
			   <Image source = {require('../img/ctcvnhcmc_logo.png')} />
			   <Image style={{width:60, height:40}} source = {require('../img/hoa.jpg')} />
			   <Image style={{width:60, height:60}} source = {require('../img/mindfuck.gif')} />
			</View>
			);
	}
}

const Styles =StyleSheet.create({
    viewRow : {
    	
        flexDirection:'row',

    },

    view50 : {
    	flex:1,
    	justifyContent: 'flex-start',
    	alignItems:'center',
    },

	btn : {
		color: 'white',
		backgroundColor: '#E87135',
		marginVertical:5,
		marginHorizontal:10,
		height : 50,
		width : 150,
		borderRadius : 3,
		borderWidth: 0.5,
  		borderColor: '#d6d7da',
  		fontSize: 20,
  		textAlign: 'center',
  		textAlignVertical: 'center',
	},

	input :{
		backgroundColor:'white',
		borderRadius: 3, 
		marginVertical:5,
		marginHorizontal:10,
		height:35,
	},

	container: {
		flex : 1,
		backgroundColor : 'gray',
	},
});
