/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Main = require('./App/Components/Main');

var {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View,
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  },
});

class notetaker extends React.Component{
  render() {
    return (
        <NavigatorIOS
          style = {styles.container}
          initialRoute = {{
            title: "Github NoteTaker",
            component: Main
          }} />
    );
  }
};



AppRegistry.registerComponent('notetaker', () => notetaker);
