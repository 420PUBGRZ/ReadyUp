import React from 'react';
import PropTypes from 'prop-types';
import { Button, NavigatorIOS, Text, View,   AppRegistry } from 'react-native';
import App from './App';
export default class NavigatorIOSApp extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: App,
          title: 'ReadyUp',
        }}
        style={{flex: 1}}
      />
    )
  }
}
AppRegistry.registerComponent('ReadyUp', () => NavigatorIOSApp);
