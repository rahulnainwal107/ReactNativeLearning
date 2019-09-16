import React, { useState, useReducer } from 'react'
import { ActivityIndicator, View } from 'react-native'
import Styled from 'styled-components/native'

const MainView = Styled.View`
padding:5px 5px 5px 5px;
justify-content:center;
align-items:center;
flex:1;
`
const CardView = Styled.View`
border-top-left-radius:20px;
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
    const [show1, dispatch1] = useReducer(reducer, inititalState);
    const [show2, dispatch2] = useReducer(reducer, inititalState);
    const [show3, dispatch3] = useReducer(reducer, inititalState);
    return (
        <MainView>
            <CardView >
                <View style={{ height: 50, backgroundColor: '#5DB5EB', alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                    < TextView style={{ fontSize: 24, fontWeight: 'bold' }}>ActivityIndicator in React Native</TextView >
                </View>
                <View style={{ padding: 20 }}>
                    <ButtonView onPress={() => dispatch1('showIndicator')}>
                        {show1 ? <ActivityIndicator size="small" color="#F92205" /> : <TextView>Button1</TextView>}
                    </ButtonView>
                    <ButtonView onPress={() => dispatch2('showIndicator')}>
                        {show2 ? <ActivityIndicator size="small" color="#040100" /> : <TextView>Button2</TextView>}
                    </ButtonView>
                    <ButtonView onPress={show1 ? () => dispatch1('hideIndicator') : () => dispatch2('hideIndicator')}>
                        <TextView>Cancle</TextView>
                    </ButtonView>
                    <ButtonView onPress={() => dispatch3('showIndicator')}>
                        <TextView>Full Indicator</TextView>
                    </ButtonView>
                    <ButtonView onPress={() => dispatch3('hideIndicator')}>
                        <TextView>Cancle Full Indicator</TextView>
                    </ButtonView>
                </View>
            </CardView>
            {show3 && <View style={{ position: 'absolute' }}>
                <ActivityIndicator size="large" color="#F92205" />
            </View>}
        </MainView >
    )
}

export default ActivityIndicatorComponent
