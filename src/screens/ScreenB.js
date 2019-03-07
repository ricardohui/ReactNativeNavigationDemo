import React from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { Navigation } from "react-native-navigation";
export default class ScreenB extends React.Component {
  onClickPop = async () => {
    await Navigation.pop(this.props.componentId);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Screen B</Text>
        <Button title="Pop" onPress={this.onClickPop} />
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
