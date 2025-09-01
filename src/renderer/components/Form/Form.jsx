import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

function Form() {
  const [form, setForm] = useState({
    itemcode: '',
    name1: '',
    price: '',
    vendorname: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Paper
      elevation={6}
      sx={{
        p: 4,
        borderRadius: 3,
        boxShadow: '0 8px 32px 0 rgba(63,81,181,0.15)',
      }}
    >
      <Typography
        variant="h5"
        sx={{ mb: 3, fontWeight: 700, color: 'primary.main', letterSpacing: 1 }}
      >
        Add Inventory Item
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <Stack spacing={2.5}>
          <TextField
            label="Item Code"
            name="itemcode"
            value={form.itemcode}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Name 1"
            name="name1"
            value={form.name1}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Price"
            name="price"
            value={form.price}
            onChange={handleChange}
            type="number"
            required
            fullWidth
          />
          <TextField
            label="Vendor Name"
            name="vendorname"
            value={form.vendorname}
            onChange={handleChange}
            required
            fullWidth
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date"
              value={form.date ? dayjs(form.date) : null}
              onChange={(newValue) => {
                setForm((prev) => ({
                  ...prev,
                  date: newValue ? newValue.format('YYYY-MM-DD') : '',
                }));
              }}
              slotProps={{ textField: { required: true, fullWidth: true } }}
            />
          </LocalizationProvider>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              py: 1.2,
              fontWeight: 600,
              fontSize: '1.1rem',
              borderRadius: 2,
              boxShadow: '0 2px 8px 0 rgba(63,81,181,0.10)',
              textTransform: 'none',
              letterSpacing: 0.5,
            }}
          >
            Submit
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}

export default Form;
