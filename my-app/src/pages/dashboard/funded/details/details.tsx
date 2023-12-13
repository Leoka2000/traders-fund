import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  calories: string,
) {
  return { name, calories };
}

const rows = [
  createData('Account value', '$21931'),
  createData('Lifetime performance', '$23902'),
  createData('Annual performance', '$we9wmsd'),
  createData('Daily', 'kdsksd'),
  createData('Profit split', '9342%'),
  createData('Account lifetime', '939122839%'),
  createData('Account status', 'suspended'),

];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight:'900', fontSize:'1.05rem', letterSpacing:'0.6px'}} className='gradient'>Portfolio overview</TableCell>
            <TableCell sx={{fontWeight:'900', fontSize:'1.05rem', letterSpacing:'0.6px'}} className='gradient' align="right">Your details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">${row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}