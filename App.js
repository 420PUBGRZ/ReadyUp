import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Sound } from 'react-native-sound';
export default class App extends React.Component {

  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Darion Freeman is a fucking legend</Text>
        <Image
           style={{width: 200, height: 200}}
          source={{uri: 'https://ih1.redbubble.net/image.242491557.6081/pp,550x550.jpg'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
