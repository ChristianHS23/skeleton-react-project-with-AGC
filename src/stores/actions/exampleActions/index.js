// {{ camelCase name }} Actions
// --------------------------------------------------------

/* eslint-disable space-before-function-paren */
export const SET_LOADING = '{{ camelCase name }}/SET_LOADING';
export const CLEAR_ERROR = '{{ camelCase name }}/CLEAR_ERROR';
export const SET_ERROR = '{{ camelCase name }}/SET_ERROR';
export const INIT_DATA = '{{ camelCase name }}/INIT_DATA';
export const SET_DOUBLE_SUBMIT = '{{ camelCase name }}/SET_DOUBLE_SUBMIT';

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const setDoubleSubmit = (payload) => ({
  type: SET_DOUBLE_SUBMIT,
  payload,
});
