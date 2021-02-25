import React, { Component } from 'react';
import {
	View,
	Text,
	ListView
} from 'react-native';

export default class ListViewGrid extends Component<{}>{
	constructor(props) {
		super(props)

		data = [];
		for (let i = 1; i <= 60; i++) {
			data.push(i)
		}

		const DS = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

		this.state = {
			dataSource: DS.cloneWithRows(data),
		}
	}

	_onPress(value) {
		alert(value);
	}

	_renderRow(value) {
		return (
			<View style={{ alignItems: 'center', justifyContent: 'center', height: 50, width: 50, backgroundColor: '#4d90fe', margin: 5 }}>
				<Text onPress={this._onPress.bind(this)} style={{ fontSize: 12 }}>{value} </Text>
			</View>
		);
	}
	render() {
		return (
			<View>
				<View>
					<Text> list View show Grid </Text>
				</View>
				<View>
					<ListView
						dataSource={this.state.dataSource}
						renderRow={this._renderRow.bind(this)}
						// them 2 phan duoi chuyen list view thanh grid view 
						pageSize={data.length}
						contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}
					/>
				</View>
			</View>
		);
	}
}