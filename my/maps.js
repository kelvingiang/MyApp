import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import MapView from 'react-native-maps';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      position:{
           latitude: 10.753416,
           longitude:  106.730840,
           latitudeDelta: 0.008,
           longitudeDelta: 0.009,
      }
    }
  }

  render() {
    return (
     <View style={styles.container}>
        <MapView
         style={styles.map}
         region={this.state.position}
         //mapType= 'satellite'
        >
         <MapView.Marker
             coordinate ={this.state.position} 
             //title ="cty Digiwin"
             //description ="tân thuận quận 7 tphcm"
         >
           <MapView.Callout style={{width:120, height:150, paddingTop:2}}>
             <View style={{flex:1, justifyContent: 'center',alignItems:'center',}}>
               <Image source={require('../img/hoa.jpg')} style={{width:100, height:80, resizeMode:'cover'}}/>
               <Text style={{fontSize:10, color:'blue'}}> cty chuyen cung cap hoa</Text>
               <Text style={{fontSize:8, color:'black'}}> địa chỉ : 123 trần hưng đạo quận 1 tp-hcm</Text>
             </View>
           </MapView.Callout>
         </MapView.Marker>
        </MapView>
      </View>  
    );
  }
}


const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: 600,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});
