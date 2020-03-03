/*
 * @Descripttion: 
 * @version: 
 * @Author: shentong
 * @Date: 2020-02-27 18:57:03
 * @LastEditors  : shentong
 * @LastEditTime : 2020-02-28 18:10:40
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
