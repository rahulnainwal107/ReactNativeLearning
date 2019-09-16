import React, { Fragment } from 'react';

import MainStackNavigatorI from './src/Router/MainStackNavigator'
import TabNavigator from './src/Router/TabNavigator'

export default class App extends React.Component {
  render() {
    return (
      <MainStackNavigatorI />
    );
  }
}

