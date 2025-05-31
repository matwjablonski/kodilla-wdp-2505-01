import initialState from './initialState';

const SET_DEVICE = 'SET_DEVICE';

export const setDevice = device => ({
  type: SET_DEVICE,
  payload: device,
});

export const getDevice = state => state.device;

const deviceReducer = (state = initialState.device, action) => {
  switch (action.type) {
    case SET_DEVICE:
      return action.payload;
    default:
      return state;
  }
};

export default deviceReducer;
