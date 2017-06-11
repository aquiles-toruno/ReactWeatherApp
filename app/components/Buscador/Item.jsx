import React from 'react';

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var items = this.props.encontrado
            ? <li
                    className="resultado"
                    onClick={(e) => {
                    this
                        .props
                        .onSeleccionado(this.props.valor)
                }}>{this.props.texto}</li>
            : <li className="sin-resultados">No hay resultados</li>;

        return (items);
    }
}

export default Item;