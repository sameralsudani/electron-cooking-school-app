import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const columns = [
  { id: 'itemcode', label: 'Item Code' },
  { id: 'name1', label: 'Name 1' },
  { id: 'price', label: 'Price' },
  { id: 'vendorname', label: 'Vendor Name' },
  { id: 'date', label: 'Date' },
];

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
  return (
    <Box sx={{ width: '100%', backgroundColor: '#EEE', p: 2, borderRadius: 2 }}>
      <Typography
        variant="h6"
        sx={{ mb: 2, color: 'primary.main', fontWeight: 700 }}
      >
        Inventory Data
      </Typography>
      <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: 'primary.main' }}>
              {columns.map((col) => (
                <TableCell key={col.id} sx={{ color: '#FFF', fontWeight: 700 }}>
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {postings.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  No data available
                </TableCell>
              </TableRow>
            ) : (
              postings.map((row, idx) => (
                <TableRow key={row.itemcode || idx}>
                  {columns.map((col) => (
                    <TableCell key={col.id}>{row[col.id]}</TableCell>
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
