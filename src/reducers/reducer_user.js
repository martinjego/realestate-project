const initialState = {
  user: {},
  isAuthenticated: true,
  isFetching: false,
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'UPDATE_PASSWORD_REQUEST':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'UPDATE_PASSWORD_SUCCESS':
      return Object.assign({}, state, {
        isfetching: false 
      })
    case 'UPDATE_PASSWORD_FAILED':
      return Object.assign({}, state, {
        isfetching: false
      })
    case 'UPDATE_CONTACT_REQUEST':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'UPDATE_CONTACT_SUCCESS':
      return Object.assign({}, state, {
        isfetching: false 
      })
    case 'UPDATE_CONTACT_FAILED':
      return Object.assign({}, state, {
        isfetching: false
      })
    case 'SESSION_REQUEST':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'SESSION_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false 
      })
    case 'LOGIN_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        user: action.payload.data,
      })
    case 'SESSION_FAILED':
      return Object.assign({}, state, {
        isFetching: false,
      })
    default:
      return state
  }

}

