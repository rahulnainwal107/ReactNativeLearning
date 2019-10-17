import React from 'react';
import { FlatList } from 'react-native';
import MenuListItem from './MenuListItem';

const renderItem = ({ item, index }) => {
    return (
        <MenuListItem
            index={index}
            item={item}
        />
    )
}
const _keyExtractor = (item, index) => `${index}`;
const ArchiveOnCloudScreen = ({ data }) => {
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={_keyExtractor}
            style={{backgroundColor:'#e6fff8'}}
        />
    )
}
export default ArchiveOnCloudScreen;