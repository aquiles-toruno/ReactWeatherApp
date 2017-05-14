import React from 'react';
import 'EstilosMainContainer';
import WeatherContainer from 'WeatherContainer';

class MainContainer extends React.Component {
    render() {
        return (
            <div className="frame">
                <div className="container">
                    <WeatherContainer></WeatherContainer>
                </div>
            </div>
        );
    }
}

export default MainContainer;