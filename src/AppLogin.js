import AppLoginComponent from './AppLoginComponent';
import AppLoginRoute from './AppLoginRoute';
import React, { Component } from 'react';
import Relay, {
  DefaultNetworkLayer,
  RootContainer,
} from 'react-relay/classic';

Relay.injectNetworkLayer(
  new DefaultNetworkLayer('http://192.168.0.2:5000/graphql')
);

export default class App extends Component {
  render(): void {
    return (
      <RootContainer
        Component={AppLoginComponent}
        route={new AppLoginRoute({})}
      />
    );
  }
}