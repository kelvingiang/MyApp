import React ,{Component} from 'react';
import {
  Text,
  View,
  TextInput,
  ListView
}from 'react-native';

export default class listViewSearch extends Component <{}>{
	constructor(props){
		super(props)

    data = ['tran thanh tung', 'trinh cong son', 'nguyen ngoc thien', 'nguyen duc trung', 'pho duc phuong', 'nguyen van hien']
	
	const DS = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!== r2});
	this.state ={
			dataSource : DS.cloneWithRows(data),
		}
	}

   _renderRow(val){
       return(
            <View style={{ height:30,justifyContent: 'center'}}>
             <Text style={{marginLeft:15,}} > {val} </Text> 
            </View>
       	);
   }

   _renderSeparator(sestionID, rowID, row){
   		return(
   			<View key={sestionID +'-' +rowID} style={{height:1, backgroundColor:'rgba(0,0,0,0.2)'}}> 
   			</View>
   	)
   }



_onChangeText(val){
// tim data theo yeu cau nhap vao
  let dataSearch =data.filter((item)=>{
     if(item.indexOf(val) >= 0){
     	return item; 
     }  	
  });
// do lai data moi vao datasoucr cua list view  
  this.setState({
  	dataSource :this.state.dataSource.cloneWithRows(dataSearch),
  })
}

	render(){
		return(
               <View style={{flex:1}}>
                 
                 <View style={{flex:1}}>
                   <Text> List View Search </Text>
                   <TextInput onChangeText={this._onChangeText.bind(this)} placeholder="input your want to search word" />
                 </View>
                 
                 <View style={{flex:2}}>
                   <ListView
                      dataSource ={this.state.dataSource}
                      renderRow  ={this._renderRow.bind(this)}
                      renderSeparator ={this._renderSeparator.bind(this)}
                    />
                 </View>  
               </View>
			);
	}
}