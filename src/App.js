/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Platform, StyleSheet, Text, Button, View } from "react-native";

import { Navigation } from "react-native-navigation";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {
  state = { isDrawerOpen: false, count: 0 };
  constructor(props) {
    super(props);
    this.subscription = Navigation.events().bindComponent(this);
    const screenEventListener = Navigation.events().registerComponentDidAppearListener(
      ({ componentId, componentName }) => {
        console.log(`componentId: ${componentId}`);
        console.log(`componentName: ${componentName}`);
        if (componentName === "navigation.playground.SideMenuScreen") {
        }
      }
    );
  }

  componentWillUnmount() {
    console.log("RNN", `TBB.componentWillUnmount`);
    this.subscription.remove();
  }

  navigationButtonPressed({ buttonId }) {
    // will be called when "buttonOne" is clicked

    console.log(`${buttonId} is pressed.`);
    if (buttonId == "menuButton") {
      this.toggleSideMenu("left", this.state.count);
    }
  }

  toggleSideMenu(side, count) {
    let visible = false;
    if (count % 2 == 0) {
      visible = true;
    }
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        [side]: {
          visible
        }
      }
    });
    this.setState({ isDrawerOpen: visible, count: count + 1 });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Icon name={"settings-cell"} size={30} />
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Button
          title="Show Left Side Menu"
          onPress={() => this.toggleSideMenu("left", this.state.count)}
        />
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
