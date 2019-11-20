import React from 'react'
import { View, Text, Button } from 'react-native'
function ButtonScreen(props) {
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
    const BarChart = () => {
        props.navigation.navigate('BarChart');
    }
    const floatingButton = () => {
        props.navigation.navigate('FloatingButton');
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
    return (
        <View>
            <Button title="Tab Screen" onPress={tabNavigator}></Button>
            <Button title="User Experience" onPress={userExperience}></Button>
            <Button title="Custom Activity Indicator" onPress={customActivityIndicator}></Button>
            <Button title="Screen Overlay" onPress={screenOverlay}></Button>
            <Button title="Archive On Cloud Screen" onPress={archiveOnCloudScreen}></Button>
            <Button title="Section List" onPress={sectionListExample}></Button>
            <Button title="Bar Chart" onPress={BarChart}></Button>
            <Button title="Floating Button" onPress={floatingButton}></Button>
            <Button title="Animated View" onPress={animatedView}></Button>
            <Button title="Show Hide View On Scroll" onPress={showHideViewOnScroll}></Button>
            <Button title="Floating Action Button" onPress={floatingActionButton}></Button>
        </View>
    )
}
export default ButtonScreen;