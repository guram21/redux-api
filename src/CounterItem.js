import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import { counterPlus, counterMinus } from './actions'

function CounterItem (props) {
  const { name, value, id } = props.item
  return (
    <div>

      <button onClick={() => props.counterMinus(id)}>MINUS</button>

      {name} - {value}

      <button onClick={() => props.counterPlus(id)}>PLUS</button>

    </div>
  )
}

const mapStateToProps = state => ({
  counters: state.counters,
})

const mapDispatchToPros = dispatch => ({
  counterPlus: (id) => dispatch(counterPlus(id)),
  counterMinus: (id) => dispatch(counterMinus(id)),
})

export default connect(mapStateToProps, mapDispatchToPros)(CounterItem)
