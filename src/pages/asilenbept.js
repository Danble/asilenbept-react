import React from 'react'
import logo from '../assets/images/a.png'

class Asilenbept extends React.Component {

  log_in() {
    window.location.replace('http://localhost:3000/ingreso')
  }

  render() {
    return (
      <main id="asilenbept">
        <div className="cube">
          <img id="A" src={logo} alt="A letter" />
          <svg width="100vw" height="100vh" xmlns="http://www.w3.org/2000/svg">
            <g>
              <rect className="square" x={`calc(50vw - 10rem + 3rem)`}  y={`calc(50vh - 10rem - 2.4rem)`}/>
              <rect className="square" x={`calc(50vw - 10rem - 3rem)`}  y={`calc(50vh - 10rem + 2.4rem)`}/>

              <rect className="square-line" x={`calc(50vw - 10rem - 3rem)`}  y={`calc(50vh - 10rem + 2.4rem)`}/>
              <rect className="square-line" x={`calc(50vw + 10rem - 3rem)`}  y={`calc(50vh - 10rem + 2.4rem)`}/>
              <rect className="square-line" x={`calc(50vw - 10rem - 3rem)`}  y={`calc(50vh + 10rem + 2.4rem)`}/>
              <rect className="square-line" x={`calc(50vw + 10rem - 3rem)`}  y={`calc(50vh + 10rem + 2.4rem)`}/>
            </g>
          </svg>
          <div className="button-compose">
            <p>Inicio</p>
            <button className="main-button" onClick={this.log_in}></button>
          </div>
        </div>
      </main>
    )
  }
}

export default Asilenbept