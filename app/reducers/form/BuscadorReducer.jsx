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
        default:
            return state;
    }
}