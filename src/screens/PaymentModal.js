import React, { useState } from 'react';
import {
    Text,
    FlatList,
    View,
    Animated,
    TouchableOpacity, Modal
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import styled from 'styled-components';
import { RadioButton } from 'react-native-paper';

const PaymentModal = (props) => {
    const [state, setState] = useState({
        showModal1: false,
        showModal2: false,
        selectedCard: 0,
        selectedCardDetails: {
            id: 1,
            cardNumber: 2323223223344547,
            cardType: require('../icons/stp_card_visa.png'),
            default: true
        },
        cardNum: '',
        month: '',
        year: '',
        cvvNumber: ''
    })
    const showModal1 = () => {
        setState({ ...state, showModal1: !state.showModal1 })
    }
    const showModal2 = () => {
        setState({ ...state, showModal2: !state.showModal2 })
    }
    const selectedCard = (index, item) => {
        setState({ ...state, selectedCard: index, selectedCardDetails: item });
    }
    const setCardNumber = (text) => {
        setState({ ...state, cardNum: text })
    }
    const setCvv = (text) => {
        setState({ ...state, cvvNumber: text })
    }
    const months = [{
        value: 1,
    }, {
        value: 2,
    }, {
        value: 3,
    },
    {
        value: 4,
    }, {
        value: 5,
    }, {
        value: 6,
    },
    {
        value: 7,
    }, {
        value: 8,
    }, {
        value: 9,
    },
    {
        value: 10,
    }, {
        value: 11,
    }, {
        value: 12,
    }];
    const years = [{
        value: 2019,
    }, {
        value: 2020,
    }, {
        value: 2021,
    },
    {
        value: 2022,
    }, {
        value: 2023,
    }, {
        value: 2024,
    },
    {
        value: 2025,
    }, {
        value: 2026,
    }, {
        value: 2027,
    },
    {
        value: 2028,
    }, {
        value: 2029,
    }, {
        value: 2030,
    }];

    const SavedCard = [{
        id: 1,
        cardNumber: 232322322334454711111,
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
        cardType: require('../icons/stp_card_diners.png'),
        default: false
    }
    ]
    const MainView = styled.View`
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
    `;
    const TextView = styled.Text`
    padding:5px;
    `;
    const InputText = styled.TextInput`
    margin:5px;
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
    const PickerView = styled.View`
    flexDirection: row;
    alignItems: center;
    `;
    const PickerChildView = styled.View`
    flex: 1;
    margin:5px;
    justifyContent:center;
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
    `;
    const SavedCardView = styled.View`
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
    const CheckboxView = styled.View`
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
    const CardTextInput = styled.TextInput`
    padding:5px;
    fontWeight:bold;
    `;
    const Image = styled.Image`
    height:30px;
    width:40px;
    `;
    const renderCardDetails = ({ item, index }) => {
        return (
            <MainCardItemView>
                <CheckboxView >
                    <RadioButton
                        value="first"
                        status={state.selectedCard === index ? 'checked' : 'unchecked'}
                        onPress={selectedCard.bind(this, index, item)}
                        color='black'
                    />
                </CheckboxView>
                <CardTypeView >
                    <Image source={item.cardType}></Image>
                </CardTypeView>
                <CardNumberView >
                    <CardTextInput>{item.cardNumber.toString().slice(0 - item.cardNumber.toString().length - 4).replace(/\d/g, 'X').concat(item.cardNumber.toString().slice((item.cardNumber.toString().length - 4) - (item.cardNumber.toString().length)))}</CardTextInput>
                </CardNumberView>
            </MainCardItemView>
        )
    }
    return (
        <View>
            <TextView>Card Number</TextView>
            <InputText placeholder='Card Number' keyboardType='numeric' value={state.cardNumber} onChangeText={setCardNumber} />
            <Button onPress={showModal1}>
                <TextView style={{ color: 'white' }}>Modal 1</TextView>
            </Button>
            <Button onPress={showModal2}>
                <TextView style={{ color: 'white' }}>Modal 2</TextView>
            </Button>
            <Modal
                animationType="fade"
                transparent={true}
                visible={state.showModal1}
            //onRequestClose={showModal1}
            >
                <MainView>
                    <ContainerView>
                        <CloseButtonView>
                            <CloseButton onPress={showModal1}>
                                <TextView>X</TextView>
                            </CloseButton>
                        </CloseButtonView>
                        <TextView>Card Number</TextView>
                        <InputText placeholder='XXXX XXXX XXXX XXXX' keyboardType='numeric' value={state.cardNum} onChangeText={setCardNumber} />
                        <TextView>Valid Thru</TextView>
                        <InputText placeholder='MM/YY' keyboardType='numeric' value={state.cardNumber} onChangeText={setCardNumber} />
                        <TextView >CVV Number</TextView>
                        <InputText placeholder='123' keyboardType='numeric' value={state.cvvNumber} onChangeText={setCvv} />
                        <Button >
                            <TextView style={{ color: 'white', fontWeight: 'bold' }}>ADD CARD</TextView>
                        </Button>
                    </ContainerView>
                </MainView>
            </Modal>
            <Modal
                animationType="fade"
                transparent={true}
                visible={state.showModal2}
            //onRequestClose={showModal2}
            >
                <MainView>
                    <ContainerView>
                        <CloseButtonView>
                            <CloseButton onPress={showModal2}>
                                <TextView>X</TextView>
                            </CloseButton>
                        </CloseButtonView>
                        <SavedCardView>
                            <FlatList
                                data={SavedCard}
                                keyExtractor={(item, index) => `${index}`}
                                renderItem={renderCardDetails}
                            />
                        </SavedCardView>
                        <Button >
                            <TextView style={{ color: 'white', fontWeight: 'bold' }}>DELETE CARD</TextView>
                        </Button>
                        <Button >
                            <TextView style={{ color: 'white', fontWeight: 'bold' }}>ADD CARD</TextView>
                        </Button>
                    </ContainerView>
                </MainView>
            </Modal>
        </View>
    )
}

export default PaymentModal;