import React from 'react';
import {
  Box,
  Typography,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

function MultiLangContent() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'ar';
  const isArabic = i18n.language === 'ar';

  return (
    <Box
      sx={{
        marginTop: '60px',
        minHeight: '80vh',
        display: 'flex',
        direction: lang === 'ar' ? 'rtl' : 'ltr',
        pt: 6,
      }}
    >
      <Paper elevation={3} sx={{ p: 4, minWidth: 320, borderRadius: 3 }}>
        <Typography variant="h5" fontWeight={700} gutterBottom>
          {t(
            'multilang.greeting',
            lang === 'en'
              ? 'Welcome to Cooking School!'
              : 'مرحبًا بكم في مدرسة الطبخ!',
          )}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {t(
            'multilang.description',
            lang === 'en'
              ? 'Learn, cook, and enjoy delicious recipes with us.'
              : 'تعلم واطبخ واستمتع بأشهى الوصفات معنا.',
          )}
        </Typography>
        <TextField
          label={t(
            'multilang.messageLabel',
            lang === 'en' ? 'Your message' : 'رسالتك',
          )}
          placeholder={t(
            'multilang.messagePlaceholder',
            lang === 'en' ? 'Type something...' : 'اكتب شيئًا...',
          )}
          fullWidth
          sx={{ mb: 2 }}
        />
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="dropdown-label">
            {t(
              'multilang.selectOption',
              lang === 'en' ? 'Select an option' : 'اختر خيارًا',
            )}
          </InputLabel>
          <Select
            labelId="dropdown-label"
            id="dropdown"
            label={t(
              'multilang.selectOption',
              lang === 'en' ? 'Select an option' : 'اختر خيارًا',
            )}
            defaultValue=""
            dir={isArabic ? 'rtl' : 'ltr'}
            sx={
              isArabic
                ? {
                    textAlign: 'right',
                    '& .MuiSelect-icon': {
                      left: 8,
                      right: 'unset',
                    },
                  }
                : {}
            }
            MenuProps={
              isArabic
                ? {
                    PaperProps: {
                      sx: { direction: 'rtl', textAlign: 'right' },
                    },
                  }
                : {}
            }
          >
            <MenuItem value="option1">
              {t(
                'multilang.option1',
                lang === 'en' ? 'Option 1' : 'الخيار الأول',
              )}
            </MenuItem>
            <MenuItem value="option2">
              {t(
                'multilang.option2',
                lang === 'en' ? 'Option 2' : 'الخيار الثاني',
              )}
            </MenuItem>
            <MenuItem value="option3">
              {t(
                'multilang.option3',
                lang === 'en' ? 'Option 3' : 'الخيار الثالث',
              )}
            </MenuItem>
          </Select>
        </FormControl>
      </Paper>
    </Box>
  );
}

export default MultiLangContent;
