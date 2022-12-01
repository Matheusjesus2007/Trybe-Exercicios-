import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addEmail } from './redux/actions/index'

class App extends Component {

  render() {
    const { dispatch } = this.props
    return (
      <div>
        <p>0</p>
        <button
         type="button"
         onClick={() => dispatch(addEmail('matheus'))}
         >
          Click here
          </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  email: state.email,
});


export default connect(mapStateToProps)(App)