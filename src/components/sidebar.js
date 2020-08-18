import React, {useEffect} from 'react'

const Sidebar = () => {

  useEffect(() => { 
    let button = document.querySelector('button');
    let sidebar = document.getElementById('sidebar');

    button.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
    });
  })

  return(
    <div id="sidebar" className="collapsed">
        <ul className="sidebar-list">
            <li className="sidebar-items">Opción 1</li>
            <li className="sidebar-items">Opción 2</li>
            <li className="sidebar-items">Opción 3</li>
            <li className="sidebar-items">Ajustes</li>
        </ul>
    </div>
  )
}

export default Sidebar