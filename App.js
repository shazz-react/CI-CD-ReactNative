/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Button} from 'react-native';
import Crashes from 'appcenter-crashes';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white', paddingTop: 40}}>
        <Button
          title="Crash"
          onPress={() => {
            Crashes.generateTestCrash();
          }}
        />
      </View>
    );
  }
}
