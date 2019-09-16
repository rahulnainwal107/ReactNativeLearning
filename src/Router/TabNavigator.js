import React, { Fragment } from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import FirebaseNotification from '../screens/FirebaseNotification';
import ActivityIndicatorComponent from '../screens/ActivityIndicatorComponent';

export default class App extends React.Component {
    render() {
        return (
            <AppContainer />
        );
    }
}
const TopTabNavigation = createMaterialTopTabNavigator({
    FirebaseNotification: {
        screen: FirebaseNotification
    },
    ActivityIndicatorComponent: {
        screen: ActivityIndicatorComponent
    }
}, {
    lazy: true,
    tabBarOptions: {
        labelStyle: {
            fontSize: 16,
            fontWeight: 'bold'
        },
        // tabStyle: {
        //   width: 100,
        // },
        // style: {
        //   backgroundColor: 'blue',
        // },
    }
})
const AppContainer = createAppContainer(TopTabNavigation)
