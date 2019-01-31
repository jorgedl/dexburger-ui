import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import i18next from 'i18next';
import numeral from 'numeral';
import 'numeral/locales';
import rootReducer from './reducers';

import * as ptBRTranslations from './translations/pt-br.json';

import App from './components/App';

import './less/index.less';

const store = createStore(rootReducer);

numeral.locale('pt-br');

i18next.init({
    lng: 'br',
    resources: {
        br: {
            translation: ptBRTranslations.default
        }
    }
});

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('app'));
