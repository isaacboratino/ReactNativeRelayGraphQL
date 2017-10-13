import Relay, {
  Route,
} from 'react-relay/classic';

export default class AppLoginRoute extends Relay.Mutation {
  static paramDefinitions = {
    clientMutationId: {required: false},
    email: {required: false},
    password: {required: false}
  };
  static queries = {
    user: () => Relay.QL`mutation M2 {
      LoginEmail(input: {
        clientMutationId: $clientMutationId
        email: $email
        password: $password
      }) }`,
  };
  static routeName = 'AppLoginRoute';
}