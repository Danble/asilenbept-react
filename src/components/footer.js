import React from 'react'

const Footer = () => {
  return(
    <footer>
      <div className="main-footer">
        <div className="contact-area">
            <i className="icon-medium"></i>
            <i className="icon-slack"></i>
            <i className="icon-twitter"></i>
            <i className="icon-vk"></i>
            <i className="icon-github"></i>
            <i className="icon-tumblr"></i>
        </div>
        <div className="others">
          <div>
            <p><strong>Aviso de privacidad</strong></p>
          </div>
          <div>
          <p><strong>Tienda</strong></p>
          </div>
          <div>
          <p><strong>Preguntas frecuentes</strong></p>       
          </div>
        </div>
        <div className="copyright">
          <p>Todos los derechos reservados - Asilenbept 2020</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer