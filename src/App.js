import React, { Component } from 'react';
import './styles/App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import TopNav from './components/TopNav';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

class App extends Component {
  componentDidMount = () => {
    let nav = document.getElementById('top-nav');

    window.addEventListener('scroll', function (e) {
      e.preventDefault();

      if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
              nav.classList.add('nav-dark');
              nav.classList.remove('nav-transparent');
          } else {
              nav.classList.add('nav-transparent');
              nav.classList.remove('nav-dark');
          }
    });
  }

  render() {
    return (
      <div id='master-container'>
        <div className="container">
          <div className="row">
            <TopNav/>
            <Main/>
          </div>
          <div className="row no-gutter">
            <About/>
          </div>
          <div className="row">
            <Skills/>
          </div>
          <div className="row no-gutter">
            <Portfolio/>
          </div>
          <div className="row">
            <Contact/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
