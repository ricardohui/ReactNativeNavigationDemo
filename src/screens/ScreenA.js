import React from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { Navigation } from "react-native-navigation";
export default class ScreenA extends React.Component {
  onClickPush = async () => {
    await Navigation.push(this.props.componentId, {
      component: {
        name: "navigation.playground.PushedScreen"
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Screen A</Text>
        <Text style={styles.welcome}> {this.props.text}</Text>
        <Button title="Push" onPress={this.onClickPush} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
