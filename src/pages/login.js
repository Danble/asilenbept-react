import React from 'react'
import '../assets/styles/styles.css'

class Login extends React.Component {

  shining() {
    const shine = document.getElementById('shine');
    window.onload = () => {
        setTimeout(() => {
            shine.classList.add('shining');
            shine.style.animationName = 'action-shineIn';
        }, 1077);
    }

    shine.addEventListener('animationend', (e) => {
        if(e.animationName === 'action-shineIn') {
            shine.style.animationName = 'action-shineOut';
            shine.style.animationTimingFunction = 'ease-out';
        }
    })
  }

  componentDidMount() {
    this.shining()
  }

  render() {
    return (
      <main className="login-body">
        <div className="overlay"></div>
        <section className="invisible-box">
            <div className="back-up-layout">
                <p><a className="photo-authors" href="https://pixabay.com/es/users/quadronet_webdesign-1555018/" rel="noopener noreferrer" target="_blank">Dirk Wohlrabe</a></p>
            </div>
            <div className="login-main-box">
                <div id="shine"></div>
                <div className="form-box">
                    <h1><span>Ingresa a</span> Asilenbept</h1>
                    <div className="form">
                        <p>Usuario:</p>
                        <input id="nickname" type="text" />
                        <p>Contraseña:</p>
                        <input id="password" type="password" />
                        <button id="login-button" type="submit" className="btn-login"><span>Ingresar</span></button>
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

export default Login