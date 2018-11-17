import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatedRoute } from 'react-router-transition';
import { URLS } from './utils';

import Home from './components/Home';
import Goals from './components/Goals';
import News from './components/News';
import Recomendations from './components/Recomendations';

import 'semantic-ui-css/semantic.min.css';
import './App.scss';
import './fonts/font.css'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header className="app-header">

          </header>
 
          <AnimatedRoute
            className="app-body"
            exact path={URLS.ROOT} component={Home}
            atEnter={{ scale: 2, opacity: 0 }}
            atLeave={{ scale: 2, opacity: 0 }}
            atActive={{ scale: 1, opacity: 1 }}
            mapStyles={(styles) => ({
              transform: `scale(${styles.scale})`,
              opacity: styles.opacity
            })}
          />
          <AnimatedRoute
            className="app-body"
            path={URLS.GOALS} component={Goals}
            atEnter={{ scale: 0, opacity: 0 }}
            atLeave={{ scale: 0, opacity: 0 }}
            atActive={{ scale: 1, opacity: 1 }}
            mapStyles={(styles) => ({
              transform: `scale(${styles.scale})`,
              opacity: styles.opacity
            })}
          />
          <AnimatedRoute
            className="app-body"
            path={URLS.RECOMENDATIONS} component={Recomendations}
            atEnter={{ scale: 0, opacity: 0 }}
            atLeave={{ scale: 0, opacity: 0 }}
            atActive={{ scale: 1, opacity: 1 }}
            mapStyles={(styles) => ({
              transform: `scale(${styles.scale})`,
              opacity: styles.opacity
            })}
          />
          <AnimatedRoute
            className="app-body"
            path={URLS.NEWS} component={News}
            atEnter={{ scale: 0, opacity: 0 }}
            atLeave={{ scale: 0, opacity: 0 }}
            atActive={{ scale: 1, opacity: 1 }}
            mapStyles={(styles) => ({
              transform: `scale(${styles.scale})`,
              opacity: styles.opacity
            })}
          />
        </div>
      </Router>
    );
  }
}
