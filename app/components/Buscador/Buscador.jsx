import React from 'react';
import Item from 'Item';
import 'EstilosBuscador';
import {connect} from 'react-redux';
import * as BuscadorActions from 'BuscadorActions';
import Autosuggest from 'react-autosuggest';

class Buscador extends React.Component {
    constructor(props) {
        super(props);
    }

    onChange = (event, {newValue}) => {
        this
            .props
            .dispatch(BuscadorActions.paisIngresado(newValue));
    };

    render() {
        var {dispatch, obteniendoPaises, paises, errorObteniendoPaises, value} = this.props;

        const inputProps = {
            placeholder: "Type a country/city",
            value: value,
            onChange: this.onChange
        };

        var obtenerPaisesPorNombre = ({value}) => {
            if (value.length >= 3) {
                dispatch(BuscadorActions.obteniendoPaisesAPI(value));
            }
        }

        var limpiarPaises = () => {
            dispatch(BuscadorActions.limpiarPaises());
        }

        var getSuggestionValue = (pais) => {
            dispatch(BuscadorActions.paisSeleccionado(pais));
            return pais.name;
        }

        var renderFormat = (pais) => {
            return (
                <span>{pais.name}</span>
            );
        }

        return (
            <div>
                <Autosuggest
                    suggestions={paises}
                    onSuggestionsFetchRequested={obtenerPaisesPorNombre}
                    onSuggestionsClearRequested={limpiarPaises}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderFormat}
                    inputProps={inputProps}/>
            </div>
        );
    }
}

export default connect((state) => {
    return {obteniendoPaises: state.obteniendoPaises.obteniendoPaises, paises: state.obteniendoPaises.paises, errorObteniendoPaises: state.obteniendoPaises.error, value: state.paisIngresado}
})(Buscador);