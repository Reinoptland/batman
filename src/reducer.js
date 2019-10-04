const initialState = {
    name: 'Batman',
    health: 5,
    inventory: [],
    heroic: true,
    weapon: {
      type: 'battarang',
      damage: 3
    }
}

const reducer = (state = initialState, action = {}) => {
    return state
}

export default reducer