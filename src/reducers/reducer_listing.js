const initialState = {
  list: [], 
  isFetching: false,
  sortType: null,
  activeList: {} 
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'UPDATE_ACTIVE_LIST_REQUEST':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'UPDATE_ACTIVE_LIST_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        activeList: action.payload
      })
    case 'UPDATE_ACTIVE_LIST_FAILED':
      return Object.assign({}, state, {
        isFetching: false
      })
    case 'UPDATE_SORT_TYPE':
      return Object.assign({}, state, {
        sortType: action.payload
      })
    case 'GET_LISTING_REQUEST':
      return Object.assign({}, state, {
        isFetching: true 
      })
    case 'GET_LISTING_SUCCESS':
      return Object.assign({}, state, {
        list: action.payload,
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

