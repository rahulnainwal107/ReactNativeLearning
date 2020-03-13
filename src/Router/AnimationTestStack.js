import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AnimationTest from '../screens/AnimationTest';
import AnimationUsingTiming from '../screens/AnimationUsingTiming';

const AnimationTestStack = createStackNavigator({
    AnimationTest: {
        screen: AnimationTest
    },
    AnimationUsingTiming: {
        screen: AnimationUsingTiming
    }
}, {
    initialRouteName: 'AnimationTest',
    defaultNavigationOptions: {
        header: null
    }
})
export default createAppContainer(AnimationTestStack)