import axios from 'axios';
import * as constants from 'Constants';

export var obteniendoPaises = (obteniendoPaises) => {
    return {type: constants.types.OBTENIENDO_PAISES, obteniendoPaises};
}

export var paisesRecibidos = (paises) => {
    return {type: constants.types.PAISES_RECIBIDOS, paises};
}

export var errorObteniendoPaises = (errorObteniendoPaises) => {
    return {type: constants.types.ERROR_OBTENIENDO_PAISES, errorObteniendoPaises};
}

export var limpiarPaises = () => {
    return {type: constants.types.LIMPIAR_PAISES}
}

export var paisIngresado = (pais) => {
    return {type: constants.types.PAIS_INGRESADO, pais}
}

export var paisSeleccionado = (pais) => {
    return {type: constants.types.PAIS_SELECCIONADO, pais}
}

export var obteniendoPaisesAPI = (pais) => {
    return (dispatch, getState) => {
        dispatch(obteniendoPaises(true));
        var url = constants.urls.api + 'GetPais/' + pais;

        axios
            .get(url)
            .then((respuesta) => {
                dispatch(obteniendoPaises(false));
                dispatch(paisesRecibidos(respuesta));
            })
            .catch((error => {
                dispatch(obteniendoPaises(false));
                dispatch(errorObteniendoPaises(error));
            }))
    }
}