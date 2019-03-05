import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './base.css';
import * as serviceWorker from './serviceWorker';
// 引入哈希路由
import {HashRouter} from 'react-router-dom';
// 生成数据池
import {Provider} from 'react-redux';
import store from './store';
console.log(store);
ReactDOM.render(
    <Provider store={store}>
        <HashRouter> 
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
