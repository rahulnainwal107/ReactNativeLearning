import React from 'react';
import { Alert } from 'react-native';
import { FloatingAction } from "react-native-floating-action";
import Icon from 'react-native-vector-icons/Ionicons';

const actions = [
    {
        text: "Select All",
        icon: <Icon name='md-checkmark' size={20} color='black' style={{ padding: 5 }} />,
        name: "select_all",
        position: 1,
        color: '#EF8413',
        margin: 4
    },
    {
        text: "Mapping Objects",
        icon: <Icon name='md-add' size={20} color='black' style={{ padding: 5 }} />,
        name: "mapping_object",
        position: 2,
        color: '#EF8413',
        margin: 4
    },
    {
        text: "Run Process",
        icon: <Icon name='md-swap' size={20} color='black' style={{ padding: 5 }} />,
        name: "run_process",
        position: 3,
        color: '#EF8413',
        margin: 4
    },
    {
        text: "Refresh",
        icon: <Icon name='md-refresh' size={20} color='black' style={{ padding: 5 }} />,
        name: "refresh",
        position: 4,
        color: '#EF8413',
        margin: 4
    }
];


const FloatingActionButton = () => {
    return (
        <FloatingAction
            actions={actions}
            showBackground={true}
            color='#EF8413'
            onPressItem={(item) => {
                if (item === 'select_all') {
                    Alert.alert('Mapping Object');
                }
                else if (item === 'mapping_object') {
                    Alert.alert('Mapping Object');
                }
                else if (item === 'run_process') {
                    Alert.alert('Run Process');
                }
                else {
                    Alert.alert('Refresh');
                }
            }}
        />
    )
}
export default FloatingActionButton;