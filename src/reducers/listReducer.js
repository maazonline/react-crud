export default (state = { items: []}, action) => {
    switch (action.type) {
     case 'LIST':
      return {
       items: action.payload
      }
     default:
      return state
    }
   }