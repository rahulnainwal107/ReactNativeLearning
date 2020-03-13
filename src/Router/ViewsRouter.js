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
import DrawerNavigation from '../screens/DrawerNavigation';
import AnimatedView from '../screens/AnimatedView';
import ShowHideViewOnScroll from '../screens/ShowHideViewOnScroll';
import FloatingActionButton from '../screens/FloatingActionButton';
import ReactNativeCollapsible from '../screens/ReactNativeCollapsible';
import ReactNativeCollapsible1 from '../screens/ReactNativeCollapsible1';
import PaymentModal from '../screens/PaymentModal';
import CreditCardInput from '../screens/CreditCardInput';
import CardInput from '../screens/CardInput';
import SliderScreen from '../screens/SliderScreen';
import customeSignInScreen from '../screens/ImageInBackground';
import ImageViewComponent from '../screens/ImageViewComponent';
import NetInfoSubscription from '../screens/NetInfoSubscription';
import ToolbarWithSearchFeature from '../screens/ToolbarWithSearchFeature';
import FastImageLoading from '../screens/FastImageLoading';
import ToolbarUsingMaterialUI from '../screens/ToolbarUsingMaterialUI';

const AppStack = createStackNavigator({
    ButtonScreen: {
        screen: ButtonScreen,
        navigationOptions: {
            header: null
        }
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
    DrawerNavigation: {
        screen: DrawerNavigation
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
    },
    PaymentModal: {
        screen: PaymentModal
    },
    CreditCardInput: {
        screen: CreditCardInput
    },
    CardInput: {
        screen: CardInput
    },
    SliderScreen: {
        screen: SliderScreen
    },
    customeSignInScreen: {
        screen: customeSignInScreen
    },
    ImageViewComponent: {
        screen: ImageViewComponent
    },
    NetInfoSubscription: {
        screen: NetInfoSubscription
    },
    ToolbarWithSearchFeature: {
        screen: ToolbarWithSearchFeature,
        navigationOptions: {
            header: null
        }
    },
    FastImageLoading: {
        screen: FastImageLoading
    },
    ToolbarUsingMaterialUI: {
        screen: ToolbarUsingMaterialUI
    }
}, {
    initialRouteName: 'ButtonScreen',
    defaultNavigationOptions: {
        title: 'App Stack'
    }
})
export default createAppContainer(AppStack)