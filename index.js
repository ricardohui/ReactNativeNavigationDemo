/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { Navigation } from "react-native-navigation";
import App from "./src/App";
import SideMenu from "./src/SideMenu";
import Icon from "react-native-vector-icons/MaterialIcons";
Navigation.registerComponent(`navigation.playground.WelcomeScreen`, () => App);
Navigation.registerComponent(
  `navigation.playground.SideMenuScreen`,
  () => SideMenu
);
Navigation.events().registerAppLaunchedListener(async () => {
  menuIcon = await Icon.getImageSource("menu", 30);
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: "navigation.playground.SideMenuScreen",
            passProps: {
              side: "left"
            }
          }
        },
        center: {
          stack: {
            options: {},
            children: [
              {
                component: {
                  name: "navigation.playground.WelcomeScreen",
                  options: {
                    layout: {},
                    topBar: {
                      leftButtons: [
                        {
                          id: "menuButton",
                          icon: menuIcon
                        }
                      ],
                      title: {
                        text: "Welcome to React Native!",
                        color: "#0000ff",
                        fontSize: 14
                      }
                    }
                  }
                }
              }
            ]
          }
        }
      }
    }
  });
});
