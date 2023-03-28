import React from 'react'

export const HeaderFP = () => {
  return (
    <div className="header1">
      <div className="tituloa">
        <h1>Helper People</h1>
      </div>
      <div className="divHeader1">
            <input placeholder='Correo electronico' className='inputFP' type='email' required/>
            <input placeholder='Contraseña' className='inputFP' type='password' required/>
            <button className='buttonFP'>Inicias sesión</button>
      </div>
    </div>
  )
}