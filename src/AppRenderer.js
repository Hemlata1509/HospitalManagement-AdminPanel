import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './redux/reducers';
import reportWebVitals from './reportWebVitals';

const App = React.lazy(() => import(/* webpackChunkName: "App" */ './App'));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

const Main = () => {
  
  return (
   
      <Provider store={store}>
        <Suspense fallback={<div className="loading" />}>
          <App />
        </Suspense>
      </Provider>
   
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
