import React, { Fragment } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import TabNavigator from './TabNavigator';
import AppIntro from '../screens/AppIntro';

export default class App extends React.Component {
    render() {
        return (
            <AppContainer />
        );
    }
}
const StackNavigator = createStackNavigator({
    AppIntro: {
        screen: AppIntro
    },
    TabNavigator: {
        screen: TabNavigator
    }
}, {
    initialRouteName: 'AppIntro',
    defaultNavigationOptions: {
        header: null
    }
})
const AppContainer = createAppContainer(StackNavigator)
