import React from 'react'

class Asilenbept extends React.Component {

  render() {
    return (
      <main id="asilenbept">
        <div className="cube">
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
        </div>
      </main>
    )
  }
}

export default Asilenbept