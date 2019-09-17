import React, { useState, useEffect } from 'react'
import { Dimensions, Platform } from 'react-native'
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
function NetInfoCheck() {
    const [check, setConnection] = useState({
        connected: 'false'
    })
    useEffect(() => {
        if (Platform.OS === 'android') {
            NetInfo.isConnected.fetch().then(isConnected => {
                if (isConnected) {
                    setConnection({ connected: 'true' })
                }
            })
        }
    }, [])
    return (
        <MainView>
            <CardView>
                <TextView>{check.connected}
                </TextView>
            </CardView>
        </MainView>
    )
}

export default NetInfoCheck
