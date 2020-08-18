import React from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'

class Home extends React.Component {

  componentDidMount() {
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

  render() {
    return (
      <div className="main">
        <section className="main-image" id="image"></section>
        <section className="main-content">
            <Navbar />
            <Sidebar />           
            <div className="content">
                <button title="Toggle sidebar"></button>
                <div className="blog">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus rhoncus euismod justo rhoncus cursus. Pellentesque id neque ut arcu mattis vulputate. Integer pulvinar elementum urna. Aenean lorem sapien, auctor sit amet magna nec, mattis luctus odio. Phasellus eu libero at lectus pretium vestibulum. Ut pulvinar ante nec sem venenatis, eu scelerisque massa mollis. Vestibulum vel mi nunc. Etiam euismod leo id velit fringilla pharetra.

                    Quisque et eros pulvinar, semper urna et, iaculis urna. Aliquam id venenatis mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc id lorem nec lorem rutrum vulputate at quis erat. Mauris eget lectus tortor. Donec volutpat, justo vestibulum lobortis tristique, velit lectus porta metus, in mollis est est quis dui. Phasellus quis velit rutrum, elementum erat aliquet, mollis nisi. Aliquam ut neque luctus, porta sem ut, feugiat urna. Mauris in sem at ex volutpat elementum. Maecenas aliquet turpis et auctor sodales. Fusce magna arcu, sagittis ornare ex non, rhoncus accumsan turpis. Aenean rutrum enim id porta ornare.

                    Mauris eu sapien dolor. Aliquam in metus mauris. Fusce et risus quis ex lacinia sagittis ac sit amet ex. Duis mattis ac ante quis pharetra. Sed et justo ornare lorem placerat sollicitudin. Duis varius lorem a metus sagittis, sit amet rhoncus sem posuere. Phasellus pellentesque mattis nunc, vitae iaculis ante blandit a. Curabitur non lobortis massa. Quisque posuere at nisi id tempor. Etiam dapibus tellus in dui volutpat, ut faucibus libero fermentum. Praesent in lacus in sapien tincidunt rutrum eu vel mi. Sed fermentum sem vitae orci pulvinar viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat.

                    Ut lacinia lectus ut mattis fringilla. Nulla facilisi. Integer a iaculis felis, ullamcorper rhoncus lectus. Vestibulum facilisis odio ac diam congue vestibulum. In elit orci, commodo accumsan facilisis tincidunt, semper vitae lacus. Vestibulum eget eleifend ligula. Ut volutpat, quam ut varius lacinia, quam nisi hendrerit enim, ullamcorper pulvinar magna leo luctus lectus. Fusce at massa eu nisi lacinia dignissim. Cras vel sapien enim. Sed sed hendrerit tellus, auctor malesuada mi.

                    Mauris lectus tortor, consectetur et sodales ut, pharetra et risus. Quisque mi velit, rhoncus vitae quam ut, pulvinar maximus magna. Duis viverra, odio vel malesuada vehicula, diam eros pharetra ipsum, et accumsan turpis leo at nunc. Etiam facilisis non nibh sit amet volutpat. Vivamus eros velit, ultrices quis purus nec, euismod elementum sem. In efficitur lectus vel magna accumsan laoreet in et neque. Phasellus nec nulla est. Phasellus eleifend eget nulla id ultricies. In non sem vehicula, tempor lacus non, iaculis lectus. Cras ut erat consectetur, porta velit iaculis, fringilla metus. Integer auctor elit vel eleifend iaculis. Pellentesque semper, neque vehicula elementum dapibus, dui lorem cursus tortor, at fermentum sapien massa a nibh. Phasellus odio nisi, ultricies eget urna sit amet, molestie viverra justo.

                    Maecenas sagittis est vehicula risus mollis eleifend. Phasellus vel odio nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur id sagittis enim. Nulla facilisi. In vitae molestie quam. Quisque eu purus vel enim blandit faucibus lobortis in odio. Mauris feugiat sit amet ligula in semper. Aliquam pulvinar dolor in lorem elementum pellentesque nec at diam. Curabitur in eros iaculis, tristique quam vitae, commodo lorem. Aliquam dapibus, orci nec ultricies euismod, ante urna tempor lectus, sed hendrerit tortor purus ac libero. Nam mattis, elit et aliquam scelerisque, dui ex laoreet leo, sit amet aliquet sem ligula ut turpis.
                </div>
            </div>         
            <Footer />
        </section>
      </div>
    )
  }
}

export default Home