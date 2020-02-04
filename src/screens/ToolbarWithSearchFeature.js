import React, { useState, useEffect } from 'react'
import { Dimensions, View, Text, TouchableOpacity, TextInput } from 'react-native'
import NetInfo from '@react-native-community/netinfo'
import styled from 'styled-components'
import Icons from 'react-native-vector-icons/FontAwesome'

const MainView = styled.View`
flex:1;
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

function ToolbarWithSearchFeature(props) {
    const [state, setState] = useState({
        isShowSearchbar: false,
    })

    return (
        <MainView>
            {state.isShowSearchbar ?
                <View style={{ height: 54, backgroundColor: 'green', flexDirection: 'row', alignItems: 'center' }}>
                    <Icons name="arrow-left" size={25} color='white' style={{ marginRight: 5 }} />
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
                        <TextInput placeholder='Search' />
                        <TouchableOpacity onPress={() => setState({ ...state, isShowSearchbar: false })}>
                            <Icons name="times" size={25} color='white' />
                        </TouchableOpacity>
                    </View>
                </View>
                : <View style={{ height: 54, backgroundColor: 'rgba(52, 52, 52, 0.5)', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                        <Icons name="arrow-left" size={25} color='white' />
                        <Text style={{ fontWeight: 'bold', marginLeft: 5 }}>MENUS</Text>
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => setState({ ...state, isShowSearchbar: true })}>
                            <Icons name="search" size={25} color='white' style={{ marginRight: 5 }} />
                        </TouchableOpacity>
                        <Icons name="bell" size={25} color='white' />
                    </View>
                </View>
            }
            <CardView style={{ backgroundColor: 'green' }}>
                <TextView>Hello, Rahul Nainwal</TextView>
            </CardView>
        </MainView >
    )
}

export default ToolbarWithSearchFeature
