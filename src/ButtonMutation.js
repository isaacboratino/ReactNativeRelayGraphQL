import React, { Component } from 'react';
import {
    Button,
    View,
    Text
  } from 'react-native';
  import LikeStoryMutation from './LikeStoryMutation';
  import Relay from 'react-relay/classic';

export default class ButtonMutation extends React.Component {

  constructor() {
    super();
    this.state = {LoginEmail: {token:"toto"}}
    this.buttonHandle = this.buttonHandle.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
  }

  onSuccess(response) {
    this.setState({LoginEmail: response.LoginEmail});
  };

  buttonHandle() {
      Relay.Store.commitUpdate(
        new LikeStoryMutation({LoginEmail: ""}), {onSuccess: this.onSuccess});
    }

    render() {
      return (
        <View>
          <Text>Returno {this.state.LoginEmail.token}</Text>
          <Button title="Click" onPress={this.buttonHandle} />
        </View>
      );
    }
  }

  /*module.exports = Relay.createContainer(ButtonMutation, {
    fragments: {
      // You can compose a mutation's query fragments like you would those
      // of any other RelayContainer. This ensures that the data depended
      // upon by the mutation will be fetched and ready for use.
      LoginEmailPayload: () => Relay.QL`
        fragment on LoginEmailPayload {
          clientMutationId,
          token,
          error
        }
      `,
    },
  });*/