import axios from 'axios'
import React from 'react'
import '../assets/styles/styles.css'

class Login extends React.Component {

  state = {
    nickname: null,
    password: null
  }

  componentDidMount() {
    if (window.localStorage.getItem('User') && window.localStorage.getItem('User') !== typeof undefined) {
      window.location.replace('http://localhost:3000')
    }

    window.$shining()
  }

  handleNickname = e => {
    this.setState({nickname: e.target.value})
  }

  handlePassword = e => {
    this.setState({password: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault()

    axios.get(`http://localhost:8080/users/get?nickname=${this.state.nickname}&password=${this.state.password}`)
    .then(res => {
      console.log(res.data)
      //TODO This is terrible! We need to use JWT Tokens instead.
      window.localStorage.setItem('User', JSON.stringify(res.data))
      window.location.replace('http://localhost:3000')
    })
    .catch(err => {
      console.log(err)
    })
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
                        <input id="nickname" type="text" onChange={this.handleNickname} />
                        <p>Contraseña:</p>
                        <input id="password" type="password" onChange={this.handlePassword} />
                        <button id="login-button" type="submit" className="btn-login" onClick={this.handleSubmit}><span>Ingresar</span></button>
                    </div>
                </div>
            </div>
            <div className="anchor-link">
              <a href="http://localhost:3000/registro">Registrarme</a>
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