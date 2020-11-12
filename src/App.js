import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Post from './pages/Post';
import Posts from './pages/Posts';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 321
      , sm: 481
      , md: 769
      , lg: 1025
      , xl: 1281
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/posts' component={Posts} />
          <Route exact path='/posts/:postId' component={Post} />
          <Route path='/' render={() => <Redirect to='/' />} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
