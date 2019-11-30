import React, { useState, useEffect } from 'react';
import { View, Text, Platform, Animated, StyleSheet, TouchableOpacity, Easing, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const AnimatedView = () => {
    const [state, setState] = useState({
        fadeValue: new Animated.Value(0),
        xValue: new Animated.Value(0)
    })
    const fadeAnimation = () => {
        Animated.timing(state.fadeValue, {
            toValue: 1,
            duration: 1000
        }).start();
    }
    const moveAnimation = () => {
        Animated.timing(state.xValue, {
            toValue: width - 250,
            duration: 1000,
            asing: Easing.back()
        }).start(() => {
            Animated.timing(state.xValue, {
                toValue: -250,
                duration: 1000,
                asing: Easing.linear
            }).start(() => {
                moveAnimation();
            });
        });
    }
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.animatedView, { opacity: state.fadeValue }]}>

            </Animated.View>
            <TouchableOpacity style={styles.button} onPress={fadeAnimation}>
                <Text style={styles.buttonText}>Animate</Text>
            </TouchableOpacity>
            <Animated.View style={[styles.animatedView, { backgroundColor: 'orange', left: state.xValue }]}>

            </Animated.View>
            <TouchableOpacity style={styles.button} onPress={moveAnimation}>
                <Text style={styles.buttonText}>Move Animate</Text>
            </TouchableOpacity>
        </View>
    )
}
export default AnimatedView;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    animatedView: {
        width: 100,
        height: 100,
        backgroundColor: 'skyblue'
    },
    button: {
        height: 45,
        marginTop: 20,
        backgroundColor: 'skyblue'
    },
    buttonText: {
        color: 'white',
        padding: 12,
        paddingHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 18
    }
})