export const getCompared = state => state.compare;

const ADD_TO_COMPARE = 'app/compare/ADD_TO_COMPARE';
const REMOVE_FROM_COMPARE = 'app/compare/REMOVE_FROM_COMPARE';

export const addToCompare = payload => ({ type: ADD_TO_COMPARE, payload });
export const removeFromCompare = payload => ({ type: REMOVE_FROM_COMPARE, payload });

const compareReducer = (statePart = [], action) => {
    switch (action.type) {
        case ADD_TO_COMPARE:
            if (statePart.includes(action.payload) || statePart.length >= 4) return statePart;
            return [...statePart, action.payload];

        case REMOVE_FROM_COMPARE:
            return statePart.filter(id => id !== action.payload);

        default:
            return statePart;
    }
};

export default compareReducer;