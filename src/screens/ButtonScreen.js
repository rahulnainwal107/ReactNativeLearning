import React from 'react'
import { View, Text, Button } from 'react-native'

const ButtonScreen = (props) => {
    const tabNavigator = () => {
        props.navigation.navigate('TabNavigator');
    }
    const userExperience = () => {
        props.navigation.navigate('UserExperience');
    }
    const customActivityIndicator = () => {
        props.navigation.navigate('AcitvityIndicatorWithCancel');
    }
    const screenOverlay = () => {
        props.navigation.navigate('ScreenOverlay')
    }
    const archiveOnCloudScreen = () => {
        props.navigation.navigate('ArchiveOnCloudScreen');
    }
    const sectionListExample = () => {
        props.navigation.navigate('SectionListExample');
    }
    const barChart = () => {
        props.navigation.navigate('BarChart');
    }
    const floatingButton = () => {
        props.navigation.navigate('FloatingButton');
    }
    const drawerNavigation = () => {
        props.navigation.navigate('DrawerNavigation');
    }
    const animatedView = () => {
        props.navigation.navigate('AnimatedView');
    }
    const showHideViewOnScroll = () => {
        props.navigation.navigate('ShowHideViewOnScroll');
    }
    const floatingActionButton = () => {
        props.navigation.navigate('FloatingActionButton');
    }
    const reactNativeCollapsible = () => {
        props.navigation.navigate('ReactNativeCollapsible');
    }
    const reactNativeCollapsible1 = () => {
        props.navigation.navigate('ReactNativeCollapsible1');
    }
    const paymentModal = () => {
        props.navigation.navigate('PaymentModal');
    }
    const creditCardInput = () => {
        props.navigation.navigate('CreditCardInput');
    }
    const cardInput = () => {
        props.navigation.navigate('CardInput');
    }
    return (
        <View>
            <Button title="Tab Screen" onPress={tabNavigator}></Button>
            <Button title="User Experience" onPress={userExperience}></Button>
            <Button title="Custom Activity Indicator" onPress={customActivityIndicator}></Button>
            <Button title="Screen Overlay" onPress={screenOverlay}></Button>
            <Button title="Archive On Cloud Screen" onPress={archiveOnCloudScreen}></Button>
            <Button title="Section List" onPress={sectionListExample}></Button>
            <Button title="Bar Chart" onPress={barChart}></Button>
            <Button title="Floating Button" onPress={floatingButton}></Button>
            <Button title="Floating Button" onPress={drawerNavigation}></Button>
            <Button title="Animated View" onPress={animatedView}></Button>
            <Button title="Show Hide View On Scroll" onPress={showHideViewOnScroll}></Button>
            <Button title="Floating Action Button" onPress={floatingActionButton}></Button>
            <Button title="React Native Collapsible" onPress={reactNativeCollapsible}></Button>
            <Button title="React Native Collapsible1" onPress={reactNativeCollapsible1}></Button>
            <Button title="Payment Modal" onPress={paymentModal}></Button>
            <Button title="Credit Card Input" onPress={creditCardInput}></Button>
            <Button title="Credit Input" onPress={cardInput}></Button>
        </View>
    )
}
export default ButtonScreen;