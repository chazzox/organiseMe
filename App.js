import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import { Dimensions } from 'react-native';

import startUpStack from './Components/startup/startStack';
import SideMenu from './Components/sidebar/SideMenu';
import stacker from './Components/stacker';

const App = createDrawerNavigator(
    {
        startUpStack: {
            screen: startUpStack,
            navigationOptions: {
                drawerLockMode: 'locked-closed'
            }
        },
        loginStack: { screen: stacker }
    },
    {
        initialRouteName: 'startUpStack',
        // Name of the sideview
        contentComponent: SideMenu,
        // This is the width of the sidebar
        drawerWidth: Dimensions.get('window').width - 180
    }
);

export default createAppContainer(App);
