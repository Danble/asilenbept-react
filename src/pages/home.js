import React from 'react'
import axios from 'axios'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'

class Home extends React.Component {

  state = {
    stories: [{
      title: null,
      text: null
    }]
  }

  componentDidMount() {
    if (!window.localStorage.getItem('Nickname') || window.localStorage.getItem('Nickname') === typeof undefined) {
      window.location.replace('http://localhost:3000/ingreso')
    }
    console.log(window.localStorage.getItem('Nickname') === typeof undefined)

    this.getStories()

    const image = document.getElementById('image');
    let last_known_scroll_position = 0;
    let ticking = false;

    function doSomething(scroll_pos) {
      console.log(scroll_pos);
      if (Number(scroll_pos) > 15) {          
          image.style.top = '-120px';
      } else if(Number(scroll_pos) < 15) {
        image.style.top = '0px';
      }
    }

    window.addEventListener('scroll', (e) => {
        last_known_scroll_position = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(function() {
            doSomething(last_known_scroll_position);
            ticking = false;
            });
        }
        ticking = true;
        console.log(e);
    })
  }

  getStories = () => {
    axios.get('http://localhost:8080/stories/getall')
    .then(res => {
      this.setState({stories: res.data})
    })
    .catch(err => {
      console.log(err)
    })
  }

  toggleButton = () => {
    let sidebar = document.getElementById('sidebar')
    sidebar.classList.toggle('collapsed')
  }

  //TODO Change names
  createTable = () => {
    let table = []

    for (let story of this.state.stories) {
      table.push(
        <div>
          <h1 className="story-title">{story.title}</h1>
          <p className="story-core">{story.text}</p>
        </div>
      )
    }
    return table
  }

  render() {
    return (
      <div className="main">
        <section className="main-image" id="image"></section>
        <section className="main-content">
            <Navbar />
            <Sidebar />           
            <div className="content">
                <button title="Toggle sidebar" onClick={this.toggleButton}></button>
                <div className="blog">
                  {this.state.stories.length > 0 ? this.createTable() : ''}
                </div>
            </div>         
            <Footer />
        </section>
      </div>
    )
  }
}

export default Home