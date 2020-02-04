import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, Button, KeyboardAvoidingView, TouchableNativeFeedback, Alert, TouchableOpacity } from 'react-native'
import { useHeaderHeight } from 'react-navigation-stack';
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
    const headerHeight = useHeaderHeight();
    console.log("Header height ", headerHeight)
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} >
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                <View>
                    <TextInput style={{ height: 40, borderColor: 'green', borderWidth: 1, margin: 10, backgroundColor: 'white' }}
                        onChangeText={text => setUsename(usename.name = text)} keyboardType="default"
                        value={usename.name} placeholder="Username"
                        returnKeyType={"next"}
                        ref={(input) => { firstTextInput = input; }}
                        onSubmitEditing={() => { secondTextInput.focus(); }}
                        blurOnSubmit={false}
                    />
                    <TextInput style={{ height: 40, borderColor: 'green', borderWidth: 1, margin: 10, backgroundColor: 'white' }}
                        onChangeText={text => setUsename(usename.password = text)} keyboardType="number-pad"
                        value={usename.password} placeholder="Password"
                        ref={(input) => { secondTextInput = input; }}
                        returnKeyType={"go"} secureTextEntry={true} />
                    <TouchableOpacity style={{ height: 40, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center', margin: 10, padding: 10, }}>
                        <Text>SUBMIT</Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <TouchableNativeFeedback onPress={onPressButton}
                        background={TouchableNativeFeedback.Ripple('red')}
                    //background={TouchableNativeFeedback.SelectableBackground('red')}
                    //useForeground={true}
                    >
                        <View style={{ height: 40, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center', margin: 10, padding: 10, }}>
                            <Text >New user sign in?</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default UserExperience
