/* eslint-disable promise/always-return */
import React from 'react';
import { useHistory, Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useAuth } from '../contexts/authContext';
import { doSignOut } from '../firebase/auth';

function Header() {
  const { userLoggedIn } = useAuth();
  const history = useHistory();

  const handleLogout = () => {
    doSignOut()
      .then(() => {
        history.push('/');
      })
      .catch((error) => {
        // Optionally handle error
        console.error(error);
      });
  };

  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={1}
      sx={{ zIndex: 1201 }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
            Cooking School
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {userLoggedIn ? (
            <>
              <Button
                color="primary"
                variant="outlined"
                size="small"
                onClick={handleLogout}
              >
                Logout
              </Button>
              <Button
                color="primary"
                component={RouterLink}
                to="/todo"
                variant="contained"
                size="small"
              >
                TODO
              </Button>
            </>
          ) : (
            <>
              <Button
                color="primary"
                component={RouterLink}
                to="/"
                variant="outlined"
                size="small"
              >
                Login
              </Button>
              <Button
                color="primary"
                component={RouterLink}
                to="/register"
                variant="contained"
                size="small"
              >
                Register New Account
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
