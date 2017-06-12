import React from 'react';
import Message from 'Message';
import Loading from 'Loading';
import {connect} from 'react-redux';
import * as FormActions from 'FormActions';
import {default as swal} from 'sweetalert';
import Buscador from 'Buscador';
import WeatherDetailsLink from 'WeatherDetailsLink';

class Form extends React.Component {
    constructor(props) {
        super(props);

        // Binding function to the component this.getWeather = this     .getWeather
        // .bind(this); Binding function to the component this.changeCountry = this
        // .changeCountry     .bind(this);
    }

    // getWeather = function (e) {     this.setState({message: this.state.country});
    //     e.preventDefault(); } changeCountry = function (e) {     this.setState({
    // country: e             .target             .value .toUpperCase() }); }

    render() {
        var {dispatch, message, obteniendo, error, paisSeleccionado} = this.props;

        var obtenerClima = (e, ciudad) => {
            e.preventDefault();
            dispatch(FormActions.getWeather(ciudad));
        }

        let componente = null;
        let mostrarDetalle = null;

        if (obteniendo) {
            componente = <Loading></Loading>;
        } else if (error.existeError && !obteniendo) {
            swal("Error", error.mensaje, "error");
            componente = null;
        } else {
            componente = <Message name={message}/>;

            if (this.props.datosOpenWeatherMap != null) {
                mostrarDetalle = <WeatherDetailsLink pais={paisSeleccionado.name}/>;
            }
        }
        return (
            <form
                onSubmit={(e) => {
                if (paisSeleccionado != null) {
                    obtenerClima(e, paisSeleccionado);
                }
            }}>
                {componente}
                <div style={{
                    textAlign: 'center'
                }}>
                    <Buscador></Buscador>
                    {mostrarDetalle}
                </div>
                <div className="submit-button">
                    <input type="submit" value="Get weather" className="button turquesa"/>
                </div>
            </form>
        );
    }
}

export default connect((state) => {
    return {message: state.message, obteniendo: state.obteniendo, error: state.error, paisSeleccionado: state.paisSeleccionado, datosOpenWeatherMap: state.datosOpenWeatherMap}
})(Form);