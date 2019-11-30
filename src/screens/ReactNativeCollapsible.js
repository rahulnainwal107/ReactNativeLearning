import React from 'react';
import { Animated, FlatList, Text } from 'react-native';
import { withCollapsible } from 'react-navigation-collapsible';
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const ReactNativeCollapsible = (props) => {
    const { paddingHeight, animatedY, onScroll } = props.collapsible;
    // const onScroll = (e) => {
    //     console.log(e.nativeEvent.contentOffset);
    // }
    const data = [{ item: 1 }, { item: 1 }, { item: 1 }, { item: 1 }, { item: 1 }, { item: 1 }, { item: 1 }, { item: 1 }, { item: 1 }, { item: 1 }, { item: 1 }, { item: 1 }, { item: 1 }, { item: 1 }, { item: 1 }, { item: 1 }, { item: 1 }, { item: 1 }, { item: 1 }, { item: 1 }, { item: 1 }, { item: 1 }, { item: 1 }, { item: 1 }, { item: 1 }, { item: 1 }, { item: 1 }, { item: 1 }, { item: 1 }, { item: 1 }, { item: 1 },];
    const renderItem = ({ item }) => (
        <Text style={{ fontSize: 22 }}>{item.item}</Text>
    );
    return (
        <AnimatedFlatList
            style={{ flex: 1 }}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => String(index)}
            contentContainerStyle={{ paddingTop: paddingHeight }}
            scrollIndicatorInsets={{ top: paddingHeight }}
            onScroll={onScroll}
            // if you want to use 'onScroll' callback.
            // onScroll={Animated.event(
            //   [{nativeEvent: {contentOffset: {y: animatedY}}}],
            //   {useNativeDriver:true, listener:this.onScroll})}
            _mustAddThis={animatedY}
        />
    )
}
export default withCollapsible(ReactNativeCollapsible, { iOSCollapsedColor: '#031' });

ReactNativeCollapsible.navigationOptions = ({ navigation }) => ({
    title: 'My Screen'
})