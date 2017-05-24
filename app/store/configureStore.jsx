import {createStore, compose, combineReducers, applyMiddleware} from 'redux';
import {changeMessage, obteniendoClima, actualizandoUbicacion, errorObteniendoClima} from 'FormReducer';
import thunk from 'redux-thunk';

export var configure = () => {
    var reducers = combineReducers({message: changeMessage, obteniendo: obteniendoClima, coordenadas: actualizandoUbicacion, error: errorObteniendoClima});

    var store = createStore(reducers, compose(applyMiddleware(thunk), window.devToolsExtension
        ? window.devToolsExtension()
        : f => f));

    return store;
};