import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { i18n } = useTranslation();

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

  // Simple inline multilingual labels
  const lang = i18n && i18n.language === 'ar' ? 'ar' : 'en';
  const labels = {
    title: {
      en: 'Add Inventory Item',
      ar: 'إضافة عنصر للمخزون',
    },
    itemcode: {
      en: 'Item Code',
      ar: 'رمز الصنف',
    },
    name1: {
      en: 'Name 1',
      ar: 'الاسم 1',
    },
    price: {
      en: 'Price',
      ar: 'السعر',
    },
    vendorname: {
      en: 'Vendor Name',
      ar: 'اسم البائع',
    },
    date: {
      en: 'Date',
      ar: 'التاريخ',
    },
    submit: {
      en: 'Submit',
      ar: 'إرسال',
    },
  };
  const direction = lang === 'ar' ? 'rtl' : 'ltr';
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
        sx={{
          mb: 3,
          fontWeight: 700,
          color: 'primary.main',
          letterSpacing: 1,
          width: '100%',
          textAlign: direction === 'rtl' ? 'right' : 'left',
        }}
      >
        {labels.title[lang]}
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <Stack spacing={2.5}>
          <TextField
            label={labels.itemcode[lang]}
            name="itemcode"
            value={form.itemcode}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label={labels.name1[lang]}
            name="name1"
            value={form.name1}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label={labels.price[lang]}
            name="price"
            value={form.price}
            onChange={handleChange}
            type="number"
            required
            fullWidth
          />
          <TextField
            label={labels.vendorname[lang]}
            name="vendorname"
            value={form.vendorname}
            onChange={handleChange}
            required
            fullWidth
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label={labels.date[lang]}
              value={form.date ? dayjs(form.date) : null}
              onChange={(newValue) => {
                setForm((prev) => ({
                  ...prev,
                  date: newValue ? newValue.format('YYYY-MM-DD') : '',
                }));
              }}
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
            {labels.submit[lang]}
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
}

export default Form;
