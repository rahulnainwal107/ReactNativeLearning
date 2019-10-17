import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import TabNavigator from './TabNavigator';
import UserExperience from '../screens/UserExperience';
import ButtonScreen from '../screens/ButtonScreen';
import AcitvityIndicatorWithCancel from '../screens/ACtivityIndicatorWithCancel';
import ScreenOverlay from '../screens/ScreenOverlay';
import ArchiveOnCloudScreen from '../Router/ArchiveOnCloudTopNavigator';
import SectionListExample from '../screens/SectionListExample';

const AppStack = createStackNavigator({
    ButtonScreen: {
        screen: ButtonScreen
    },
    TabNavigator: {
        screen: TabNavigator
    },
    UserExperience: {
        screen: UserExperience
    },
    AcitvityIndicatorWithCancel: {
        screen: AcitvityIndicatorWithCancel
    },
    ScreenOverlay: {
        screen: ScreenOverlay
    },
    ArchiveOnCloudScreen: {
        screen: ArchiveOnCloudScreen,
        navigationOptions: {
            title: 'DASHBOARD',
            headerStyle: {
                backgroundColor: '#ff8c1a'
            }
        }
    },
    SectionListExample: {
        screen: SectionListExample
    }
}, {
    initialRouteName: 'ButtonScreen',
    defaultNavigationOptions: {
        title: 'App Stack'
    }
})
export default createAppContainer(AppStack)