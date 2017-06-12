import React from 'react';
import {Link} from 'react-router-dom';

class WeatherDetailsLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{
                margin: '4px 0'
            }}>
                <Link to='/data'>
                    <span>{`See more details of ${this.props.pais}`}</span>
                </Link>
            </div>
        );
    }
}

export default WeatherDetailsLink;