import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import GTranslateIcon from '@mui/icons-material/GTranslate';

const translations = {
  en: {
    greeting: 'Welcome to Cooking School!',
    description: 'Learn, cook, and enjoy delicious recipes with us.',
    switch: 'Switch Language',
  },
  ar: {
    greeting: 'مرحبًا بكم في مدرسة الطبخ!',
    description: 'تعلم واطبخ واستمتع بأشهى الوصفات معنا.',
    switch: 'تغيير اللغة',
  },
};

function MultiLangContent() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  const handleLangChange = (_: any, newLang: 'en' | 'ar' | null) => {
    if (newLang) setLang(newLang);
  };

  const isArabic = lang === 'ar';

  return (
    <Box
      sx={{
        minHeight: '40vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f3f4f6',
        direction: isArabic ? 'rtl' : 'ltr',
        pt: 6,
      }}
    >
      <Paper
        elevation={3}
        sx={{ p: 4, minWidth: 320, borderRadius: 3, textAlign: 'center' }}
      >
        <ToggleButtonGroup
          value={lang}
          exclusive
          onChange={handleLangChange}
          sx={{ mb: 2 }}
        >
          <ToggleButton value="en">
            <GTranslateIcon sx={{ mr: 1 }} /> EN
          </ToggleButton>
          <ToggleButton value="ar">
            <GTranslateIcon sx={{ mr: 1 }} /> AR
          </ToggleButton>
        </ToggleButtonGroup>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          {translations[lang].greeting}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {translations[lang].description}
        </Typography>
        <TextField
          label={lang === 'en' ? 'Your message' : 'رسالتك'}
          placeholder={lang === 'en' ? 'Type something...' : 'اكتب شيئًا...'}
          fullWidth
          sx={{ mb: 2 }}
        />
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="dropdown-label">
            {lang === 'en' ? 'Select an option' : 'اختر خيارًا'}
          </InputLabel>
          <Select
            labelId="dropdown-label"
            id="dropdown"
            label={lang === 'en' ? 'Select an option' : 'اختر خيارًا'}
            defaultValue=""
            dir={isArabic ? 'rtl' : 'ltr'}
          >
            <MenuItem value="option1">
              {lang === 'en' ? 'Option 1' : 'الخيار الأول'}
            </MenuItem>
            <MenuItem value="option2">
              {lang === 'en' ? 'Option 2' : 'الخيار الثاني'}
            </MenuItem>
            <MenuItem value="option3">
              {lang === 'en' ? 'Option 3' : 'الخيار الثالث'}
            </MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="outlined"
          onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
        >
          {translations[lang].switch}
        </Button>
      </Paper>
    </Box>
  );
}

export default MultiLangContent;
