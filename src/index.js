/*
 * @Descripttion:
 * @version:
 * @Author: shentong
 * @Date: 2020-02-27 18:57:03
 * @LastEditors: Shentong
 * @LastEditTime: 2020-05-09 12:06:56
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import * as serviceWorker from "./serviceWorker";

// import { createBrowserHistory,createHashHistory } from 'history'
import App from "./App";

// export const history = createHashHistory()

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
