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
    const sectionListExample=()=>{
        props.navigation.navigate('SectionListExample')
    }
    return (
        <View>
            <Button title="Tab Screen" onPress={tabNavigator}></Button>
            <Button title="User Experience" onPress={userExperience}></Button>
            <Button title="Custom Activity Indicator" onPress={customActivityIndicator}></Button>
            <Button title="Screen Overlay" onPress={screenOverlay}></Button>
            <Button title="Archive On Cloud Screen" onPress={archiveOnCloudScreen}></Button>
            <Button title="Section List" onPress={sectionListExample}></Button>
        </View>
    )
}
export default ButtonScreen;