import React from 'react';
import { Modal, TouchableOpacity, Text, View, ActivityIndicator } from 'react-native'
const ModalComponent = (props) => {
    return (
        <Modal {...props}>
            <TouchableOpacity style={{ alignItems: 'flex-end', padding: 10, margin: 10, }} onPress={props.onDismiss}>
                <Text style={{ backgroundColor: 'black', color: 'white', elevation: 5, width: 20, height: 20, textAlign: 'center', borderRadius: 10 }}>X</Text>
            </TouchableOpacity>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#F92205" />
            </View>
        </Modal>
    )
}
export default ModalComponent;