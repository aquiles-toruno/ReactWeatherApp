import React from 'react';
import {default as swal} from 'sweetalert';

class ModalError extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        swal("Error", this.props.mensaje, "error");
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default ModalError;