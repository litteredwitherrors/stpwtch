import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { mergeStyles } from 'office-ui-fabric-react';

// Inject some global styles
mergeStyles({
  selectors: {
    ':global(body), :global(html), :global(#app)': {
      margin: 0,
      padding: 0,
      height: '100vh',
    },
    ':global(h2)': {
      margin: 0
    }
  }
});

ReactDOM.render(<App />, document.getElementById('app'));
