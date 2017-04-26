import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './counter.actions'


const mapStateToProps = state => ({
  number: state.counter.number,
})


const mapDispatchToProps = dispatch => bindActionCreators({
  fetchNumber: actions.fetchNumber,
  addNumber: actions.addNumber,
}, dispatch)

/*const CounterPage = ({ number, addNumber }) => (
  <div>
    { number }
    <button onClick={addNumber}>Add</button>
  </div>
)*/
class CounterPage extends Component {
  render() {
    console.log(this.props)
    const { addNumber } = this.props
    return (
      <div>
        { this.props.number }
        <button onClick={addNumber}>Add</button>
      </div>
    )
  }
}

CounterPage.propTypes = {
  number: PropTypes.number.isRequired,
  addNumber: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage)
