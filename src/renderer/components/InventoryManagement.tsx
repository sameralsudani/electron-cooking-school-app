import React, { useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import Form from './Form/Form';
import Posts from './Posts/Posts';

function InventoryManagement() {
  useEffect(() => {
    // getPosts();
  }, []);

  return (
    <>
      <Typography
        variant="h4"
        sx={{
          mt: 20,
          mb: 4,
          fontWeight: 600,
          color: 'primary.main',
          letterSpacing: 1.5,
          textAlign: 'center',
          textShadow: '0 2px 8px rgba(63,81,181,0.10)',
        }}
      >
        Inventory Management System
      </Typography>
      <Box
        component="main"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          gap: { xs: 4, lg: 6 },
          mt: 4,
          px: { xs: 1, sm: 4, md: 8 },
        }}
      >
        <Box
          sx={{
            flex: { lg: 8, xs: 'unset' },
            width: { xs: '100%', lg: '58%' },
            display: 'flex',
            alignItems: 'stretch',
          }}
        >
          <Paper
            elevation={8}
            sx={{
              borderRadius: 4,
              p: { xs: 2, sm: 3, md: 4 },
              boxShadow: '0 8px 32px 0 rgba(63,81,181,0.10)',
              minHeight: 600,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
            }}
          >
            <Box sx={{ width: '100%' }}>
              <Posts />
            </Box>
          </Paper>
        </Box>
        <Box
          sx={{
            flex: { lg: 4, xs: 'unset' },
            width: { xs: '100%', lg: '42%' },
            display: 'flex',
            alignItems: 'stretch',
          }}
        >
          <Paper
            elevation={8}
            sx={{
              borderRadius: 4,
              p: { xs: 2, sm: 3, md: 4 },
              boxShadow: '0 8px 32px 0 rgba(63,81,181,0.10)',
              minHeight: 400,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Form />
          </Paper>
        </Box>
      </Box>
    </>
  );
}

export default InventoryManagement;
