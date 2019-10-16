import React, { useReducer } from 'react'
import { ActivityIndicator, View, Dimensions, Text, Modal, TouchableOpacity } from 'react-native'
import Styled from 'styled-components/native'
import { Header } from 'react-navigation-stack'

import ModalComponent from '../components/ModalComponent'

const MainView = Styled.View`
flex:1;
padding:10px 10px 10px 10px;
`
const CardView = Styled.View`
border-bottom-right-radius:20px;
border-color: #5DB5EB;
border-width: 1 ;
`
const TextView = Styled.Text`

`
const ButtonView = Styled.TouchableOpacity`
margin:5px 5px 5px 5px;
padding:5px 5px 5px 5px;
justify-content:center;
align-items:center;
border-color:black;
border-width:1px;
border-top-right-radius:5px;
border-top-left-radius:5px;
border-bottom-left-radius:5px;
border-bottom-right-radius:5px;
`
const inititalState = false;
const reducer = (state, action) => {
    switch (action) {
        case 'showIndicator':
            return true;
        case 'hideIndicator':
            return false;
        default:
            return state;
    }
}
function ActivityIndicatorComponent() {
    const [show3, dispatch3] = useReducer(reducer, inititalState);
    const handleModalClose = () => {
        dispatch3('hideIndicator');
    }
    return (
        <MainView style={{ backgroundColor: (show3 ? 'black' : null), opacity: (show3 ? 0.6 : 1) }}>
            <CardView >
                <View style={{ height: 50, backgroundColor: '#5DB5EB', alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                    < TextView style={{ fontSize: 18, fontWeight: 'bold' }}>ActivityIndicator in React Native</TextView >
                </View>
                <View style={{ padding: 20 }}>
                    <ButtonView onPress={() => dispatch3('showIndicator')}>
                        <TextView>Full Indicator</TextView>
                    </ButtonView>
                    <ButtonView onPress={() => dispatch3('hideIndicator')}>
                        <TextView>Cancle Full Indicator</TextView>
                    </ButtonView>
                </View>
            </CardView>
            <ModalComponent visible={show3} transparent={true} animationType="fade" onDismiss={handleModalClose} onRequestClose={handleModalClose} presentationStyle='overFullScreen' />
            {/* <Modal visible={show3} transparent={true} animationType="fade" onDismiss={() => dispatch3('hideIndicator')} onRequestClose={handleModalClose} presentationStyle='overFullScreen'>
                <TouchableOpacity style={{ alignItems: 'flex-end', padding: 10, margin: 10, }} onPress={() => dispatch3('hideIndicator')}>
                    <Text style={{ backgroundColor: 'black', color: 'white', elevation: 5, width: 20, height: 20, textAlign: 'center', borderRadius: 10 }}>X</Text>
                </TouchableOpacity>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#F92205" />
                </View>
            </Modal> */}
        </MainView >
    )
}

export default ActivityIndicatorComponent
