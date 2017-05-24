import React from 'react';
import {connect} from 'react-redux';

class GoogleMap extends React.Component {
    constructor(props) {
        super(props);
        this.mapa;
        this.marcador;
    }

    componentDidMount() {
        var {coordenadas} = this.props;
        this.mapa = new google
            .maps
            .Map(document.getElementById('map'), {
                center: {
                    lat: coordenadas.lat,
                    lng: coordenadas.lon
                },
                zoom: 8
            });
        this.marcador = new google
            .maps
            .Marker({
                position: {
                    lat: coordenadas.lat,
                    lng: coordenadas.lon
                },
                map: this.mapa
            });
    }

    componentDidUpdate() {
        var {coordenadas} = this.props;
        this
            .mapa
            .setCenter({lat: coordenadas.lat, lng: coordenadas.lon});

        this
            .mapa
            .setZoom(8);

        this
            .marcador
            .setPosition({lat: coordenadas.lat, lng: coordenadas.lon});
    }

    render() {
        return (
            <div
                id="map"
                style={{
                height: '300px',
                width: '100%'
            }}></div>
        );
    }
}

export default connect((state) => {
    return {coordenadas: state.coordenadas}
})(GoogleMap);