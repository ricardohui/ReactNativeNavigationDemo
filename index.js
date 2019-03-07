/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { Navigation } from "react-native-navigation";
import App from "./src/App";
import ScreenA from "./src/screens/ScreenA";
import ScreenB from "./src/screens/ScreenB";

Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);
Navigation.registerComponent(`navigation.playground.TextScreen`, () => ScreenA);
Navigation.registerComponent(
  `navigation.playground.PushedScreen`,
  () => ScreenB
);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        options: {
          topBar: {
            visible: true
          }
        },
        children: [
          {
            component: {
              name: "navigation.playground.TextScreen",
              passProps: {
                text: "This is tab 1",
                myFunction: () => "Hello from a function!"
              }
            }
          },
          {
            component: {
              name: "navigation.playground.TextScreen",
              passProps: {
                text: "This is tab 2"
              }
            }
          }
        ]
      }
    }
  });
});
