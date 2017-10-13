import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import Relay, {
  DefaultNetworkLayer,
  RootContainer,
} from 'react-relay/classic';

class AppLoginComponent extends Component {
  render() {
    return (
      <View>
        <Text>Teste</Text>
        <Text>nome : ({this.props.relay.variables.id} {this.props.user.name})</Text>
      </View>
    );
  }
}

export default Relay.createContainer(AppLoginComponent, {
    initialVariables: {
      clientMutationId: "abc",
      email: "isaac@gmail.com",
      password: "boratino"
    },
    fragments: {
      user: variables => Relay.QL`
        fragment on LoginEmailPayload {
          clientMutationId
          token
          error
        }
      `,
    },
  });