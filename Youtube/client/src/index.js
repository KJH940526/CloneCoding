import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'antd/dist/antd.css';
import { applyMiddleware, createStore } from 'redux';
//redux에서 미들웨어를 쓸 수 있게 해주는거랑 스토어만들어주는거

import { Provider } from 'react-redux'
//redux를 연결시켜주기 위해서는 redux에서 제공하는 provider를 사용해야한다.


import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import Reducer from './_reducers/index'
//import들은 body보다 무조건 위에 있어야한다 = const create 아래에 있으면 안됨

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)
//리덕스 미들웨어를 이용해서 객체의 액션만 받는 리덕스 스토어에
//프로미스 형식과 함수도 받게 할 수 있다.




//Redux_devtools를 연결하기위해서 Reducer, 위해서 사용함
//redux_devtools는 크롬확장프로그램에서 다운가ㅡㄴㅇ
ReactDOM.render(
    <Provider
      store={createStoreWithMiddleware(Reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__())}
    >
      <App />,
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
