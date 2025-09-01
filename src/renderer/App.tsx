import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';

import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from './contexts/authContext';
import Header from './components/Header';
import Todo from './components/Todo';

// MUI custom theme with persistent colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#7c3aed', // Deep purple
    },
    secondary: {
      main: '#f59e42', // Orange
    },
    background: {
      default: '#f3f4f6',
      paper: '#fff',
    },
    student: {
      main: '#e0f7fa',
    },
    studentList: {
      main: '#fce4ec',
    },
    class: {
      main: '#fff9c4',
    },
    classList: {
      main: '#e1bee7',
    },
    registration: {
      main: '#ffe0b2',
    },
    register: {
      main: '#c8e6c9',
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <HashRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route path="/home" component={Home} />
            <Route path="/todo" component={Todo} />
          </Switch>
        </HashRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
