import Relay, {
  Route,
} from 'react-relay/classic';

export default class AppUserRoute extends Route {
  static paramDefinitions = {
    id: {required: false},
  };
  static queries = {
    user: () => Relay.QL`query { user(id: $id) }`,
  };
  static routeName = 'AppUserRoute';
}