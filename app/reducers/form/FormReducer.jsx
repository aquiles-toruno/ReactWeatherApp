import * as constants from 'Constants';

export var changeMessage = (state = '', action) => {
    switch (action.type) {
        case constants.types.CHANGE_MESSAGE:
            return action
                .message
                .toUpperCase();
        default:
            return state;
    }
};

export var obteniendoClima = (state = false, action) => {
    switch (action.type) {
        case constants.types.OBTENIENDO_CLIMA:
            return action.obteniendoClima;
        default:
            return state;
    }
};