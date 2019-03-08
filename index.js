/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { Navigation } from "react-native-navigation";
import App from "./src/App";
import ScreenA from "./src/screens/ScreenA";
import Icon from "react-native-vector-icons/MaterialIcons";
Navigation.registerComponent(`navigation.playground.TextScreen`, () => App);
Navigation.registerComponent(`navigation.playground.ScreenA`, () => ScreenA);
Navigation.events().registerAppLaunchedListener(async () => {
  const sources = await Promise.all([
    Icon.getImageSource("call-split", 30),
    Icon.getImageSource("add", 30),
    Icon.getImageSource("menu", 30)
  ]);

  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            component: {
              name: "navigation.playground.TextScreen",
              passProps: {
                text: "This is tab 1",
                myFunction: () => "Hello from a function!"
              },
              options: {
                bottomTab: {
                  text: "Tab 1",
                  icon: sources[0]
                }
              }
            }
          },
          {
            component: {
              name: "navigation.playground.ScreenA",
              passProps: {
                text: "This is tab 2"
              },
              options: {
                bottomTab: {
                  text: "Tab 2",
                  icon: sources[1]
                }
              }
            }
          }
        ]
      }
    }
  });
});
