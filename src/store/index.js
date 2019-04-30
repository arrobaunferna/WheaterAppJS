import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';

const initialState = {
    city: {city: "Barranquilla", country: "co"},
};

export const store = createStore(reducers, initialState, applyMiddleware(thunk));