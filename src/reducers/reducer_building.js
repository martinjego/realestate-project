const initialState = {
  buildings: [], 
  isFetching: false,
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'GET_BUILDING_REQUEST':
      return Object.assign({}, state, {
        isFetching: true 
      })
    case 'GET_BUILDING_SUCCESS':
      return Object.assign({}, state, {
        buildings: action.payload,
        isFetching: false 
      })
    case 'GET_BUILDING_FAILED':
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
  }

}

