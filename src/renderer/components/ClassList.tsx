/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';

type ClassType = { id: number; name: string; description: string };

const ClassList: React.FC = () => {
  const [classes, setClasses] = useState<ClassType[]>([]);

  useEffect(() => {
    // Load classes from localStorage
    const stored = localStorage.getItem('classes');
    if (stored) {
      setClasses(JSON.parse(stored));
    } else {
      setClasses([]);
    }

    // Listen for changes to localStorage from other tabs/windows
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'classes') {
        setClasses(e.newValue ? JSON.parse(e.newValue) : []);
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  // Update list when a new class is added in this tab
  useEffect(() => {
    const interval = setInterval(() => {
      const stored = localStorage.getItem('classes');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (JSON.stringify(parsed) !== JSON.stringify(classes)) {
          setClasses(parsed);
        }
      }
    }, 500);
    return () => clearInterval(interval);
  }, [classes]);

  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Typography variant="h6" gutterBottom>
        Classes
      </Typography>
      <List>
        {classes.map((classObj) => (
          <ListItem key={classObj.id} divider>
            <ListItemText
              primary={classObj.name}
              secondary={classObj.description}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ClassList;
