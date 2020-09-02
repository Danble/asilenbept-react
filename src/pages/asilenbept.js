import React from 'react'

class Asilenbept extends React.Component {

  render() {
    return (
      <main id="asilenbept">
        <div className="cube">
          <svg width="100vw" height="100vh" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100vw 100vh">
            <g>
              <rect id="pas" className="square" x={`calc(50vw - 10rem + 3rem)`}  y={`calc(50vh - 10rem - 2.4rem)`}/>
              <rect className="square" x={`calc(50vw - 10rem - 3rem)`}  y={`calc(50vh - 10rem + 2.4rem)`}/>

              <line className="line" x1={`calc(50vw`} y1={`calc(50vh)`} x2={`calc(80vw`} y2={`calc(80vh)`} />
              <line className="line" x1={`calc(50vw`} y1={`calc(50vh)`} x2={`calc(80vw`} y2={`calc(80vh)`} />
              <line className="line" x1={`calc(50vw`} y1={`calc(50vh)`} x2={`calc(80vw`} y2={`calc(80vh)`} />
              <line className="line" x1={`calc(50vw`} y1={`calc(50vh)`} x2={`calc(80vw`} y2={`calc(80vh)`} />
            </g>
          </svg>
        </div>
      </main>
    )
  }
}

export default Asilenbept