import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Alert, Button, ActivityIndicator } from 'react-native';

var { width, height } = Dimensions.get('window');

var ScreenOverlay = () => {
    const [isVisible, setVisible] = useState(false)
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                Welcome to the React Native Playground!
                </Text>
            <Button title='Indicator' onPress={() => setVisible(true)}></Button>
            {isVisible ? <View style={[styles.overlay, { height: height }]} >
                <TouchableOpacity style={{ margin: 5, alignItems: 'flex-end', justifyContent: 'center' }}
                    onPress={() => Alert.alert('Hello')}>
                    <Text style={{ backgroundColor: '#fff', padding: 5, borderRadius: 10 }}>X</Text>
                </TouchableOpacity>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#F92205" />
                </View>
            </View> : null}
        </View>
    )
};

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    // Flex to fill, position absolute, 
    // Fixed left/top, and the width set to the window width
    overlay: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.5,
        backgroundColor: 'black',
        width: width,
    }
});

export default ScreenOverlay;