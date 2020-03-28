import React from 'react'
import './App.css'
import { connect } from 'react-redux'
import { counterResetAll, counterCreate } from './actions'
import CounterItem from './CounterItem'

const sumAll = counters => counters.reduce((acc, cur) => acc + cur.value, 0)

function App (props) {
  const { counters } = props
  return (
    <div className="App">

      Total {sumAll(counters)}

      <button onClick={props.counterResetAll}>RESET ALL</button>

      {counters.map(el => <CounterItem key={el.id} item={el}/>)}

      <hr/>

      <button onClick={() => props.counterCreate({
        name: 'New Counter',
        id: 123,
        value: 43,
      })}>CREATE
      </button>

    </div>
  )
}

const mapStateToProps = state => ({
  counters: state.counters,
})

const mapDispatchToPros = dispatch => ({
  counterResetAll: () => dispatch(counterResetAll()),
  counterCreate: (args) => dispatch(counterCreate(args)),
})

export default connect(mapStateToProps, mapDispatchToPros)(App)
