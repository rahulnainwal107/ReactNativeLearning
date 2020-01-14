import React from 'react';
import { View, Image, } from 'react-native';
import birdPic from '../Images/logo5.jpg'
import newBirdPic from '../Images/logo6.jpg'
export default ImageViewComponent = (props) => {
    return (
        // <Image source={birdPic} style={{ height: null, width: null, resizeMode: 'cover',flex:1 }} />
        // <View style={{ height: 200, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
        //     <Image source={birdPic} style={{ width:'100%' }} resizeMode='contain' />
        // </View>
        <View style={{ height: 200, backgroundColor: 'green' }}>
            <Image source={newBirdPic} style={{ height: null, width: null, flex: 1 }} resizeMode='stretch' />
        </View>
    )
}