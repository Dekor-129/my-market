import items from '../dataBase/db.json'
import catalogItems from '../dataBase/catalogDB.json'

const ADD = 'ADD'
const GET = 'GET'

const defaultStore = {
    num: 0,
    items,
    catalogItems,
    cartItems: []
}

export const itemsReducer = (state = defaultStore, action) =>{
  switch(action.type) {
      case ADD:
          return {
            ...state, 
            num: state.num + 1,
            cartItems: [...state.cartItems, action.payload]
        }
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
