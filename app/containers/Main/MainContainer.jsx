import React from 'react';
import 'EstilosMainContainer';
import GoogleMap from 'GoogleMap';
import WeatherContainer from 'WeatherContainer';

class MainContainer extends React.Component {
    render() {
        return (
            <div className="container-weather">
                <div className="frame">
                    <div className="container">
                        <WeatherContainer></WeatherContainer>
                    </div>
                </div>
                <br/>
                <div className="mapa">
                    <GoogleMap></GoogleMap>
                </div>
            </div>
        );
    }
}

export default MainContainer;