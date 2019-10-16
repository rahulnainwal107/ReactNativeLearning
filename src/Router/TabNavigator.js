import React, { Fragment } from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import FirebaseNotification from '../screens/FirebaseNotification';
import ActivityIndicatorComponent from '../screens/ActivityIndicatorComponent';
import NetInfoCheck from '../screens/NetInfoCheck';
import NetInfoUsingFunctionalComponent from '../screens/NetInfoUsingFunctionalComponent';

export default class App extends React.Component {
    render() {
        return (
            <AppContainer />
        );
    }
}
const TopTabNavigation = createMaterialTopTabNavigator({
    FirebaseNotification: {
        screen: FirebaseNotification,
        navigationOptions: {
            title: 'Firebase Notification'
        }
    },
    ActivityIndicatorComponent: {
        screen: ActivityIndicatorComponent,
        navigationOptions: {
            title: 'Activity Indicator'
        }
    },
    NetInfoCheck: {
        screen: NetInfoCheck,
        navigationOptions: {
            title: 'Net Info'
        }
    },
    NetInfoCheck1: {
        screen: NetInfoUsingFunctionalComponent,
        navigationOptions: {
            title: 'Net Info (FC)'
        }
    }
}, {
    lazy: true,
    tabBarOptions: {
        labelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
            color: 'black'
        },
        scrollEnabled: true,

        tabStyle: {
            // width: 100,
        },
        // style: {
        //   backgroundColor: 'blue',
        // },
    }
})
const AppContainer = createAppContainer(TopTabNavigation)
