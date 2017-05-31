import React from 'react';
import Item from 'Item';
import 'EstilosBuscador';
import {connect} from 'react-redux';
import * as BuscadorActions from 'BuscadorActions';

class Buscador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            paises: [
                'Nicaragua', 'Honduras', 'Costa Rica', 'Panama', 'Guatemala'
            ],
            resultados: [],
            haBuscado: false
        };

        this.buscarPais = this
            .buscarPais
            .bind(this);

        this.cerrarResultados = this
            .cerrarResultados
            .bind(this);

        this.seleccionarItem = this
            .seleccionarItem
            .bind(this);
    }

    buscarPais = (e) => {
        this.setState({
            resultados: this
                .state
                .paises
                .filter((elemento) => {
                    return elemento.toUpperCase() === e
                        .target
                        .value
                        .toUpperCase();
                }),
            haBuscado: true
        });
    }

    cerrarResultados = () => {
        this.setState({haBuscado: false});
    }

    seleccionarItem = (e) => {
        console.log(e);
    }

    render() {
        var {dispatch, obteniendoPaises, paises, errorObteniendoPaises} = this.props;

        var obtenerPaisesPorNombre = (nombrePais) => {
            dispatch(BuscadorActions.obteniendoPaisesAPI(nombrePais));
        }

        var listado = <Item encontrado={false}/>;
        // var abrirResultados = false;
        if (paises.length) {
            listado = paises.map((elemento) => {
                return <Item
                    key={elemento.id}
                    texto={elemento.name}
                    valor={elemento.id}
                    encontrado={true}
                    onSeleccionado={this.seleccionarItem}/>
            });
            // abrirResultados = true;
        }

        // abrirResultados = abrirResultados || this.state.haBuscado;

        return (
            <div>
                <input
                    type="text"
                    onChange={(e) => {
                    obtenerPaisesPorNombre(e.target.value);
                }}/>
                <div id="contenedor-buscador">
                    <ul id="contenedor-resultados">
                        {listado}
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect((state) => {
    return {obteniendoPaises: state.obteniendoPaises.obteniendoPaises, paises: state.obteniendoPaises.paises, errorObteniendoPaises: state.obteniendoPaises.error}
})(Buscador);