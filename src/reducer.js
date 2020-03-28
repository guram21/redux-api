const initialSate = {
  counters: [
    {
      id: 1,
      name: 'First Counter',
      value: 123,
    },
    {
      id: 2,
      name: 'Second Counter',
      value: 345,
    },
  ],
}

export default function counter (state = initialSate, action) {
  switch (action.type) {
    case 'COUNTER_RESET_ALL':
      return {
        ...state,
        counters: state.counters.map(el => ({ ...el, value: 0 })),
      }

    case 'COUNTER_PLUS_BY_ID':
      return {
        ...state,
        counters: counterPlusById(
          { counters: state.counters, id: action.payload }),
      }

    case 'COUNTER_MINUS_BY_ID':
      return {
        ...state,
        counters: counterMinusById(
          { counters: state.counters, id: action.payload }),
      }

    case 'COUNTER_CREATE':
      return {
        ...state,
        counters: [...state.counters, action.payload],
      }

    default:
      return state
  }
}

const counterPlusById = ({ counters, id }) =>
  counters.map(el => id === el.id
    ? { ...el, value: el.value + 1 }
    : el)

const counterMinusById = ({ counters, id }) =>
  counters.map(el => id === el.id
    ? { ...el, value: el.value - 1 }
    : el)
