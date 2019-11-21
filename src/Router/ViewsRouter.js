import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import TabNavigator from './TabNavigator';
import UserExperience from '../screens/UserExperience';
import ButtonScreen from '../screens/ButtonScreen';
import AcitvityIndicatorWithCancel from '../screens/ACtivityIndicatorWithCancel';
import ScreenOverlay from '../screens/ScreenOverlay';
import ArchiveOnCloudScreen from '../Router/ArchiveOnCloudTopNavigator';
import SectionListExample from '../screens/SectionListExample';
import BarChart from '../screens/BarChartScreen';
import FloatingButton from '../screens/FloatingButton';
import AnimatedView from '../screens/AnimatedView';
import ShowHideViewOnScroll from '../screens/ShowHideViewOnScroll';
import FloatingActionButton from '../screens/FloatingActionButton';
import ReactNativeCollapsible from '../screens/ReactNativeCollapsible';
import ReactNativeCollapsible1 from '../screens/ReactNativeCollapsible1';

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
    },
    BarChart: {
        screen: BarChart
    },
    FloatingButton: {
        screen: FloatingButton
    },
    AnimatedView: {
        screen: AnimatedView
    },
    ShowHideViewOnScroll: {
        screen: ShowHideViewOnScroll
    },
    FloatingActionButton: {
        screen: FloatingActionButton
    },
    ReactNativeCollapsible: {
        screen: ReactNativeCollapsible
    },
    ReactNativeCollapsible1: {
        screen: ReactNativeCollapsible1
    }
}, {
    initialRouteName: 'ButtonScreen',
    defaultNavigationOptions: {
        title: 'App Stack'
    }
})
export default createAppContainer(AppStack)