import React ,{Component} from 'react';
import {
  Text,
  View,
  WebView
}from 'react-native';

export default class MyWebView extends Component{
  constructor(props){
  	super(props)
  }

  render(){
  	return(
  		<View style={{flex :1}}>
         <View style={{flex:1, backgroundColor: "#000",	justifyContent: 'center', alignItems:'center',}}>
            <Text style={{color: '#fff', fontSize:20 }}> My Web View </Text>
         </View>
         <View style={{flex:5}}>
            <WebView
               source={{uri:"http://mp3.zing.vn/"}}
       
               javaScriptEnabled={true}
			   domStorageEnabled={true}	
			   startInLoadingState={true}
            />
         </View>
        </View>
  		)
  }

}