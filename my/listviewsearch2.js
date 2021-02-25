import React ,{Component} from 'react';
import {
  Text,
  View,
  TextInput,
  ListView,
  TouchableOpacity
}from 'react-native';

export default class listViewSearch extends Component <{}>{
	constructor(props){
		super(props)

    data = ['tran thanh tung', 'trinh cong son', 'nguyen ngoc thien', 'nguyen duc trung', 'pho duc phuong', 'nguyen van hien']
	
	const DS = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!== r2});
	this.state ={
			dataSource : DS.cloneWithRows(data),
      searchKey :'',
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

 _onPress(val){
  let skey = this.state.searchKey;
  let dataSearch =data.filter((item)=>{
     if(item.indexOf(skey) >= 0){
      return item; 
     }    
  });

  this.setState({
    dataSource :this.state.dataSource.cloneWithRows(dataSearch),
  })
 }

_onChangeText(val){
  if(val == ""){
    this.setState({
    dataSource :this.state.dataSource.cloneWithRows(data),
  })
  }
  this.setState({searchKey:val,});
}

	render(){
		return(
               <View style={{flex:1}}>
                 
                 <View style={{flex:1}}>
                   <Text> List View Search </Text>
                   <TextInput onChangeText={this._onChangeText.bind(this)} placeholder="input your name" />
                  <View style={{alignItems:'center'}}>
                     <TouchableOpacity onPress={this._onPress.bind(this)} style={{backgroundColor:"red",justifyContent: 'center',width:70, height:30, borderRadius: 3, }}>
                  	   <Text style={{textAlign: 'center', color:'#fff'}}> Search  </Text>
                     </TouchableOpacity>
                  </View>
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