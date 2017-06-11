import {createStore, compose, combineReducers, applyMiddleware} from 'redux';
import {changeMessage, obteniendoClima, actualizandoUbicacion, errorObteniendoClima} from 'FormReducer';
import {obteniendoPaises, paisIngresado, paisSeleccionado} from 'BuscadorReducer';
import thunk from 'redux-thunk';

export var configure = () => {
    var reducers = combineReducers({
        message: changeMessage,
        obteniendo: obteniendoClima,
        coordenadas: actualizandoUbicacion,
        error: errorObteniendoClima,
        obteniendoPaises: obteniendoPaises,
        paisIngresado,
        paisSeleccionado
    });

    var store = createStore(reducers, compose(applyMiddleware(thunk), window.devToolsExtension
        ? window.devToolsExtension()
        : f => f));

    return store;
};