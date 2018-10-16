const initialState = {
  listings: [], 
  isFetching: false,
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'GET_LISTING_REQUEST':
      return Object.assign({}, state, {
        isFetching: true 
      })
    case 'GET_LISTING_SUCCESS':
      return Object.assign({}, state, {
        buildings: action.payload,
        isFetching: false 
      })
    case 'GET_LISTING_FAILED':
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
  }

}

