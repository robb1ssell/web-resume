import React, { Component } from 'react';
import Typer from './Typer';

class IntroTextEvent extends Component {
  render() {
    return (
      <div id='intro-text' className='introText fadeOut'>
        <Typer
            strings={[
              '$ npm run build^400\n `  npm-run-all build-css build-js` ^1000\n `  node-sass-chokidar src/ -o src/` ^1000\n `  Creating an optimized production build...` ^2000\n `  Compiled Successfully. Again... \n``$ `^1500serve -s build ^400\n`   bash: serve: command not found`^1000\n `  ...`^1500\n   kidding...'
            ]}
          />
      </div>
    );
  }
}

export default IntroTextEvent;