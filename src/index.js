import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import rootReducer from './Reducers/root-reducer';
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
&& window.__REDUX_DEVTOOLS_EXTENSION__();


const store = createStore(rootReducer, devTools, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

const action = type => store.dispatch({type})

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
