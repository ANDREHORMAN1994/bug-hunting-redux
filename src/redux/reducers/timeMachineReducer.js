import { LOADING, SET_SNAPSHOP } from '../actions/types';

const INITIAL_STATE = {
  url: '',
  archived_snapshots: {
    closest: {
      status: 200,
      available: false,
      url: '',
      timestamp: '',
    },
  },
  timestamp: '',
  loading: false,
};

const timeMachineReducer = (state = INITIAL_STATE, action) => {
  // console.log(action);
  switch (action.type) {
  case SET_SNAPSHOP: {
    // state.archived_snapshots = action.payload.archived_snapshots;
    // state.loading = false;
    // return state;
    return {
      ...state,
      archived_snapshots: action.payload.archived_snapshots,
      loading: false,
    };
  }
  case LOADING:
    // state.loading = true;
    // return state;
    return {
      ...state,
      loading: true,
    };
  default:
    return state;
  }
};

export default timeMachineReducer;
