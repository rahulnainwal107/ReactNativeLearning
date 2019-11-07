import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

export default class FAB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: 'John', age: 18 },
                { name: 'Lilli', age: 23 },
                { name: 'Lavera', age: 46 },
                { name: 'Paul', age: 32 },
                { name: 'Jene', age: 14 },
                { name: 'Felipe', age: 42 },
                { name: 'Shawn', age: 26 },
                { name: 'Carey', age: 24 },
                { name: 'Mark', age: 33 }
            ]
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.heading}>
                    <Text style={styles.headingTest}>FAB with FlatList</Text>
                </View>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => <View style={styles.list}>
                        <Text>Name : {item.name}</Text>
                        <Text>Age : {item.age}</Text>
                    </View>}
                />
                <TouchableOpacity onPress={() => alert('FAB clicked')} style={styles.fab}>
                    <Text style={styles.fabIcon}>+</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    heading: {
        height: 60,
        backgroundColor: '#03A9F4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headingTest: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    list: {
        margin: 5,
        backgroundColor: 'white',
        height: 80,
        justifyContent: 'space-around',
        paddingLeft: 10,
        elevation: 1
    },
    fab: {
        position: 'absolute',
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 20,
        backgroundColor: '#03A9F4',
        borderRadius: 30,
        elevation: 8
    },
    fabIcon: {
        fontSize: 40,
        color: 'white'
    }
});