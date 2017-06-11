import * as constants from 'Constants';

export var obteniendoPaises = (state = {
    obteniendoPaises: false,
    paises: [],
    error: {}
}, action) => {
    switch (action.type) {
        case constants.types.OBTENIENDO_PAISES:
            return {
                ...state,
                obteniendoPaises: action.obteniendoPaises
            }
        case constants.types.PAISES_RECIBIDOS:
            return {
                ...state,
                paises: action.paises.data
            }
        case constants.types.ERROR_OBTENIENDO_PAISES:
            return {
                ...state,
                error: action.errorObteniendoPaises
            }
        case constants.types.LIMPIAR_PAISES:
            return {
                ...state,
                paises: []
            }
        default:
            return state;
    }
}

export var paisIngresado = (state = '', action) => {
    switch (action.type) {
        case constants.types.PAIS_INGRESADO:
            return action.pais
        default:
            return state;
    }
}

export var paisSeleccionado = (state = null, action) => {
    switch (action.type) {
        case constants.types.PAIS_SELECCIONADO:
            return action.pais
        default:
            return state;
    }
}