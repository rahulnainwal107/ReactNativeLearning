import React, { useState, useEffect } from 'react'
import { Alert, ActivityIndicator } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider'
import Styled from 'styled-components'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-community/async-storage'

const MainView = Styled.View`
flex: 1
`
const ImageView = Styled.Image`
`
const TitleView = Styled.View`
background-color:white;
margin-left: 20px;
margin-right: 20px;
margin-top: -30px;
border-radius: 1px;
`
const TextView = Styled.Text`
padding: 10px;
fontSize: 24px;
fontWeight: bold;
textAlign: center;
`
const ButtonView = Styled.View`
width: 30px;
height: 30px;
backgroundColor: black;
borderRadius: 15px;
justifyContent: center;
alignItems: center;
margin: 8px;
`

const slides = [
    {
        key: 'somethun',
        title: 'WELCOME TO THE THOMPSON HOTELS GUEST APP',
        text: 'You have the fun.\nWe\'ll take care of the rest.',
        image: require('../Images/welcome1.png'),
        backgroundColor: '#000000',
    },
    {
        key: 'somethun-dos',
        title: 'PLACE YOUR\nORDER',
        text: 'Browse the menu.\nReview special promotions.',
        image: require('../Images/welcome2.png'),
        backgroundColor: '#000000',
    },
    {
        key: 'somethun1',
        title: 'GET NOTIFICATION ON THE STATUS OF YOUR ORDER',
        text: 'Secure and simple mobile payment.',
        image: require('../Images/welcome3.png'),
        backgroundColor: '#000000',
    }
];


_renderItem = ({ item }) => {
    return (
        <MainView >
            <ImageView style={{
                flex: 0.2,
                width: null,
                height: null,
                flexDirection: 'row',
                resizeMode: 'cover'
            }} source={require('../Images/placeholder.png')} />
            <ImageView style={{
                flex: .4,
                width: null,
                height: null,
                flexDirection: 'row',
                marginTop: 10,
                resizeMode: 'cover'
            }} source={item.image} />
            <TitleView >
                <TextView style={{ fontSize: 24 }}>{item.title}</TextView>
                <TextView style={{ fontSize: 16 }}>{item.text}</TextView>
            </TitleView>
        </MainView>
    );
}
prevButton = () => {
    return (
        <ButtonView >
            <Ionicons
                name="md-arrow-round-back"
                color='white'
                size={20}
            />
        </ButtonView>
    )
}
nextButton = () => {
    return (
        <ButtonView >
            <Ionicons
                name="md-arrow-round-forward"
                color='white'
                size={20}
            />
        </ButtonView>
    )
}
doneButton = () => {
    return (
        <ButtonView style={{ backgroundColor: 'green' }}>
            <Ionicons
                name="md-checkmark"
                color='white'
                size={20}
            />
        </ButtonView>
    )
}
onDone = async (props) => {
    try {
        await AsyncStorage.setItem('FirstVisit', 'done');
        props.navigation.navigate('ViewRouter')
    } catch (error) {
        Alert.alert('Error during saving data in async storage !!');
    }
}
function AppIntro(props) {
    const [stateValue, setStateValue] = useState({
        showRealApp: false,
        loading: true
    })

    // The blow code throw an error like React Hook Warnings for async function in useEffect:
    // useEffect function must return a cleanup function or nothing

    // useEffect(async () => {
    //     try {
    //         const value = await AsyncStorage.getItem('FirstVisit');
    //         if (value === 'done') {
    //             setStateValue({ ...stateValue, loading: false })
    //             props.navigation.navigate('TabNavigator')
    //         }
    //         else {
    //             setStateValue({ ...stateValue, loading: false })
    //         }
    //     } catch (error) {
    //         Alert.alert('Error during getting data from async storage !!');
    //     }
    // }, [])

    useEffect(() => {
        customLogic = async () => {
            try {
                const value = await AsyncStorage.getItem('FirstVisit');
                if (value === 'done') {
                    setStateValue({ ...stateValue, loading: false })
                    props.navigation.navigate('ViewRouter')
                }
                else {
                    setStateValue({ ...stateValue, loading: false })
                }
            } catch (error) {
                Alert.alert('Error during getting data from async storage !!');
            }
        }
        customLogic();
    }, [])

    if (stateValue.loading) return <ActivityIndicator size="large" />

    //If false show the Intro Slides
    else {
        //Real Application
        return (
            <AppIntroSlider
                slides={slides}
                showPrevButton={true}
                showSkipButton={true}
                renderItem={this._renderItem}
                renderPrevButton={this.prevButton}
                renderNextButton={this.nextButton}
                renderDoneButton={this.doneButton}
                onDone={() => this.onDone(props)}
                onSkip={() => this.onDone(props)}
                style={{ backgroundColor: 'white' }}
                activeDotStyle={{ backgroundColor: 'rgba(0, 0, 0, 1)', }}
                dotStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                buttonTextStyle={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}
            />
        );
    }
}
export default AppIntro
