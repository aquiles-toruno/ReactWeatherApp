import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Link} from 'react-router-dom';
import MainContainer from 'MainContainer';
import Nav from 'Nav';

var store = require('configureStore').configure();

// store.subscribe(() => {
//     console.log('New state', store.getState());
// });

class AppContainer extends React.Component {
    render() {
        return (
            <div>
                <Nav/>
                <MainContainer/>
            </div>
        );
    }

}

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <Route exact path="/" component={AppContainer}/>
    </BrowserRouter>
</Provider>, document.getElementById('app'));