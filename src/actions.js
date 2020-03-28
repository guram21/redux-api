export function counterResetAll () {
  return { type: 'COUNTER_RESET_ALL' }
}

export function counterPlus (id) {
  return {
    type: 'COUNTER_PLUS_BY_ID',
    payload: id,
  }
}

export function counterMinus (id) {
  return {
    type: 'COUNTER_MINUS_BY_ID',
    payload: id,
  }
}

export function counterCreate (args) {
  return {
    type: 'COUNTER_CREATE',
    payload: args,
  }
}

