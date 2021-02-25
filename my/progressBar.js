/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, ProgressBarAndroid, ActivityIndicator} from 'react-native';

export default class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {progress: 0};
    setInterval(() => {
      let progreing = (this.state.progress + 0.02) % 1;
      this.setState({progress: progreing});
    }, 50);
  }

  render() {
    return (
      <View>
        <View>
          <Text>Progress Bar Android </Text>
          <ProgressBarAndroid />
          <ProgressBarAndroid styleAttr="Horizontal" />
          <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" />
          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            progress={this.state.progress}
          />
        </View>

        <View>
          <Text> Activity Indicator </Text>
          <ActivityIndicator animating={true} color={'#999'} size={75} />
        </View>
      </View>
    );
  }
}
