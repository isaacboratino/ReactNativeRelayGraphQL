import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import Relay, {
  DefaultNetworkLayer,
  RootContainer,
} from 'react-relay/classic';
import ButtonMutation from './ButtonMutation';

class AppUserComponent extends Component {
  render() {
    return (
      <View>
        <Text>Teste</Text>
        <Text>nome : ({this.props.relay.variables.id} {this.props.user.name})</Text>
        <ButtonMutation relay={this.props.relay} LoginEmail={this.props.LoginEmail} />
      </View>
    );
  }
}

export default Relay.createContainer(AppUserComponent, {
    initialVariables: {
      id: null,
    },
    fragments: {
      user: variables => Relay.QL`
        fragment on User {
          name
        }
      `,
    },
  });