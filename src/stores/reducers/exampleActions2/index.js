import {
  SET_LOADING,
  CLEAR_ERROR,
  SET_ERROR,
  INIT_DATA,
  SET_DOUBLE_SUBMIT,
} from "stores/actions/exampleActions";

const initialState = {
  isLoading: false,
  isDoubleSubmit: false,
  isSubmitting: false,
  error: {},
};

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case SET_DOUBLE_SUBMIT:
      return {
        ...state,
        isDoubleSubmit: payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: {},
      };
    case INIT_DATA:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
