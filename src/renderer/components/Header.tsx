/* eslint-disable promise/always-return */
import React from 'react';
import { useHistory, Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
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

  const isArabic = i18n.language === 'ar';
  return (
    <AppBar
      position="fixed"
      color="transparent"
      elevation={0}
      sx={{
        zIndex: 1201,
        background: 'rgba(255,255,255,0.75)',
        backdropFilter: 'blur(12px)',
        borderRadius: 4,
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        mx: { xs: 0, sm: 2 },
        mt: 2,
        px: 2,
      }}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          minHeight: 72,
          px: { xs: 1, sm: 4 },
        }}
        dir={isArabic ? 'rtl' : 'ltr'}
      >
        <Box
          component={RouterLink}
          to="/home"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'transform 0.2s',
            '&:hover': { transform: 'scale(1.04)' },
          }}
        >
          <Box
            sx={{
              width: 44,
              height: 44,
              background: 'linear-gradient(135deg, #7c3aed 60%, #6366f1 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 2,
              boxShadow: '0 2px 8px 0 rgba(124,58,237,0.15)',
            }}
          >
            <RestaurantMenuIcon sx={{ color: '#fff', fontSize: 28 }} />
          </Box>
          <Typography
            variant="h5"
            color="primary"
            sx={{
              fontWeight: 900,
              letterSpacing: 1,
              userSelect: 'none',
              textShadow: '0 1px 8px #e0e7ff',
            }}
          >
            {t('header.title', isArabic ? 'مدرسة الطبخ' : 'Cooking School')}
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
                sx={{
                  fontWeight: 700,
                  borderRadius: 2,
                  px: 2,
                  boxShadow: '0 2px 8px 0 rgba(124,58,237,0.10)',
                }}
              >
                {t('header.todo', isArabic ? 'المهام' : 'TODO')}
              </Button>
              <Button
                color="primary"
                component={RouterLink}
                to="/multilingualContent"
                variant="contained"
                size="medium"
                sx={{
                  fontWeight: 700,
                  borderRadius: 2,
                  px: 2,
                  boxShadow: '0 2px 8px 0 rgba(99,102,241,0.10)',
                }}
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
                {t('header.login', isArabic ? 'تسجيل الدخول' : 'Login')}
              </Button>
              <Button
                color="primary"
                component={RouterLink}
                to="/register"
                variant="contained"
                size="medium"
                sx={{ fontWeight: 700, borderRadius: 2, px: 2 }}
              >
                {t(
                  'header.register',
                  isArabic ? 'تسجيل حساب جديد' : 'Register New Account',
                )}
              </Button>
            </>
          )}
        </Box>
        <Box sx={{ height: 48, mx: 2, display: { xs: 'none', sm: 'block' } }}>
          <Box sx={{ borderLeft: '1.5px solid #e0e7ff', height: '100%' }} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {userLoggedIn && (
            <Button
              color="primary"
              variant="outlined"
              size="medium"
              onClick={handleLogout}
              sx={{
                fontWeight: 700,
                borderRadius: 2,
                px: 2,
                background: 'rgba(236,239,255,0.7)',
              }}
            >
              {t('header.logout', isArabic ? 'تسجيل الخروج' : 'Logout')}
            </Button>
          )}
          <Box sx={{ minWidth: 120 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <GTranslateIcon color="primary" />
              <select
                value={i18n.language}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
                style={{
                  fontWeight: 700,
                  borderRadius: 8,
                  padding: '6px 16px',
                  border: '1.5px solid #e0e7ff',
                  background: 'rgba(236,239,255,0.7)',
                  color: '#1e293b',
                  outline: 'none',
                  fontSize: 16,
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
              >
                <option value="ar">العربية</option>
                <option value="en">English</option>
              </select>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
