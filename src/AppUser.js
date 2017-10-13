import AppUserComponent from './AppUserComponent';
import AppUserRoute from './AppUserRoute';
import ButtonRelay from './ButtonMutation';
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
        Component={AppUserComponent}
        route={new AppUserRoute({id: 'VXNlcjo1OWRkYmRlZjM1MzkzMjJiNDA0NWU5Yjk'})}
      />
    );
  }
}