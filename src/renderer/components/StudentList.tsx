import React, { useState, useEffect } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

type Student = { id: number; name: string; email: string };

function StudentList() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    // Load students from localStorage
    const stored = localStorage.getItem('students');
    if (stored) {
      setStudents(JSON.parse(stored));
    } else {
      setStudents([]);
    }

    // Listen for changes to localStorage from other tabs/windows
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'students') {
        setStudents(e.newValue ? JSON.parse(e.newValue) : []);
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  // Update list when a new student is added in this tab
  useEffect(() => {
    const interval = setInterval(() => {
      const stored = localStorage.getItem('students');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (JSON.stringify(parsed) !== JSON.stringify(students)) {
          setStudents(parsed);
        }
      }
    }, 500);
    return () => clearInterval(interval);
  }, [students]);

  return (
    <TableContainer
      component={Paper}
      sx={{ maxWidth: 600, margin: '2rem auto' }}
    >
      <Typography variant="h5" sx={{ p: 2 }}>
        Students
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.id}</TableCell>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default StudentList;
