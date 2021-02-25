import React,{Component} from 'react';
import {
View,
Text,
TextInput,
StyleSheet,
} from 'react-native';

export default class MyForm extends Component<{}>{
   	constructor(props){
		super(props);
         this.state ={
         	UserName :"",
         	Phone    :"",
         	value    :"",
         }
	};

  _getUser(text){
    this.setState({UserName:text,})
  }

  _getPhone(text){
    this.setState({Phone:text,})
  }

  _submit(){
  	let user = this.state.UserName;
  	let Phone = this.state.Phone;
    this.setState({value : user + '_____' + Phone});
  }
	render(){
		return(
			<View style={Styles.container}>
			   <View>
					<TextInput style={Styles.input} placeholder={"user name"} onChangeText={this._getUser.bind(this)} /> 
		  			<TextInput style={Styles.input} placeholder={"nhap dien thoai"} onChangeText={this._getPhone.bind(this)}/> 
		  		</View>
		  		<View style={{flexDirection:'row', 	alignItems:'center', }}>
		  		    <Text style={Styles.button}> Reset </Text>
		  		    <Text onPress={this._submit.bind(this)}  style={Styles.button}> Send </Text>
		  		</View>
		  		<View>
		  			<Text> {this.state.value} </Text>
		  		</View>
            </View>
			);
	}

}
const Styles = StyleSheet.create({
   	container :{
		flex : 1,
		backgroundColor : '#999999',
		justifyContent: 'center',
    	
	},

	input :{
		backgroundColor : '#FFFFFF',
		margin : 3,
	},

	button :{
		margin:10,
		padding :5,
      	backgroundColor : '#f2f2f2',
      	borderRadius :5,
	}

});