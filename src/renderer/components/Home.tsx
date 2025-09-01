import React from 'react';
import { Box, Paper, Typography, Divider, createTheme } from '@mui/material';
import AddStudent from './AddStudent';
import StudentList from './StudentList';
import ClassList from './ClassList';
import AddClass from './AddClass';
import RegisterStudent from './RegisterStudent';
import RegistrationList from './RegistrationList';

// Extend MUI Palette to include custom keys
declare module '@mui/material/styles' {
  interface Palette {
    student?: Palette['primary'];
    studentList?: Palette['primary'];
    class?: Palette['primary'];
    classList?: Palette['primary'];
    registration?: Palette['primary'];
    register?: Palette['primary'];
  }
  interface PaletteOptions {
    student?: PaletteOptions['primary'];
    studentList?: PaletteOptions['primary'];
    class?: PaletteOptions['primary'];
    classList?: PaletteOptions['primary'];
    registration?: PaletteOptions['primary'];
    register?: PaletteOptions['primary'];
  }
}

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

function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: theme.palette.background.default,
        py: 6,
        px: { xs: 1, sm: 4, md: 8 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          width: '100%',
          maxWidth: 700,
          borderRadius: 4,
          p: { xs: 2, sm: 4 },
          background: theme.palette.background.paper,
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        }}
      >
        <Typography
          variant="h4"
          align="center"
          fontWeight={700}
          color="primary"
          gutterBottom
          sx={{
            letterSpacing: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
          }}
        >
          <span
            role="img"
            aria-label="pie"
            style={{ fontSize: 28, lineHeight: 1 }}
          >
            🥧
          </span>
          Cooking School Dashboard
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Box
          sx={{
            mb: 3,
            background: theme.palette.student?.main,
            borderRadius: 2,
            p: 2,
          }}
        >
          <AddStudent />
        </Box>
        <Box
          sx={{
            mb: 3,
            background: theme.palette.studentList?.main,
            borderRadius: 2,
            p: 2,
          }}
        >
          <StudentList />
        </Box>
        <Box
          sx={{
            mb: 3,
            background: theme.palette.class?.main,
            borderRadius: 2,
            p: 2,
          }}
        >
          <AddClass />
        </Box>
        <Box
          sx={{
            mb: 3,
            background: theme.palette.classList?.main,
            borderRadius: 2,
            p: 2,
          }}
        >
          <ClassList />
        </Box>
        <Box
          sx={{
            mb: 3,
            background: theme.palette.register?.main,
            borderRadius: 2,
            p: 2,
          }}
        >
          <RegisterStudent />
        </Box>
        <Box
          sx={{
            background: theme.palette.registration?.main,
            borderRadius: 2,
            p: 2,
          }}
        >
          <RegistrationList />
        </Box>
      </Paper>
    </Box>
  );
}

export default Home;
