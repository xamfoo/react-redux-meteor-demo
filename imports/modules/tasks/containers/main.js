import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from '../components/main';
import { subscribe } from  '../actions';

// dummy
class container extends Component {
  componentDidMount() {
    this.computation = this.props.subscribe();
  }
  componentWillUnmount() {
    this.computation.stop()
  }
  render() {
    return <Main {...this.props} />
  }
}

// container
const mapState = ({Tasks}) => {
  const {tasks, count} = Tasks
  return {
    tasks, count
  }
}
const mapDispatch = (dispatch, getState) => ({
  subscribe: () => dispatch(subscribe()),
});

export default connect(mapState, mapDispatch)(container)
