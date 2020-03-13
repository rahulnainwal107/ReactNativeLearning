import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import FastImage from 'react-native-fast-image'

//import logoImg from '../images/logoRN.png';

export default class FastImageLoading extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <Image source={logoImg} style={styles.image} /> */}
                <Text style={styles.text}>REACT NATIVE</Text>
                <FastImage
                    style={{ width: 200, height: 200 }}
                    source={{
                        uri: 'https://dev-locations-images.tabbieapp.co/516939a0-c299-446b-a483-83b175c09014/mast_header?v=1581000385684',
                        priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                />
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