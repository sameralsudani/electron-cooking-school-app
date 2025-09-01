import React, { useState } from 'react';
import { Paper, TextField, Button, Typography, Box } from '@mui/material';

function AddStudent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Get current students from localStorage or fallback to empty array
    const students = JSON.parse(localStorage.getItem('students') || '[]');
    const newStudent = {
      id: Date.now(),
      name,
      email,
    };
    students.push(newStudent);
    localStorage.setItem('students', JSON.stringify(students));
    setName('');
    setEmail('');
  };

  return (
    <Paper sx={{ maxWidth: 400, margin: '2rem auto', p: 3 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Add Student
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
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
        <Button type="submit" variant="contained">
          Add Student
        </Button>
      </Box>
    </Paper>
  );
}

export default AddStudent;
