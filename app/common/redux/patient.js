import { handleAction } from 'redux-actions';
import { normalize, Schema, arrayOf } from 'normalizr';
import { MPI_HOST } from 'config';
// import { combineReducers } from 'redux';

import { invoke } from './api';

const patientSchema = new Schema('patients');

export const fetchPatient = id => dispatch => dispatch(invoke({
  endpoint: `${MPI_HOST}/persons/${id}`,
  method: 'get',
  types: [
    'declarations/FETCH_PATIENT_REQUEST', {
      type: 'declarations/FETCH_PATIENT_SUCCESS',
      payload: (action, state, res) => res.json().then(json =>
        normalize(json.data, arrayOf(patientSchema))),
    },
    'declarations/FETCH_PATIENT_FAILER',
  ],
}));

export default handleAction('declarations/FETCH_PATIENT_SUCCESS',
  (state, action) => ({
    ...state,
    ...action.payload.patients,
  }),
  []
);