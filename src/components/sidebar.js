import React from 'react'

const Sidebar = () => {

  let signout = () => {
    window.localStorage.clear()
    window.location.reload()
  }

  return(
    <div id="sidebar" className="collapsed">
        <ul className="sidebar-list">
            {/* <li className="sidebar-items">Opción 1</li>
            <li className="sidebar-items">Opción 2</li> */}
            <li className="sidebar-items">Ajustes</li>
            <li className="sidebar-items" onClick={signout}>Salir de Asilenbept</li>
        </ul>
    </div>
  )
}

export default Sidebar