import React, { useEffect } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Animated,
    Image,
    Easing
} from 'react-native'

const timing = 4000;

const ButtonScreen = (props) => {
    const spinValue = new Animated.Value(0);

    useEffect(() => {
        spin();
    }, [])

    const spin = () => {
        spinValue.setValue(0)
        Animated.timing(
            spinValue,
            {
                toValue: 1,
                duration: timing,
                easing: Easing.linear,
                useNativeDriver: true
            }
        ).start();
    }

    const spinTransform = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    return (
        <View style={styles.container}>
            <Animated.Image
                style={{ width: 227, height: 200, transform: [{ rotate: spinTransform }] }}
                source={{ uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png' }} />
        </View>
    )
}

export default ButtonScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})