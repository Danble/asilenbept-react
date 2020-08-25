import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return(
    <nav className="navbar">
        <ul className="nav-list">
            <li className="list-item"><Link to="/asilenbept">Asilenbept</Link></li>
            <li className="list-item"><Link>Historias largas</Link></li>
            <li className="list-item"><Link>Cuentos cortos </Link></li>
            <li className="list-item"><Link>Tus historias</Link></li>
            <li className="list-item"><Link>Tus gustos</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar