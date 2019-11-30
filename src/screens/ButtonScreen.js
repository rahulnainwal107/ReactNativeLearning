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
    const barChart = () => {
        props.navigation.navigate('BarChart');
    }
    const floatingButton = () => {
        props.navigation.navigate('FloatingButton');
    }
    const drawerNavigation = ()=>{
        props.navigation.navigate('DrawerNavigation');
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
        </View>
    )
}
export default ButtonScreen;