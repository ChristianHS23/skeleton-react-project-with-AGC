// exampleAction Actions
// --------------------------------------------------------

/* eslint-disable space-before-function-paren */
export const SET_LOADING = 'exampleAction/SET_LOADING';
export const CLEAR_ERROR = 'exampleAction/CLEAR_ERROR';
export const SET_ERROR = 'exampleAction/SET_ERROR';
export const INIT_DATA = 'exampleAction/INIT_DATA';
export const SET_DOUBLE_SUBMIT = 'exampleAction/SET_DOUBLE_SUBMIT';

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
})

export const setDoubleSubmit = (payload) => ({
  type: SET_DOUBLE_SUBMIT,
  payload,
});
