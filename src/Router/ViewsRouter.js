import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import TabNavigator from './TabNavigator'
import UserExperience from '../screens/UserExperience'
import ButtonScreen from './ButtonScreen'
import AcitvityIndicatorWithCancel from '../screens/ACtivityIndicatorWithCancel'
import ScreenOverlay from '../screens/ScreenOverlay'

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
    }
}, {
    initialRouteName: 'ButtonScreen',
    defaultNavigationOptions: {
        title: 'App Stack'
    }
})
export default createAppContainer(AppStack)