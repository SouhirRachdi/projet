import {LOAD_COURS,
    ADD_COURS_SUCCESS,
    ADD_COURS_FAIL,
    GET_COURS_SUCCESS,
    GET_COURS_FAIL,
    GET_ALL_COURS_SUCCESS,
    GET_ALL_COURS_FAIL}from "../ActionsTypes/CourConstant" 

    const initialState = {
        loading: false,
        cours: [],
        errors: null,
      };
      export const courReducer = (state = initialState, { type, payload }) => {
        switch (type) {
          case LOAD_COURS:
            return { ...state, loading: true };
          case ADD_COURS_SUCCESS:
            return {...state, cours:payload, loading: false }
          case ADD_COURS_FAIL:
            return { ...state, errors: payload };
          case GET_ALL_COURS_SUCCESS:
           return { ...state, cours: payload.allVideos, loading: false };
          case GET_ALL_COURS_FAIL:
           return { ...state, errors: payload, loading: false };
          default:
           return state;
        }
      };
      