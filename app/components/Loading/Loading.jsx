import React from 'react';
import 'EstilosLoading';

class Loading extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let estilos = {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            backgroundColor: 'rgba(176, 190, 197, 0.48)',
            zIndex: 9999
        }
        return (
            <div className="loading">
            </div>
        );
    }
}

export default Loading;