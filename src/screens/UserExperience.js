import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Button, KeyboardAvoidingView, TouchableNativeFeedback, Alert } from 'react-native'
const onPressButton = () => {
    console.log('Sign In...!!');
}
function UserExperience() {
    let firstTextInput = null;
    let secondTextInput = null;
    const [usename, setUsename] = useState({
        name: '',
        password: ''
    });
    useEffect(() => {
        firstTextInput.focus();
    }, [])
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }}
                onChangeText={text => setUsename(usename.name = text)} keyboardType="default"
                value={usename.name} placeholder="Username"
                returnKeyType={"next"}
                ref={(input) => { firstTextInput = input; }}
                onSubmitEditing={() => { secondTextInput.focus(); }}
                blurOnSubmit={false}
            />
            <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }}
                onChangeText={text => setUsename(usename.password = text)} keyboardType="number-pad"
                value={usename.password} placeholder="Password"
                ref={(input) => { secondTextInput = input; }}
                returnKeyType={"go"} secureTextEntry={true} />
            <Button title="Submit" />
            <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'flex-end', margin: 10, padding: 10 }}>
                <TouchableNativeFeedback onPress={onPressButton}
                    background={TouchableNativeFeedback.Ripple('red')}
                    //background={TouchableNativeFeedback.SelectableBackground('red')}
                    //useForeground={true}
                >
                    <View style={{ height: 40, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}>
                        <Text >New user sign in?</Text>
                    </View>
                </TouchableNativeFeedback>
            </KeyboardAvoidingView>
        </View>
    )
}

export default UserExperience
