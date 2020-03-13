import React from 'react'
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import { Toolbar } from 'react-native-material-ui';
import * as COLOR from '../Colors';


const ToolbarUsingMaterialUI = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <Toolbar
                leftElement="arrow-back"
                onLeftElementPress={() => this.props.navigation.goBack()}
                centerElement="Title"
            />
            <View style={styles.container}>
                <Toolbar
                    centerElement="With menu"
                    rightElement={{
                        actions: ['edit'],
                        menu: { labels: ['Item 1', 'Item 2'] },
                    }}
                />
            </View>
            <View style={styles.container}>
                <Toolbar
                    leftElement="menu"
                    centerElement="Searchable"
                    searchable={{
                        autoFocus: true,
                        placeholder: 'Search',
                    }}
                />
            </View>
            <View style={styles.container}>
                <Toolbar
                    leftElement="clear"
                    centerElement="With button"
                    rightElement={
                        <Button
                            title="Save"
                            style={{ text: { color: 'white' } }}
                        />
                    }
                />
            </View>
            <View style={styles.container}>
                <Toolbar
                    size={16}
                    leftElement="clear"
                    centerElement="Custom icon size"
                    rightElement={{
                        actions: ['edit'],
                        menu: { labels: ['Item 1', 'Item 2'] },
                    }}
                />
            </View>
            <View style={styles.container}>
                <Toolbar
                    leftElement="clear"
                    centerElement="Custom styles"
                    rightElement={{
                        actions: ['edit'],
                        menu: { labels: ['Item 1', 'Item 2'] },
                    }}
                    style={{
                        container: { backgroundColor: COLOR.orange300 },
                        leftElement: { color: COLOR.orange900 },
                        titleText: { color: COLOR.orange900 },
                        rightElement: { color: COLOR.orange900 },
                    }}
                />
            </View>
            <View style={styles.container}>
                <Toolbar centerElement="Only title" />
            </View>
        </View>
    );
}

export default ToolbarUsingMaterialUI;

const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
    },
});