import React, {Component} from 'react';
import {
	StyleSheet
} from 'react-native';

const Styles = StyleSheet.create({
	mainBg :{
		justifyContent: 'center',
		alignItems:'center',
		flex : 1,
		width : null,
		height : null,
	},

	logo :{
		width: 120,
		height: 120,
		resizeMode : 'stretch',
	},
     
    icon :{
    	width :16,
    	height : 16,
    	resizeMode : 'stretch',
    },

    iconText :{
    	color : '#fff',
    	margin : 5,
    },

	container :{
		flex : 1,
		//backgroundColor : '#FFF',
		justifyContent: 'center',
		alignItems:'center',
	},

	view_logo :{
		flex : 3,
		justifyContent: 'center',
		alignItems:'center',
	},

	view_form :{
		flex : 3
	},

	view_footer :{
		flex :1,
		flexDirection:'row',
	},

    row :{
    	flexDirection :'row',
    },

    iconSpace:{
    	margin:5,
    	backgroundColor :'rgba(0,0,0,0.8)',
    	alignItems :'center',
    	height : 30,
        padding :5,
        borderRadius : 5,
    },

	containerDisplay :{
		flex : 2,
		backgroundColor : '#666',
		alignSelf: 'stretch',
	},

     

	containerInput :{
		flex : 8,
		backgroundColor : "#999",
		alignSelf: 'stretch',
	},

	inputRow :{
		flex : 1,
		flexDirection: 'row',

	},
	inputCell :{
		flex:1,
		padding :20,
		backgroundColor: "#00FF33",
		borderWidth:1,
		borderColor: "#FFF",
		justifyContent: 'center',
		alignItems:'center',
		borderRadius: 3,
		margin : 1,

	},

	inputText:{
		color : '#FFF',
		fontSize : 30,
		fontWeight : '900',
	},

	inputStyle :{
		width: 250,
		height :40,
		borderRadius: 3, 
		backgroundColor : 'rgba(0,0,0,0.8)',
		marginBottom : 2,
		borderWidth: 0,
		color : '#fff',

		//borderColor: '#999'
	},



	btnStyle :{
		textAlign: 'center',
		textAlignVertical: 'center',
		backgroundColor: '#03117d',
		height:40,
		borderRadius: 3, 
		color: '#fff',
		borderWidth: 0,
		borderColor: '#d6d7da',
		fontSize: 18,
		fontWeight :'bold',

	},

	touch_style :{
		borderRadius: 3, 
	},

	view_1 :{
		width:100,
		height : 100,
		backgroundColor : '#333',
		zIndex : 3,
		margin : 3,
		borderRadius: 3, 
	},

	view_2 :{
		width:100,
		height : 100,
		backgroundColor : '#666',
		zIndex : 2,
		margin : 3,
		borderRadius: 3, 
		justifyContent: 'center',
		alignItems:'center',
	},

	view_3 :{
		width:100,
		height : 100,
		backgroundColor : '#999',
		zIndex : 1,
		margin : 3,
		borderRadius: 3, 
	},

	textContent :{
		fontSize : 10,
		color : '#999',
	},

    titleText :{
    	color : '#666',
    	fontSize : 20,
    	fontStyle : 'italic',
    },

});

export default Styles;