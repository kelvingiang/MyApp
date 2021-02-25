  import React, {Component} from 'react';
import {
    Text,
    View,
    TextInput,
    ListView
} from 'react-native';

export default class listViewData extends Component <{}>{
	constructor(props){
		super(props);

		// chuan bi data cho list view
	    data =['nguyen van a', 'ly van b', 'tran van c', 'luu thi d', 'nguyen thi f', 'quan thi g'];
        // dua data vao list view     
	    const DS = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2});
	    
	    this.state ={
	    	dataSource : DS.cloneWithRows(data),
	    	addData : ""
	    }


	}

   _renderRow(dataSource){
   	return(
           <Text style={{color:'#fff', marginLeft:5}}>{dataSource}</Text>
   		);
   }

   _renderSeparator(sestionID, rowID, row){
   		return(
   			<View key={sestionID +'-' +rowID} style={{height:1, backgroundColor:'rgba(0,0,0,0.2)'}}> 
   			</View>
   	)
   }

   _onPress(){
   	let name = this.state.addData;
   	if(name !==""){
   		data.push(name);
   		this.setState({dataSource:this.state.dataSource.cloneWithRows(data)});
    }else{
    	alert('du lieu rong');
    }
   }

	render(){
		return(
             <View style={{flex : 1,}}>
                <View style={{flex:1,}}>
                  <TextInput onChangeText={(value)=>this.setState({addData:value})} placeholder="input your name" />
                  <View style={{alignItems:'center'}}>
                  	<Text style={{backgroundColor:"red",textAlign: 'center',textAlignVertical: 'center', width:70, height:30, borderRadius: 3, }} onPress={this._onPress.bind(this)}> Add  </Text>
                  </View>
                </View>
              	<View style={{flex : 2, backgroundColor: "#666"}}>  
                	<View style={{alignItems :'center',justifyContent: 'center', height:30, backgroundColor:'#4d90fe'}}>
                		<Text style={{fontSize:16, color:'#fff'}}> show list View data  </Text>
                	</View>
                	<ListView
	                 // dua data va list view
	                   dataSource={this.state.dataSource}
	                 // show data list view ra ngoai
	                   renderRow ={this._renderRow.bind(this)}
	                 // them hieu ung cho tung row
	                   renderSeparator ={this._renderSeparator.bind(this)}
	                />
                </View>
             </View>
			);
	}
}