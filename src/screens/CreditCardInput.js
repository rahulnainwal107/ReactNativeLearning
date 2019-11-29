import React, { useState } from 'react';
import {
    Text,
    View, TextInput
} from 'react-native';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import { statement } from '@babel/template';

const CreditCardInputFile = (props) => {
    const [user, setUser] = useState({
        username: '',
        valid: '',
        cvv: ''
    })
    const setUsername = (text) => {
        let formattedText = text.split(' ').join('');
        if (formattedText.length > 0) {
            formattedText = formattedText.match(new RegExp('.{1,4}', 'g')).join(' ');
        }
        setUser({ ...user, username: formattedText })
    }
    const changeCvv = (text) => {
        setUser({ ...user, cvv: text })
    }
    const validTh = (text) => {
        let textTemp = text;
        if (textTemp[0] !== '1' && textTemp[0] !== '0') {
            textTemp = '';
        }
        if (textTemp.length === 2) {
            if (parseInt(textTemp.substring(0, 2)) > 12) {
                textTemp = textTemp[0];
            } else if (user.valid.length === 1) {
                textTemp += '/';
            } else {
                textTemp = textTemp[0];
            }
        }
        this.setState({ value: textTemp })
    }
    return (
        <>
            {/* //<CreditCardInput onChange={onChange} /> */}
            <LiteCreditCardInput
                autoFocus
                inputStyle={{
                    fontSize: 16,
                    color: "black"
                }}

                validColor={"black"}
                invalidColor={"red"}
                placeholderColor={"darkgray"}

            //onChange={this._onChange} 
            />
            <TextInput placeholder='Enter Username' keyboardType='numeric' value={user.username} onChangeText={setUsername} maxLength={19} />
            <TextInput placeholder='Valid Thru' keyboardType='numeric' value={user.valid} onChangeText={validTh} maxLength={5} />
            <TextInput placeholder='123' keyboardType='numeric' value={user.cvv} onChangeText={changeCvv} maxLength={3} />
        </>
    )
}

export default CreditCardInputFile;