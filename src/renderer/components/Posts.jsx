import React from 'react';
import { useTranslation, initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Inline translation resources
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        posts: {
          title: 'Vendor Names',
          columns: {
            itemcode: 'Item Code',
            name1: 'Name 1',
            price: 'Price',
            vendorname: 'Vendor Name',
            date: 'Date',
          },
          noData: 'No data available',
        },
      },
    },
    ar: {
      translation: {
        posts: {
          title: 'أسماء البائعين',
          columns: {
            itemcode: 'رمز الصنف',
            name1: 'الاسم 1',
            price: 'السعر',
            vendorname: 'اسم البائع',
            date: 'التاريخ',
          },
          noData: 'لا توجد بيانات متاحة',
        },
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

const postings = [
  {
    itemcode: 'A001',
    name1: 'Apple',
    price: 2.5,
    vendorname: 'FreshFruits',
    date: '2025-09-01',
  },
  {
    itemcode: 'B002',
    name1: 'Banana',
    price: 1.2,
    vendorname: 'TropicalFarms',
    date: '2025-08-30',
  },
  {
    itemcode: 'C003',
    name1: 'Carrot',
    price: 0.8,
    vendorname: 'VeggieWorld',
    date: '2025-08-28',
  },
];

function Posts() {
  const { t } = useTranslation();
  const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';
  // Multilingual columns
  const translatedColumns = [
    { id: 'itemcode', label: t('posts.columns.itemcode') },
    { id: 'name1', label: t('posts.columns.name1') },
    { id: 'price', label: t('posts.columns.price') },
    { id: 'vendorname', label: t('posts.columns.vendorname') },
    { id: 'date', label: t('posts.columns.date') },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#EEE',
        p: 2,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: direction === 'rtl' ? 'flex-end' : 'flex-start',
      }}
      dir={direction}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          color: 'primary.main',
          fontWeight: 700,
          width: '100%',
          textAlign: direction === 'rtl' ? 'right' : 'left',
        }}
      >
        {t('posts.title')}
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: 2,
          width: '100%',
          textAlign: direction === 'rtl' ? 'right' : 'left',
        }}
      >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: 'primary.main' }}>
              {translatedColumns.map((col) => (
                <TableCell
                  key={col.id}
                  sx={{
                    color: '#FFF',
                    fontWeight: 700,
                    textAlign: direction === 'rtl' ? 'right' : 'left',
                  }}
                >
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {postings.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={translatedColumns.length}
                  align={direction === 'rtl' ? 'right' : 'center'}
                >
                  {t('posts.noData')}
                </TableCell>
              </TableRow>
            ) : (
              postings.map((row, idx) => (
                <TableRow key={row.itemcode || idx}>
                  {translatedColumns.map((col) => (
                    <TableCell
                      key={col.id}
                      sx={{ textAlign: direction === 'rtl' ? 'right' : 'left' }}
                    >
                      {row[col.id]}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Posts;
