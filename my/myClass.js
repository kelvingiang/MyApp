import React, {Component} from 'react';
import {
	Text, 
	View,
	StyleSheet
} from 'react-native';

import {MyComponentOne, myFunction} from './myComponent';
import {nhanvien} from './exportClass';

export default class MyClassExport extends Component{
	constructor(props){
		super(props);

		Nhanvien = new nhanvien();
	};

	render(){
		return(
             <View style={{flex :1, backgroundColor :'#666', justifyContent: 'center',	alignItems:'center'}}>
                <View>
                	<Text style={{color: '#FFF', fontSize :18}}>{'this is my class to export'}</Text>
                </View>
                <View>
                   <MyComponentOne/>
                </View>
                <View>
                    <Text style={{color:'blue'}} onPress={()=> myFunction()}> Click Me </Text>
                </View>
                <View  style={{borderTopColor: '#FFF',   borderTopWidth: StyleSheet.hairlineWidth,}}>
                    <Text> các thông tin được lấy từ Class import vào </Text>
                    <Text> Mã Nhân viên  : {Nhanvien.manv} </Text>
                    <Text> Tên Nhân viên : {Nhanvien.tennv} </Text>
                    <Text> {Nhanvien.getnv()} </Text>
                </View>
             </View>  

			);
	};
};