import React from 'react';

class IconWeather extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<img
            src={`http://openweathermap.org/img/w/${this.props.icono}.png`}
            alt="Weather image"/>);
    }
}

export default IconWeather;