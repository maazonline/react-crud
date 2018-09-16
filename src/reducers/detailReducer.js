export default (state = { items: {}}, action) => {
    switch (action.type) {
     case 'DETAIL':
      return {
       items: action.payload
      }
     default:
      return state
    }
   }