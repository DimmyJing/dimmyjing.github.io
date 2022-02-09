import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src="/static/images/pic01.jpg" alt="" /></span>
          <p>I am a second year Computer Science major currently studying in University of Texas at Austin. I've done some personal projects on and off in high school and started attending hackathons, programming competitions, and ctfs in college. Many of what I do is in my <a href="https://github.com/DimmyJing">GitHub</a> and I aspire to learn something new every day!</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src="/static/images/pic02.jpg" alt="" /></span>
          <p>I have worked for the past few years with Zykie Networks developing interesting database solutions, improving query and insertion time for some operations from minutes down to seconds!</p>
          <p>I will also be interning at Amazon this summer to work on products built on top of AWS.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src="/static/images/pic03.jpg" alt="" /></span>
          <p>As a student raised in a programmer family, I have always been intrigued by the inner working of everyday things. From the simplest calculator app to a fully functional investment platform, I have always enjoyed problem solving and creating solutions to everyday problems.</p>
          <p>There is nothing in the world as exciting as making something that others enjoy using, and that is why I chose Computer Science to be my future.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://www.facebook.com/jimmyguding/">
              <FontAwesomeIcon icon={faFacebook} />
            </a></li>
            <li><a href="https://www.instagram.com/jimmyguding/">
              <FontAwesomeIcon icon={faInstagram} />
            </a></li>
            <li><a href="https://github.com/DimmyJing">
              <FontAwesomeIcon icon={faGithub} />
            </a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main