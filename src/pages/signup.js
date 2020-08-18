import React from 'react'
import '../assets/styles/styles.css'

class Signup extends React.Component {
  
  componentDidMount() {
    window.$shining()
  }

  render() {
    return (
      <main className="signup-body">
        <div className="overlay"></div>
        <section className="invisible-box">
            <div className="back-up-layout">
                <p><a className="photo-authors" href="https://unsplash.com/@simonrae" rel="noopener noreferrer" target="_blank">Simon Rae</a></p>
            </div>
            <div className="signup-main-box">
                <div id="shine"></div>
                <div className="form-box">
                    <h1><span>Registro para</span> Asilenbept</h1>
                    <div className="form">
                        <p>Nombre:</p>
                        <input id="name" type="text" />
                        <p>Usuario (pseudónimo o nickname):</p>
                        <input id="nickname" type="text" />
                        <p>Correo electrónico:</p>
                        <input id="email" type="email" />
                        <p>Contraseña:</p>
                        <input id="password" type="password" />
                        <p>Confirma contraseña:</p>
                        <input id="confirmation" type="password" />
                        <button id="register-button" type="submit" className="btn-signup"><span>Registrarse</span></button>
                    </div>
                </div>
            </div>
            <div className="back-down-layout">
                <i className="icon-info"></i>
            </div>
        </section>
      </main>
    )
  }
}

export default Signup