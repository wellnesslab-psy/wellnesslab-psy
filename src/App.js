import React from 'react';
import './App.css';
import Anastasia from './anastasia_aivatoglou.png'
import Chrysoula from './chrysoula_grigoropoulou.png'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      team: [
        {
          name: "Anastasia Aivatoglou",
          image: Anastasia
        },
        {
          name: "Chrysoula Grigoropoulou",
          image: Chrysoula
        }
      ]
    };
  }

  componentDidMount() {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@wellnesslab.psy")
        .then(res => res.json())
        .then(
            (result) => {

              console.log(result);
              this.setState({
                articles: result.items
              });
            },
            (error) => { }
        )
  }

  render() {
    const articleItems = [];
    const teamItems = [];
    for (let i=0; i<this.state.articles.length; i++) {
      articleItems.push(
          <div className="col s12 m4 l4">
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={this.state.articles[i].thumbnail}/>
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{this.state.articles[i].title}</span>
              </div>
            </div>
          </div>
      );
    }

    for (let i=0; i<this.state.team.length; i++) {
      teamItems.push(
          <div className="col s12 m3">
            <div className="card card-avatar">
              <div className="waves-effect waves-block waves-light">
                <img src={this.state.team[i].image}/>
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  {this.state.team[i].name}
                </span>
              </div>
            </div>
          </div>
      )
    }

    return (
        <div className="App">

          <div id="top" className="scrollspy">
            <div id="loader-wrapper">
              <div id="loader"></div>
              <div className="loader-section section-left"></div>
              <div className="loader-section section-right"></div>
            </div>
          </div>

          <div className="navbar-fixed">
            <nav id="nav_f" className="default_color" role="navigation">
              <div className="container">
                <div className="nav-wrapper">
                  <ul className="hide-on-med-and-down">
                    <li><a href="#intro">WellnessLab</a></li>
                    <li><a href="#articles">Articles</a></li>
                    <li><a href="#social">Social Media</a></li>
                    <li><a href="#team">Team</a></li>
                  </ul>
                  <ul id="nav-mobile" className="side-nav">
                    <li><a href="#intro">WellnessLab</a></li>
                    <li><a href="#articles">Articles</a></li>
                    <li><a href="#social">Social Media</a></li>
                    <li><a href="#team">Team</a></li>
                  </ul>
                  <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
                </div>
              </div>
            </nav>
          </div>

          <div className="section no-pad-bot" id="index-banner">
            <div className="container">
              <h1 className="text_h center header cd-headline letters type">
                <span>WellnessLab </span>
                <span className="cd-words-wrapper waiting">
                  <b className="is-visible">for a healthy body</b>
                  <b>for a healthy mind</b>
                </span>
              </h1>
            </div>
          </div>

          <div id="intro" className="section scrollspy">
            <div className="container">
              <div className="row">
                <div className="col s12">

                  <h2 className="center header text_h2">
                    <span className="span_h2">Hello World!</span>
                    I am <span className="span_h2">George Kortsaridis</span>. University student at University of
                    Western Macedonia.
                    A passionate coder, fantastic troubleshooter, and enthusiastic Software Developer.
                  </h2>

                </div>

              </div>
            </div>
          </div>

          <div className="section scrollspy" id="work">
            <div className="container">
              <h2 className="header text_b">Experience </h2>
              <div className="row">
                {articleItems}
              </div>
            </div>
          </div>

          <div className="parallax-container">
            <div className="parallax"><img src="img/trekker_background.jpg"/></div>
          </div>

          <div className="section scrollspy" id="team">
            <div className="container">
              <h2 className="header text_b"> The team </h2>
              <div className="row"> {teamItems}</div>
            </div>
          </div>

          <footer id="contact" className="page-footer default_color scrollspy">
            <div className="container">
              <div className="row">
                <div className="col l6 s12">
                  <form className="col s12" action="contact.php" method="post">
                    <div className="row">
                      <div className="input-field col s6">
                        <i className="mdi-action-account-circle prefix white-text"></i>
                        <input id="icon_prefix" name="name" type="text" className="validate white-text"/>
                          <label htmlFor="icon_prefix" className="white-text">First Name</label>
                      </div>
                      <div className="input-field col s6">
                        <i className="mdi-communication-email prefix white-text"></i>
                        <input id="icon_email" name="email" type="email" className="validate white-text"/>
                          <label htmlFor="icon_email" className="white-text">Email-id</label>
                      </div>
                      <div className="input-field col s12">
                        <i className="mdi-editor-mode-edit prefix white-text"></i>
                        <textarea id="icon_prefix2" name="message" className="materialize-textarea white-text"></textarea>
                        <label htmlFor="icon_prefix2" className="white-text">Message</label>
                      </div>
                      <div className="col offset-s7 s5">
                      </div>
                    </div>
                  </form>
                </div>


                <div className="col l3 s12">
                  <h5 className="white-text">George Kortsaridis</h5>
                  <ul>
                    <li className="white-text">Tel : +30 6948361083</li>
                    <li className="white-text">Mail : gkortsaridis@gmail.com</li>
                    <li className="white-text">Address : V. Mikrou 4, Kozani, 50100</li>
                  </ul>

                </div>

                <div className="col l3 s12">
                  <h5 className="white-text">Social</h5>
                  <ul>
                    <li>
                      <a className="white-text" href="https://www.facebook.com/gkortsaridis">
                        <i className="small fa fa-facebook-square white-text"></i> Facebook
                      </a>
                    </li>
                    <li>
                      <a className="white-text" href="https://github.com/gkortsaridis">
                        <i className="small fa fa-github-square white-text"></i> Github
                      </a>
                    </li>
                    <li>
                      <a className="white-text" href="https://www.linkedin.com/in/georgekortsaridis">
                        <i className="small fa fa-linkedin-square white-text"></i> Linkedin
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-copyright default_color">
              <div className="container">
              </div>
            </div>
          </footer>

        </div>
    );
  }

}

export default App;
