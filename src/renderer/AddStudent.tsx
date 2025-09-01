/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const AddStudent: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      // Add your addStudent logic here
      setName('');
      setEmail('');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ mb: 2, display: 'flex', gap: 2 }}
    >
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        type="email"
      />
      <Button type="submit" variant="contained" color="primary">
        Add Student
      </Button>
    </Box>
  );
};

export default AddStudent;
