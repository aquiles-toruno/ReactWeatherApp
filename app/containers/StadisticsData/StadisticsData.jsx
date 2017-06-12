import React from 'react';
import {connect} from 'react-redux';
import Icon from 'IconWeather';
import 'EstilosStadisticsData';

class StadisticsData extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var {message, datosOpenWeatherMap} = this.props;

        return (
            <div>
                <div id="contenedor-main">
                    <div>
                        <div className="contendor-main">
                            {datosOpenWeatherMap.weather[0].main}
                        </div>
                        <div className="contenedor-descripcion">{datosOpenWeatherMap.weather[0].description}</div>
                        <div>
                            <Icon icono={datosOpenWeatherMap.weather[0].icon}></Icon>
                        </div>
                    </div>
                </div>
                <br/>
                <div id="contenedor-iconos">
                    <div className="contenedor-icono">
                        <div className="contenedor-item">
                            <span className="wi wi-thermometer"></span>
                        </div>
                        <div className="contenedor-item-titulo">
                            Temperature
                        </div>
                        <div className="contenedor-item-descripcion">{datosOpenWeatherMap.main.temp}</div>
                    </div>
                    <div className="contenedor-icono">
                        <div className="contenedor-item">
                            <span className="wi wi-thermometer-internal"></span>
                        </div>
                        <div className="contenedor-item-titulo">
                            Pressure
                        </div>
                        <div className="contenedor-item-descripcion">{datosOpenWeatherMap.main.pressure}</div>
                    </div>
                    <div className="contenedor-icono">
                        <div className="contenedor-item">
                            <span className="wi wi-humidity"></span>
                        </div>
                        <div className="contenedor-item-titulo">
                            Humidity
                        </div>
                        <div className="contenedor-item-descripcion">{datosOpenWeatherMap.main.humidity}</div>
                    </div>
                    <div className="contenedor-icono">
                        <div className="contenedor-item">
                            <span className="wi wi-thermometer-exterior"></span>
                        </div>
                        <div className="contenedor-item-titulo">
                            Temperature Min
                        </div>
                        <div className="contenedor-item-descripcion">{datosOpenWeatherMap.main.temp_min}</div>
                    </div>
                    <div className="contenedor-icono">
                        <div className="contenedor-item">
                            <span className="wi wi-thermometer-exterior"></span>
                        </div>
                        <div className="contenedor-item-titulo">
                            Temperature Max
                        </div>
                        <div className="contenedor-item-descripcion">{datosOpenWeatherMap.main.temp_max}</div>
                    </div>
                    <div className="contenedor-icono">
                        <div className="contenedor-item">
                            <span className="wi wi-flood"></span>
                        </div>
                        <div className="contenedor-item-titulo">
                            Sea level
                        </div>
                        <div className="contenedor-item-descripcion">{datosOpenWeatherMap.main.sea_level}</div>
                    </div>
                    <div className="contenedor-icono">
                        <div className="contenedor-item">
                            <span className="wi wi-strong-wind"></span>
                        </div>
                        <div className="contenedor-item-titulo">
                            Wind speed
                        </div>
                        <div className="contenedor-item-descripcion">{datosOpenWeatherMap.wind.speed}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    return {message: state.message, datosOpenWeatherMap: state.datosOpenWeatherMap.data}
})(StadisticsData);