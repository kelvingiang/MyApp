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
	    data =[
         {
          title : "tite de 1",
          content : "noi dung 1"
         },
         {
          title : "tite de 2",
          content : "noi dung 2"
         },
              {
          title : "tite de 3",
          content : "noi dung 3"
         },
         {
          title : "tite de 4",
          content : "noi dung 4"
         },
         {
          title : "tite de 5",
          content : "noi dung 5"
         },
         {
          title : "tite de 6",
          content : "noi dung 6"
         },
         {
          title : "tite de 7",
          content : "noi dung 7"
         },
         {
          title : "tite de 8",
          content : "noi dung 8"
         },
         {
          title : "tite de 9",
          content : "noi dung 9"
         },
        {
          title : "tite de 10",
          content : "noi dung 10"
         },


      ];
        // dua data vao list view     
	    const DS = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2});
	    
	    this.state ={
	    	dataSource : DS.cloneWithRows(data),
	    	addData : ""
	    }


	}

   _renderRow(dataSource){
   	return(
         <View>
           <Text style={{color:'#fff', marginLeft:5, fontSize:15}}>{dataSource.title}</Text>
           <Text style={{color:'#333', marginLeft:15, fontSize:10}}>{dataSource.content}</Text>
         </View>  
   		);
   }

   _renderSeparator(sestionID, rowID, row){
   		return(
   			<View key={sestionID +'-' +rowID} style={{height:1, backgroundColor:'rgba(0,0,0,0.2)'}}> 
   			</View>
   	)
   }

   

	render(){
		return(
             <View style={{flex : 1,}}>
              	<View style={{flex : 1, backgroundColor: "#666"}}>  
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