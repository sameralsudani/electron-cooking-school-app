/* eslint-disable promise/always-return */
import React from 'react';
import { useHistory, Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTranslation, I18nextProvider } from 'react-i18next';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import { useAuth } from '../contexts/authContext';
import { doSignOut } from '../firebase/auth';
import i18n from '../i18n';

function Header() {
  const { userLoggedIn } = useAuth();
  const history = useHistory();
  const { t } = useTranslation();

  const handleLogout = () => {
    doSignOut()
      .then(() => {
        history.push('/');
      })
      .catch((error) => {
        // Optionally handle error
        console.error(error);
      });
  };

  const handleLangSwitch = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  };

  const isArabic = i18n.language === 'ar';
  return (
    <I18nextProvider i18n={i18n}>
      <AppBar
        position="fixed"
        color="default"
        elevation={2}
        sx={{
          zIndex: 1201,
          background: 'linear-gradient(90deg, #f3f4f6 0%, #e0e7ff 100%)',
          boxShadow: '0 2px 12px 0 rgba(31, 38, 135, 0.10)',
        }}
        dir={isArabic ? 'rtl' : 'ltr'}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            minHeight: 64,
            px: { xs: 1, sm: 4 },
          }}
          dir={isArabic ? 'rtl' : 'ltr'}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                background: '#7c3aed',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 2,
              }}
            >
              <GTranslateIcon sx={{ color: '#fff', fontSize: 24 }} />
            </Box>
            <Typography
              variant="h5"
              color="primary"
              sx={{ fontWeight: 900, letterSpacing: 1, userSelect: 'none' }}
            >
              {t('header.title', 'Cooking School')}
            </Typography>
          </Box>
          <Box sx={{ flexGrow: 0.15 }} />
          <Box
            sx={{ display: 'flex', alignItems: 'center', gap: 2, flexGrow: 1 }}
          >
            {userLoggedIn ? (
              <>
                <Button
                  color="primary"
                  component={RouterLink}
                  to="/todo"
                  variant="contained"
                  size="medium"
                  sx={{ fontWeight: 700, borderRadius: 2, px: 2 }}
                >
                  {t('header.todo', isArabic ? 'المهام' : 'TODO')}
                </Button>
                <Button
                  color="primary"
                  component={RouterLink}
                  to="/multilingualContent"
                  variant="contained"
                  size="medium"
                  sx={{ fontWeight: 700, borderRadius: 2, px: 2 }}
                >
                  {t(
                    'header.multilingual',
                    isArabic ? 'محتوى متعدد اللغات' : 'Multilingual Content',
                  )}
                </Button>
              </>
            ) : (
              <>
                <Button
                  color="primary"
                  component={RouterLink}
                  to="/"
                  variant="outlined"
                  size="medium"
                  sx={{ fontWeight: 700, borderRadius: 2, px: 2 }}
                >
                  {t('header.login', 'Login')}
                </Button>
                <Button
                  color="primary"
                  component={RouterLink}
                  to="/register"
                  variant="contained"
                  size="medium"
                  sx={{ fontWeight: 700, borderRadius: 2, px: 2 }}
                >
                  {t('header.register', 'Register New Account')}
                </Button>
              </>
            )}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {userLoggedIn && (
              <Button
                color="primary"
                variant="outlined"
                size="medium"
                onClick={handleLogout}
                sx={{ fontWeight: 700, borderRadius: 2, px: 2 }}
              >
                {t('header.logout', isArabic ? 'تسجيل الخروج' : 'Logout')}
              </Button>
            )}
            <Button
              color="primary"
              variant="outlined"
              size="medium"
              onClick={handleLangSwitch}
              startIcon={<GTranslateIcon />}
              sx={{
                fontWeight: 700,
                borderRadius: 2,
                px: 2,
                transition: 'background 0.2s',
                '&:hover': {
                  background: '#ede7f6',
                },
              }}
            >
              {t(
                'header.switchLang',
                i18n.language === 'en' ? 'العربية' : 'English',
              )}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </I18nextProvider>
  );
}

export default Header;
