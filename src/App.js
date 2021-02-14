import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider as V0MuiThemeProvider} from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import RouterComponent from './routers/routers.js';
import Header from './containers/header.js';
import './static/css/App.css';
import './static/css/vendor-styles.css';

// Material ui theme customization
const theme = createMuiTheme({
  palette: {
    primary1Color: '#f54a70',
    accent1Color: '#cb55e3',
  },
  fontFamily: 'Nunito, sans-serif',
});

const themeV0 = getMuiTheme({
  palette: {
    primary1Color: '#f54a70',
    accent1Color: '#cb55e3',
  },
  fontFamily: 'Nunito, sans-serif',
});

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <V0MuiThemeProvider muiTheme={themeV0}>
            <div>
              <Header />
              <RouterComponent />
            </div>
          </V0MuiThemeProvider>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
