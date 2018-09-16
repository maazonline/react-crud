import axios from "axios";
import constants from "../constants";
const {SERVER_URL} = constants;


const getList = () => {

  return (dispatch) => {
  axios
    .get(SERVER_URL)
    .then(function(response) {
      dispatch({
        type: "LIST",
        payload: response.data
      });
      console.log(response);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
}
}
;

const deleteRecord = (id) => {

    return (dispatch) => {
    axios.delete(`${SERVER_URL}/${id}`)
    .then(function(response) {
        dispatch(getList());

      console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
  }
  ;

  const getDetail = (id) => {

    return (dispatch) => {
    axios.get(`${SERVER_URL}/${id}`)
    .then(function(response) {
        dispatch({
            type: "DETAIL",
            payload: response.data
          });          console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }
  }
  ;

const saveDetail = (data) => {

  return (dispatch) => {
  axios.post(`${SERVER_URL}`, data)
  .then(function(response) {
      dispatch({
          type: "SAVE_DETAIL",
          payload: response.data
        }); 
        dispatch(getList())         
        console.log(response);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
}
}
;

export default {
  getList,
  deleteRecord,
  getDetail,
  saveDetail
};
