import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {store, persistor, rrfProps } from "./store/index";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { PersistGate } from 'redux-persist/integration/react'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
ReactDOM.render(
	<Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>

            <PersistGate loading={null} persistor={persistor}>
        		<App />
            </PersistGate>
        </ReactReduxFirebaseProvider>
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
