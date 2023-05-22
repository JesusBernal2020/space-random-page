import React from 'react'
import './styles/UniverseStyles.css'


const Universe = ({phrase, handleChangeUniverse}) => {
    return (
        <section className='universe'>
            

            <article className='universe__phrase'>
                <p className='universe--phrase'>{phrase}</p>
            </article>
            <input className='universe__btn' onClick={handleChangeUniverse} type='image' src='/images/Vector.png'></input>
            
        
            

      </section>
  )
}

export default Universe