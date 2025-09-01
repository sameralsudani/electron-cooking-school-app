/* eslint-disable react/function-component-definition */
import React from 'react';
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

const dummyRegistrations = [
  { id: '1', student: 'Alice', className: 'Baking Basics' },
  { id: '2', student: 'Bob', className: 'Advanced Pastry' },
];

const RegistrationList: React.FC = () => (
  <Paper sx={{ p: 2, mb: 2 }}>
    <Typography variant="h6" gutterBottom>
      Registrations
    </Typography>
    <List>
      {dummyRegistrations.map((reg) => (
        <ListItem key={reg.id} divider>
          <ListItemText primary={reg.student} secondary={reg.className} />
        </ListItem>
      ))}
    </List>
  </Paper>
);

export default RegistrationList;
