import React from 'react';
import 'EstilosMainContainer';
import WeatherContainer from 'WeatherContainer';
import StadisticsData from 'StadisticsData';
import {Switch, Route} from 'react-router-dom';

class MainContainer extends React.Component {
    render() {
        return (
            <main className="container-weather">
                <Switch>
                    <Route exact path='/' component={WeatherContainer}/>
                    <Route path='/data' component={StadisticsData}/>
                </Switch>
            </main>
        );
    }
}

export default MainContainer;