import {
  connect,
} from 'react-redux';
import Root from '../components/Root';
import {
  push,
  pop,
} from '../actions/navigation';

const mapStateToProps = (state) => ({
  navigation: state.navigation,
});

const mapDispatchToProps = (dispatch) => ({
  pushRoute: (route) => dispatch(push(route)),
  popRoute: () => dispatch(pop()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
