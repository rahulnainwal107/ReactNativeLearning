import React from 'react';
import { View, Text, CheckBox, Image } from 'react-native';
import Slider from '@react-native-community/slider';
const SliderScreen = (props) => {
    return (
        <View>
            <Slider
                style={{ height: 100, width: '100%' }}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor="#080808"
                maximumTrackTintColor="#FF4933"
            />
            <View style={{ flexDirection: 'row' }}>
                <CheckBox
                    value={true}
                //onValueChange={() => this.setState({ checked: !this.state.checked })}
                />
                <Text style={{ marginTop: 5 }}> this is checkbox</Text>
                <Image
                    style={{ width: 50, height: 50 }}
                    source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }}
                />
            </View>
        </View>
    )
}
export default SliderScreen;