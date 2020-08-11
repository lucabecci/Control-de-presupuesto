import React from 'react'

const Formulario = () => {
    return (
        <form>
            <h2>Agrega Tus Gastos Aqui</h2>

            <div className='campo'>
                <label>Nombre Gasto</label>
                <input
                    type ='text'
                    className='u-full-width'
                    placeholder ='Ej. Transporte'
                />
            </div>

            <div className='campo'>
                <label>Cantidad Gasto</label>
                <input
                    type ='number'
                    className='u-full-width'
                    placeholder ='Ej. 120'
                />
            </div>

            <input
                type='submit'
                className='button-primary u-full-width'
                value='Agregar Gasto'
            />
        </form>
    )
}

export default Formulario
