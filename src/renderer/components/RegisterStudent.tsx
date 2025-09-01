import React, { useState } from 'react';
import {
  Box,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';

const dummyStudents = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];
const dummyClasses = [
  { id: 1, name: 'Baking Basics' },
  { id: 2, name: 'Advanced Pastry' },
];

function RegisterStudent() {
  const [studentId, setStudentId] = useState('');
  const [classId, setClassId] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (studentId && classId) {
      // Add your registration logic here
      setStudentId('');
      setClassId('');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleRegister}
      sx={{ mb: 2, display: 'flex', gap: 2 }}
    >
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="student-label">Student</InputLabel>
        <Select
          labelId="student-label"
          value={studentId}
          label="Student"
          onChange={(e) => setStudentId(e.target.value)}
          required
        >
          {dummyStudents.map((student) => (
            <MenuItem key={student.id} value={student.id}>
              {student.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel id="class-label">Class</InputLabel>
        <Select
          labelId="class-label"
          value={classId}
          label="Class"
          onChange={(e) => setClassId(e.target.value)}
          required
        >
          {dummyClasses.map((cls) => (
            <MenuItem key={cls.id} value={cls.id}>
              {cls.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Register
      </Button>
    </Box>
  );
}

export default RegisterStudent;
