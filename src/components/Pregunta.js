import React, { useState } from 'react'
import Error from './Error';
import PropTypes from 'prop-types'

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {
    //Definimos el state para el presupuesto
    const [cantidad, guardarCantidad] = useState(0);
    //State por el valor ingresado es erroneo
    const [error, guardarError] = useState(false);
    //Funcion que lee el presupuesto del usuario y lo almacena
    const definirPresupuesto = e =>{
        guardarCantidad( parseInt(e.target.value) )
    }
    //Submit para definir el presupuesto
    const agregarPresupuesto = e =>{
        e.preventDefault()

        //Validar
        if( cantidad < 1 || isNaN( cantidad )){
            guardarError(true);
            return;
        }
        //Si se pasa la validacion
        guardarError(false);
        //Guardamos la cantidad en presupuesto y restante
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false)
    }
    return (
        <>
            <h2>Coloca tu presupuesto.</h2>
            {error ? <Error mensaje ='El Presupuesto es Incorrecto'/> : null}
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                
                />

                <input
                    type="submit"
                    className = 'button-primary u-full-width'
                    value='Definir Presupuesto'
                />
            </form>
            
        </>
    )
}

export default Pregunta

Pregunta.prototype = {
    guardarPresupuesto: PropTypes.number.isRequired,
    guardarRestante: PropTypes.number.isRequired,
    actualizarPregunta: PropTypes.bool.isRequired
}