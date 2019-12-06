import React from "react";
import { Dimensions } from "react-native";
import { createDrawerNavigator, createAppContainer } from "react-navigation";

import SideMenu from "./Components/sidebar/SideMenu";
import stacker from "./Components/stacker";

const App = createDrawerNavigator(
  { Item1: { screen: stacker } },
  {
    // Name of the component/view
    contentComponent: SideMenu,
    // This is the width of the sidebar
    drawerWidth: Dimensions.get("window").width - 180
  }
);

export default createAppContainer(App)