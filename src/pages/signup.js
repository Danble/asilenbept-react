import React from 'react'
import axios from 'axios';
import '../assets/styles/styles.css'

class Signup extends React.Component {
  state = {
    name: null,
    nickname: null,
    age: null,
    user_type: null,
    email: null,
    password: null
  }
  
  componentDidMount() {
    if (window.localStorage.getItem('Nickname')) {
      window.location.replace('http://localhost:3000')
    }
  
    window.$shining()
  }

  handleChangeName = event => {
    this.setState({ name: event.target.value });
  }

  handleChangeNickname = event => {
    this.setState({ nickname: event.target.value });
  }

  handleChangeAge = event => {
    this.setState({ age: event.target.value });
  }

  handleChangeType = event => {
    this.setState({ user_type: event.target.value });
  }

  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  }

  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      nickname: this.state.nickname,
      age: parseInt(this.state.age),
      user_type: this.state.user_type,
      email: this.state.email,
      password: this.state.password,
      description: ''
    };

    axios.post(`http://localhost:8080/users/post`, { user })
    .then(res => {
      console.log(res);
      console.log(res.data);
      window.localStorage.setItem('Nickname', user.nickname)
      window.location.replace('http://localhost:3000')
    })
    .catch(err => {
      console.log(err | 'Something went wrong!')
    })
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
                <form className="form-box">
                    <h1><span>Registro para</span> Asilenbept</h1>
                    <div className="form">
                        <p>Nombre:</p>
                        <input id="name" name="name" type="text" onChange={this.handleChangeName} />
                        <p>Usuario (pseudónimo o nickname):</p>
                        <input id="nickname" name="nickname" type="text" onChange={this.handleChangeNickname} />
                        <p>Edad:</p>
                        <input id="age" name="age" type="number" onChange={this.handleChangeAge} />
                        <p>Tipo de usuario:</p>
                        <div className="user_type">
                          <div className="inline">
                            <input id="noob" name="user_type" type="radio" value="noob" onChange={this.handleChangeType} />
                            <label for="noob">Novato</label>
                          </div>
                          <div className="inline">
                            <input id="amateur" name="user_type" type="radio" value="amateur" onChange={this.handleChangeType} />
                            <label for="amateur">Amateur</label>
                          </div>
                          <div className="inline">
                            <input id="medium" name="user_type" type="radio" value="medium" onChange={this.handleChangeType} />
                            <label for="medium">Mediano</label>
                          </div>
                          <div className="inline">
                            <input id="advanced" name="user_type" type="radio" value="advanced" onChange={this.handleChangeType} />
                            <label for="advanced">Avanzado</label>
                          </div>
                          <div className="inline">
                            <input id="professional" name="user_type" type="radio" value="professional" onChange={this.handleChangeType} />
                            <label for="professional">Profesional</label>
                          </div>
                        </div>
                        <p>Correo electrónico:</p>
                        <input id="email" name="email" type="email" onChange={this.handleChangeEmail} />
                        <p>Contraseña:</p>
                        <input id="password" name="password" type="password" onChange={this.handleChangePassword} />
                        <p>Confirma contraseña:</p>
                        <input id="confirmation" type="password" />
                        <button id="register-button" type="submit" className="btn-signup" onClick={this.handleSubmit}><span>Registrarse</span></button>
                    </div>
                </form>
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