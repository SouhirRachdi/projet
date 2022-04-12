import axios from "axios";
import {LOAD_COURS,
    ADD_COURS_SUCCESS,
    ADD_COURS_FAIL,
    GET_COURS_SUCCESS,
    GET_COURS_FAIL,
    GET_ALL_COURS_SUCCESS,
    GET_ALL_COURS_FAIL
  }
    from "../ActionsTypes/CourConstant" 


export const addCour = (newCour, navigate) => async (dispatch) => {
    try {
      const opts = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      };
      const response = await axios.post(
        "http://localhost:5000/cour/addCour",
        newCour,opts
      );
      console.log(response);
      dispatch({ type: ADD_COURS_SUCCESS });
      navigate("/cours");
    } catch (error) {
      console.dir(error);
      dispatch({ type: ADD_COURS_FAIL, payload: error });
    }
  };
  export const getAllcourses = (navigate) => async (dispatch) => {
    dispatch({ type: LOAD_COURS });
    try {
      const response = await axios.get("http://localhost:5000/cour/courses");
      dispatch({ type: GET_ALL_COURS_SUCCESS, payload: response.data });
      navigate("/cours")
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_ALL_COURS_FAIL, payload: error });
    }
  };