import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import ArchiveOnCloudScreen from '../screens/ArchiveOnCloudScreen';
import ArchiveOnCloudChartScreen from '../screens/ArchiveOnCloudChartScreen';
import ArchiveOnCloudRecentBackupScreen from '../screens/ArchiveOnCloudRecentBackupScreen';

const TopNavigator = createBottomTabNavigator({
    ArchiveOnCloudScreen: {
        screen: ArchiveOnCloudScreen,
        navigationOptions: {
            tabBarLabel: 'Dashboard',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="tachometer" size={25} color={tintColor} />
            )
        }
    },
    ArchiveOnCloudChartScreen: {
        screen: ArchiveOnCloudChartScreen,
        navigationOptions: {
            tabBarLabel: 'Backup Chart',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="bar-chart" size={25} color={tintColor} />
            )
        }
    },
    ArchiveOnCloudRecentBackupScreen: {
        screen: ArchiveOnCloudRecentBackupScreen,
        navigationOptions: {
            tabBarLabel: 'Recent Backup',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="database" size={25} color={tintColor} />
            )
        }
    }
}, {
    order: ['ArchiveOnCloudScreen', 'ArchiveOnCloudChartScreen', 'ArchiveOnCloudRecentBackupScreen'],
    lazy: true,
    tabBarOptions: {
        activeTintColor: '#000000',
        inactiveTintColor: '#ffffff',
        // labelStyle: {
        //     fontSize: 14,
        //     fontWeight: 'bold',
        // },
        style: {
            backgroundColor: '#ff8c1a'
        },
    }
})
export default ArchiveOnCloudTopNavigator = createAppContainer(TopNavigator);