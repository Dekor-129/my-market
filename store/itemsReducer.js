const ADD = 'ADD'
const GET = 'GET'

const defaultStore = {
    num: 0,
}

export const itemsReducer = (state = defaultStore, action) =>{
  switch(action.type) {
      case ADD:
          return {...state, num: state.num + action.payload}
      case GET:
          return {...state, num: state.num - action.payload}
      default: 
          return state
  }
}

export const addNumAction = (payload) =>({
      type: ADD,
      payload
  })

export const getNumAction = (payload) =>({
      type: GET,
      payload
  })
