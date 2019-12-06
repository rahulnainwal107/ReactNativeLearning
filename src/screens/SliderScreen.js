import React from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';
const SliderScreen = (props) => {
    return (
        <Slider
            style={{ height: 100, width: '100%' }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#080808"
            maximumTrackTintColor="#FF4933"
        />
    )
}
export default SliderScreen;