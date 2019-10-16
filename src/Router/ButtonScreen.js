import React from 'react'
import { View, Text, Button } from 'react-native'
function ButtonScreen(props) {
    return (
        <View>
            <Button title="Tab Screen" onPress={() => props.navigation.navigate('TabNavigator')}></Button>
            <Button title="User Experience" onPress={() => props.navigation.navigate('UserExperience')}></Button>
            <Button title="Custom Activity Indicator" onPress={() => props.navigation.navigate('AcitvityIndicatorWithCancel')}></Button>
            <Button title="Screen Overlay" onPress={() => props.navigation.navigate('ScreenOverlay')}></Button>
        </View>
    )
} 
export default ButtonScreen;