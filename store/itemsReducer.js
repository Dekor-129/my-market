import items from '../dataBase/db.json'
import catalogItems from '../dataBase/catalogDB.json'

const ADD = 'ADD'
const DELETE = 'DELETE'
const FULL_DELETE = 'FULL_DELETE'

const defaultStore = {
    items,
    catalogItems,
    cartItems: [],
    sortedCart: []
}

export const itemsReducer = (state = defaultStore, action) =>{
  switch(action.type) {
      case ADD:
          return {
            ...state, 
            cartItems: [...state.cartItems, action.payload],
            sortedCart: 
              state.cartItems.filter((el)=> el.id === action.payload.id).length > 0 
              ? [...state.sortedCart] 
              : [...state.sortedCart, action.payload] 
        }
      case DELETE:
          return {
            ...state,
            cartItems: 
              state.cartItems.filter((elem)=> elem.id === action.payload.id).length > 1 
              ? [...state.cartItems.filter((elem)=> elem.id !== action.payload.id), ...state.cartItems.filter((elem)=> elem.id === action.payload.id).pop()] 
              : [...cartItems.filter((elem)=> elem.id !== action.payload.id)],
            sortedCart: 
              state.cartItems.filter((elem)=> elem.id === action.payload.id).length > 1
              ? [...state.sortedCart]
              : [...sortedCart.filter((elem)=> elem.id !== action.payload.id)]
          }
      case FULL_DELETE:
        return {
          ...state,
          cartItems: [...state.cartItems.filter((elem)=> elem.id !== action.payload.id)],
          sortedCart: [...state.sortedCart.filter((elem)=> elem.id !== action.payload.id)]
        }
      default: 
          return state
  }
}

export const addProductAction = (payload) =>({
    type: ADD,
    payload
})

export const deleteProductAction = (payload) =>({
    type: DELETE,
    payload
})

export const fullDeleteProductAction = (payload) =>({
  type: FULL_DELETE,
  payload
})
