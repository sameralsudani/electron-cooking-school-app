/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const AddClass: React.FC = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && description) {
      // Get current classes from localStorage or fallback to empty array
      const classes = JSON.parse(localStorage.getItem('classes') || '[]');
      const newClass = {
        id: Date.now(),
        name,
        description,
      };
      classes.push(newClass);
      localStorage.setItem('classes', JSON.stringify(classes));
      setName('');
      setDescription('');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ mb: 2, display: 'flex', gap: 2 }}
    >
      <TextField
        label="Class Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Add Class
      </Button>
    </Box>
  );
};

export default AddClass;
