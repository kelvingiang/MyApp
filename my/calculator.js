import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	Image,
	TouchableHighlight,
}from 'react-native';

import Styles from '../style/mystyle';

const inputBtn =[
	['7','8','9','/'],
	['4','5','6','*'],
	['3','2','1','-'],
	['0','.','=','+']
]

export default class MyCalculator extends Component<{}>{
	constructor(props){
		super(props);
	};

	render(){
		return(
			<View style={Styles.container}> 			       	
				<View style={Styles.containerDisplay}>
					<Text> dap so {console.log("chua hien thi duoc dap so")}</Text>
				</View>
				<View style={Styles.containerInput}>
					{this._renderBtn()}
				</View>	    
			</View>
			);
	};

	_onPressButton(){}

	_renderBtn(){
		let views=[];
		for(let i=0; i<inputBtn.length; i++){
			let row=[];
			for(let j=0; j<inputBtn[i].length; j++){
				row.push(<TouchableHighlight underlayColor={"#0033FF"} style={Styles.inputCell} key={'cell' + j} onPress={this._onPressButton}>
					       <Text style={Styles.inputText}>{inputBtn[i][j]}</Text>
					     </TouchableHighlight>);
			}
			views.push(<View key={'row'+i} style={Styles.inputRow}>{row}</View>);
		}
		return views;
	}


}



