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
      this.setState({ count: this.state.count + 1 });
      if (this.state.count % 2 == 0) {
        this.hideSideMenu("left");
      } else {
        this.showSideMenu("left");
      }
    }
  }
  showSideMenu(side) {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        [side]: {
          visible: true
        }
      }
    });
    this.setState({ isDrawerOpen: true });
  }
  hideSideMenu(side) {
    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        [side]: {
          visible: false
        }
      }
    });
    this.setState({ isDrawerOpen: false });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Icon name={"settings-cell"} size={30} />
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Button
          title="Show Left Side Menu"
          onPress={() => this.showSideMenu("left")}
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
