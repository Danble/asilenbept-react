import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.$shining = () => {
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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

