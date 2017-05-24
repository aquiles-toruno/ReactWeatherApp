import React from 'react';
import Message from 'Message';
import Loading from 'Loading';
import ModalError from 'ModalError';
import {connect} from 'react-redux';
import * as FormActions from 'FormActions';
import {default as swal} from 'sweetalert';

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
        var {dispatch, message, obteniendo, error} = this.props;

        var obtenerClima = (e, ciudad) => {
            e.preventDefault();
            dispatch(FormActions.getWeather(ciudad));
        }

        let componente = null;

        if (obteniendo) {
            componente = <Loading></Loading>;
        } else if (error.existeError && !obteniendo) {
            swal("Error", error.mensaje, "error");
            componente = null;
            // componente = <ModalError mensaje={error.mensaje}></ModalError>;
        } else {
            componente = <Message name={message}/>;
        }
        return (
            <form
                onSubmit={(e) => {
                obtenerClima(e, this.refs.ciudad.value);
                this.refs.ciudad.value = '';
            }}>
                {componente}
                <div>
                    <input
                        type="text"
                        className="control"
                        maxLength="50"
                        placeholder="Type a country"
                        ref="ciudad"/>
                </div>
                <div className="submit-button">
                    <input type="submit" value="Get weather" className="button turquesa"/>
                </div>
            </form>
        );
    }
}

export default connect((state) => {
    return {message: state.message, obteniendo: state.obteniendo, error: state.error}
})(Form);