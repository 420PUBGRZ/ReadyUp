import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Button
} from 'react-native';
const Sound = require('react-native-sound');
import TestScene from './Components/TestScene';

export default class App extends Component {

  constructor(props) {
    super(props)
  }

  _playSound() {
    const whoosh = new Sound('WHAT-THE-FUCK-IS-WRONG-WITH-YOU(mp3cut.net).mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
      whoosh.play((success) => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    });
  }

  nextSlide = () => {
    this.props.navigator.push({
      title: 'Fuck you kid',
      component: TestScene
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Darion Freeman is a fucking legend</Text>
        <TouchableHighlight
          onPress={this._playSound}>
        <Image
          style={{width: 200, height: 200}}
          source={{uri: 'https://ih1.redbubble.net/image.242491557.6081/pp,550x550.jpg'}} />
        </TouchableHighlight>
        <Button
          title='Press this faggot'
          onPress={this.nextSlide}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF'
  },
  instructions: {
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 5,
  },
});
