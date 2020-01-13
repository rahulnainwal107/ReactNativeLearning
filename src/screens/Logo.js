import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Image } from 'react-native';

//import logoImg from '../images/logoRN.png';

export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <Image source={logoImg} style={styles.image} /> */}
                <Text style={styles.text}>REACT NATIVE</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 80,
        height: 80,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginVertical: 10,
        fontSize: 20
    },
});