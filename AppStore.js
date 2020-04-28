import React from "react";
import App from './App';

import { reducer } from './src/reducer'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk))

class AppStore extends React.Component {



	render() {
    return(
    <Provider store={store}>
      <App />
    </Provider>
	)}
}
export default AppStore;
 