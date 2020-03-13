import React from 'react'
import { View, Text, Button, ScrollView } from 'react-native';


const ButtonScreen = (props) => {

    const timingAnimation = () => {
        props.navigation.navigate('AnimationUsingTiming');
    }

    return (
        <ScrollView>
            <Button title="Animation using timing" onPress={timingAnimation}></Button>
        </ScrollView>
    )
}
export default ButtonScreen;