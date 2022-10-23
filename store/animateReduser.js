
const defaultStore = {
    rotate: 0,
}

export const animateReduser = (state = defaultStore, action) =>{
  switch(action.type) {
    case 'ROTATE_PLUS':
        return {...state, rotate: state.rotate + action.payload}
    case 'ROTATE_MINUS':
        return {...state, rotate: state.rotate - action.payload}
    default: 
        return state
  }
}

export const rotatePlus = (payload) =>({
    type: 'ROTATE_PLUS',
    payload
})

export const rotateMinus = (payload) =>({
    type: 'ROTATE_MINUS',
    payload
})
