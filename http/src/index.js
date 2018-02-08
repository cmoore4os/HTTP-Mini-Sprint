import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// connects the whole app to a redux store
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// only when the data fetcher comes back with the "goods" or error
//will promise send action to the reducer
import ReduxPromise from 'redux-promise';

// that 
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <App />
    </Provider>,
    document.getElementById('root')
);
