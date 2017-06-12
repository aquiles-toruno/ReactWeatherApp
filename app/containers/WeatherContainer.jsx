import React from 'react';
import Form from 'Form';
import GoogleMap from 'GoogleMap';

class WeatherContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="frame">
                    <div className="container">
                        <Form></Form>
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

export default WeatherContainer;