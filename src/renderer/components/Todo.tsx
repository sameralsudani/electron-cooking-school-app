import React, { useEffect, useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Stack,
} from '@mui/material';
import { useAuth } from '../contexts/authContext';
import { createTodo, getAllTodo } from '../firebase/crud';

type TodoType = {
  id: string;
  title: string;
  description: string;
};

function Todo() {
  const { currentUser } = useAuth();
  const [todos, setTodos] = useState<TodoType[]>([]);
  const [newTodo, setNewTodo] = useState({
    title: '',
    description: '',
  });
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const result = await getAllTodo();
        // Assuming result is { todos: TodoType[] }
        setTodos((result as { todos: any[] }).todos);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, [update]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTodo({
      ...newTodo,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createTodo(newTodo);
      setNewTodo({
        title: '',
        description: '',
      });
      setUpdate(!update);
    } catch (error) {
      console.error('error fetching todos:', error);
    }
  };

  return (
    <Box sx={{ pt: 10, minHeight: '100vh', background: '#f3f4f6' }}>
      <Paper elevation={3} sx={{ maxWidth: 600, mx: 'auto', p: 4, mt: 4 }}>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          Hello{' '}
          {currentUser?.displayName
            ? currentUser?.displayName
            : currentUser?.email}
          , you are now logged in.
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: 'flex', gap: 2, py: 2, alignItems: 'center' }}
        >
          <TextField
            label="Title"
            name="title"
            value={newTodo.title}
            onChange={handleInputChange}
            required
            size="small"
            sx={{ flex: 1 }}
          />
          <TextField
            label="Description"
            name="description"
            value={newTodo.description}
            onChange={handleInputChange}
            required
            size="small"
            sx={{ flex: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ height: 40 }}
          >
            Add Todo
          </Button>
        </Box>
        <Stack spacing={2} sx={{ mt: 3 }}>
          {todos?.map((todo) => (
            <Card
              key={todo.id}
              sx={{ background: '#7c3aed', color: '#fff', borderRadius: 2 }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {todo.title}
                </Typography>
                <Typography variant="body1" fontWeight={400}>
                  {todo.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Paper>
    </Box>
  );
}

export default Todo;
