import React from 'react'
import './styles/PlanetFooter.css'

const PlanetFooter = ({planeta, universe}) => {
    return (
    <footer className='footer__container'>
        <div className='overlay'></div>
        <div className={`img__footer ${planeta}`}></div>
        <h3 className='foorter__title' >Fuente: {universe.author}</h3>
    </footer>
    )
}

export default PlanetFooter