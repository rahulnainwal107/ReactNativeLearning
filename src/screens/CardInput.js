import React, { useState } from 'react';
import {
    Text,
    FlatList,
    View,
    Animated,
    TouchableOpacity, Modal, TextInput
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import styled from 'styled-components';
import { RadioButton, Colors } from 'react-native-paper';
const MainView = styled.View`

`;
const TextView = styled.Text`
    padding:5px;
    `;
const InputText = styled.TextInput`
    margin:5px;
    border-radius: 2px;
    border-width: 1px;
    height: 40px;
    `;
const Button = styled.TouchableOpacity`
    height: 40px;
    margin:5px;
    border-radius: 2px;
    justify-content: center;
    align-items: center;
    background-color: black;
    `;
const MainCardView = styled.View`
    flex: 1;
    justifyContent: center;
    backgroundColor: rgba(52, 52, 52, 0.5);
    `;
const ContainerView = styled.View`
    justifyContent: center;
    backgroundColor: white;
    margin: 20px;
    padding: 10px;
    borderRadius: 2px;
    marginTop: 0px
    borderTopRightRadius: 0px;
    borderTopLeftRadius: 0px;
    `;
const HeaderView = styled.View`
margin: 20px;
padding: 10px;
borderRadius: 2px;
backgroundColor: black;
height: 60px;
marginBottom: 0px;
justifyContent: center;
alignItems: center;
flexDirection: row;
borderTopRightRadius: 2px;
borderTopLeftRadius: 2px;
`;
const HeaderTextView = styled.Text`
fontSize: 20px;
fontWeight: bold;
color: white;
flex: 1;
textAlign: center;
`;
const CloseButtonView = styled.View`
    alignItems:flex-end;
    justifyContent:center;
    `;
const CloseButton = styled.TouchableOpacity`
    justifyContent:center;
    alignItems:center;
    width:30px;
    height:30px;
    borderRadius:15px;
    elevation:1px;
    shadowOpacity:1px;
    borderWidth:1px;
    borderColor:white;
    `;
const MainCardItemView = styled.View`
    flex-direction:row;
    align-items:center;
    margin:5px;
    padding:5px;
    elevation:1px;
    shadowOpacity:1px;
    height:50px;
    borderRadius:2px;
    backgroundColor:#d4d0cf;
    `;
const FlatListView = styled.View`
    `;
const RadioButtonView = styled.View`
    flex:0.1;
    padding:5px;
    justifyContent:center;
    alignItems:center;
    `;
const CardTypeView = styled.View`
    flex:0.2
    justifyContent:center;
    alignItems:center;
    width:40px;
    height:40px;
    `;
const CardNumberView = styled.View`
    flex:0.7
    justifyContent:center;
    `;
const CardNumberTextView = styled.Text`
    padding:5px;
    fontWeight:bold;
    `;
const Image = styled.Image`
    height:30px;
    width:40px;
    `;
const CardNumberAndIconWrapperView = styled.View`
flexDirection: row;
height: 40px;
borderWidth: 1px;
borderRadius: 2px;
margin: 5px;
alignItems: center;
    `;
const WrapperTextInput = styled.TextInput`
flex: 1;
    `;
const WrapperIconContainerView = styled.View`
    padding: 5px;
    `;
const WrapperIconView = styled.Image`
height: 25px;
width: 35px;
    `;
const savedCard = [{
    id: 1,
    cardNumber: 2323223223344547,
    cardType: require('../icons/stp_card_visa.png'),
    default: true
},
{
    id: 2,
    cardNumber: 2323223223344547,
    cardType: require('../icons/stp_card_mastercard.png'),
    default: false
},
{
    id: 3,
    cardNumber: 2323223223344547,
    cardType: require('../icons/stp_card_jcb.png'),
    default: false
},
{
    id: 4,
    cardNumber: 2323223223344547,
    cardType: require('../icons/stp_card_discover.png'),
    default: false
},
{
    id: 5,
    cardNumber: 2323223223344547,
    cardType: require('../icons/stp_card_visa.png'),
    default: true
},
{
    id: 6,
    cardNumber: 2323223223344547,
    cardType: require('../icons/stp_card_mastercard.png'),
    default: false
},
{
    id: 7,
    cardNumber: 2323223223344547,
    cardType: require('../icons/stp_card_jcb.png'),
    default: false
},
{
    id: 8,
    cardNumber: 2323223223344547,
    cardType: require('../icons/stp_card_discover.png'),
    default: false
}
]
const CardInput = (props) => {
    const [state, setState] = useState({
        cardNumber: '',
        showAddCardModal: false,
        showSelectCardModal: false,
        validThru: '',
        cvvNumber: '',
        selectedCardIndex: 0,
        selectedCardDetails: savedCard[0]
    })
    const setCardNumber = (text) => {
        let formattedText = text.split(' ').join('');
        if (formattedText.length > 0) {
            formattedText = formattedText.match(new RegExp('.{1,4}', 'g')).join(' ');
        }
        setState({ ...state, cardNumber: formattedText })
    }
    const setValidThru = (text) => {
        let textTemp = text;
        if (textTemp[0] > 1) {
            textTemp = '0' + textTemp[0];
        }
        if (textTemp.length === 2 && (state.validThru.length === 0 || state.validThru.length === 1)) {
            textTemp += '/';
        }
        // if (textTemp.length === 2) {
        //     if (parseInt(textTemp.substring(0, 2)) > 12) {
        //         textTemp = textTemp[0];
        //     } else if (state.validThru.length === 0 || state.validThru.length === 1) {
        //         textTemp += '/';
        //     } else {
        //         textTemp = textTemp;
        //     }
        // }
        setState({ ...state, validThru: textTemp })
    }
    const setCvv = (text) => {
        setState({ ...state, cvvNumber: text })
    }
    const showAddCardModal = () => {
        setState({ ...state, showAddCardModal: !state.showAddCardModal })
    }
    const showSelectCardModal = () => {
        setState({ ...state, showSelectCardModal: !state.showSelectCardModal })
    }
    const selectedCard = (index, item) => {
        setState({ ...state, selectedCardIndex: index, selectedCardDetails: item });
    }
    const renderCardDetails = ({ item, index }) => {
        return (
            <MainCardItemView>
                <RadioButtonView >
                    <RadioButton
                        value="first"
                        status={state.selectedCardIndex === index ? 'checked' : 'unchecked'}
                        onPress={selectedCard.bind(this, index, item)}
                        color='black'
                    />
                </RadioButtonView>
                <CardTypeView >
                    <Image source={item.cardType}></Image>
                </CardTypeView>
                <CardNumberView >
                    <CardNumberTextView>{item.cardNumber.toString().slice(0 - item.cardNumber.toString().length - 4).replace(/\d/g, 'X').concat(item.cardNumber.toString().slice((item.cardNumber.toString().length - 4) - (item.cardNumber.toString().length)))}</CardNumberTextView>
                </CardNumberView>
            </MainCardItemView>
        )
    }
    return (
        <MainView>
            <TextView>Card Number</TextView>
            <InputText placeholder='Card Number' keyboardType='numeric' value={state.cardNumber} onChangeText={setCardNumber} maxLength={19} />
            <Button onPress={showAddCardModal}>
                <TextView style={{ color: 'white' }}>Modal 1</TextView>
            </Button>
            <Button onPress={showSelectCardModal}>
                <TextView style={{ color: 'white' }}>Modal 2</TextView>
            </Button>
            <Modal
                animationType="fade"
                transparent={true}
                visible={state.showAddCardModal}
            //onRequestClose={showModal1}
            >
                <MainCardView>
                    <HeaderView >
                        <HeaderTextView >Add card Details</HeaderTextView>
                        <CloseButtonView>
                            <CloseButton onPress={showAddCardModal}>
                                <TextView style={{ color: Colors.white }}>X</TextView>
                            </CloseButton>
                        </CloseButtonView>
                    </HeaderView>
                    <ContainerView style={{ marginTop: 0, borderTopRightRadius: 0, borderTopLeftRadius: 0 }}>
                        {/* <CloseButtonView>
                            <CloseButton onPress={showSelectCardModal}>
                                <TextView>X</TextView>
                            </CloseButton>
                        </CloseButtonView> */}
                        <TextView>Card Number</TextView>
                        <CardNumberAndIconWrapperView >
                            <WrapperTextInput placeholder='4425 2378 3743 7372' keyboardType='numeric' value={state.cardNumber} onChangeText={setCardNumber} maxLength={19} />
                            <WrapperIconContainerView >
                                <WrapperIconView source={require('../icons/stp_card_unknown.png')} />
                            </WrapperIconContainerView>
                        </CardNumberAndIconWrapperView>
                        <TextView>Valid Thru</TextView>
                        <InputText placeholder='MM/YY' keyboardType='numeric' value={state.validThru} onChangeText={setValidThru} maxLength={5}
                            style={{
                                color: (parseInt(state.validThru.substring(0, 2)) > 12) || (parseInt(state.validThru.substring(0, 2)) === 0) || (state.validThru.length >= 2 && state.validThru.charAt(2) !== '/') ? 'red' : 'black',
                                borderColor: (parseInt(state.validThru.substring(0, 2)) > 12) || (parseInt(state.validThru.substring(0, 2)) === 0) || (state.validThru.length >= 2 && state.validThru.charAt(2) !== '/') ? 'red' : 'black'
                            }} />
                        <TextView >CVV Number</TextView>
                        <CardNumberAndIconWrapperView style={{ flexDirection: 'row', height: 40, borderWidth: 1, borderRadius: 2, margin: 5, alignItems: 'center' }}>
                            <WrapperTextInput placeholder='123' keyboardType='numeric' value={state.cvvNumber} onChangeText={setCvv} maxLength={3} />
                            <WrapperIconContainerView >
                                <WrapperIconView source={require('../icons/stp_card_cvc.png')} />
                            </WrapperIconContainerView>
                        </CardNumberAndIconWrapperView>
                        <Button >
                            <TextView style={{ color: 'white', fontWeight: 'bold' }}>ADD CARD</TextView>
                        </Button>
                    </ContainerView>
                </MainCardView>
            </Modal>
            <Modal
                animationType="fade"
                transparent={true}
                visible={state.showSelectCardModal}
            //onRequestClose={showModal2}
            >
                <MainCardView>
                    <HeaderView >
                        <HeaderTextView >Pick a payment option</HeaderTextView>
                        <CloseButtonView>
                            <CloseButton onPress={showSelectCardModal}>
                                <TextView style={{ color: Colors.white }}>X</TextView>
                            </CloseButton>
                        </CloseButtonView>
                    </HeaderView>
                    <ContainerView style={{ marginTop: 0, borderTopRightRadius: 0, borderTopLeftRadius: 0 }}>
                        {/* <CloseButtonView>
                            <CloseButton onPress={showSelectCardModal}>
                                <TextView>X</TextView>
                            </CloseButton>
                        </CloseButtonView> */}
                        <FlatListView style={{ height: 250 }}>
                            <FlatList
                                data={savedCard}
                                keyExtractor={(item, index) => `${index}`}
                                renderItem={renderCardDetails}
                            />
                        </FlatListView>
                        <Button >
                            <TextView style={{ color: 'white', fontWeight: 'bold' }}>DELETE CARD</TextView>
                        </Button>
                        <Button >
                            <TextView style={{ color: 'white', fontWeight: 'bold' }}>ADD CARD</TextView>
                        </Button>
                    </ContainerView>
                </MainCardView>
            </Modal>
        </MainView >
    )
}
export default CardInput;