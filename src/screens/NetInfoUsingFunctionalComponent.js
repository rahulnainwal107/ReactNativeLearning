import React, { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'
import NetInfo from '@react-native-community/netinfo'
import styled from 'styled-components'

const MainView = styled.View`
flex:1;
justify-content:center;
align-items:center;
`
const CardView = styled.View`
width:${Dimensions.get('window').width};
height:${Dimensions.get('window').width};
background-color:#5DB5EB;
border-radius:${Dimensions.get('window').width / 2}
justify-content:center;
align-items:center;
`
const TextView = styled.Text`

`

function NetInfoUsingFunctionalComponent() {
    const [check, setConnected] = useState({ isConnected: '' })
    useEffect(() => {
        NetInfo.isConnected.fetch().done((isConnected) => {
            if (isConnected == true) {
                setConnected({ isConnected: "Online" })
            }
            else {
                setConnected({ isConnected: "Offline" })
            }
        });

        NetInfo.isConnected.addEventListener(
            'connectionChange',
            this._handleConnectivityChange

        );
        return NetInfo.removeEventListener('connectionChange', this._handleConnectivityChange);
    }, [])
    _handleConnectivityChange = (isConnectionOk) => {
        if (isConnectionOk == true) {
            setConnected({ isConnected: "Online" })
            console.log("Online");
        }
        else {
            setConnected({ isConnected: "Offline" })
            console.log("Offline");
        }
    };
    return (
        <MainView>
            <CardView style={{ backgroundColor: check.isConnected === 'Online' ? 'green' : 'red' }}>
                <TextView>{check.isConnected}</TextView>
            </CardView>
        </MainView >
    )
}

export default NetInfoUsingFunctionalComponent
