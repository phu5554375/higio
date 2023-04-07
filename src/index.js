

import React from 'react';
import ReactDOM from 'react-dom';
import './pages/main.css';
import './pages/bootstrap.css';
import App from './App';

import * as serviceWorker from './serviceWorker';
import rootSaga from './sagas/rootSaga';
import './locales/i18n';
//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import myReducer from './reducers';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
//Redux Saga
import createSagaMiddleware from 'redux-saga'; // hàm này có nhiệm vụ tạo ra một middleware năm giữa action và reducer trong redux
// Middleware
const sagaMiddleware = createSagaMiddleware(); //

var store = createStore(
    myReducer,
    applyMiddleware(sagaMiddleware)
);
i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
});

ReactDOM.render(
    <Provider store={ store }>
         <React.StrictMode>
         <I18nextProvider i18n={i18next}>
             <App />
             </I18nextProvider>,
        </React.StrictMode>
       
    </Provider>,
    document.getElementById('root')
);

sagaMiddleware.run(rootSaga); // Hàm này là chạy các saga

serviceWorker.unregister();