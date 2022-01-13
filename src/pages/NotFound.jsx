import React from 'react'

const Notfound = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>
            <h3>Oppps! Estas perdido.</h3>
            <img src="https://i.pinimg.com/originals/86/41/80/86418032b715698a4dfa6684b50c12af.gif" alt="space" />
            <p>
                La pagina que estas buscando no existe. <br />
                Como llegaste aqui es todo un misterio. <br />
                Pero puedes volver a la pagina principal dando click
                en el siguiente boton.
            </p>
            <button />
        </div>
    )
}

export default Notfound;