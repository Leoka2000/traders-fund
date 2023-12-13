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
  fat: string,
) {
  return { name, calories, fat };
}

const rows = [
  createData('Target profit', '0%', 'x%'),
  createData('Profit target', '0%', '10%'),
  createData('Current drawdown', '0', 'x%'),
  createData('Remaining days', '123', '.'),
  
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Challenges table</TableCell>
            <TableCell align="right">Current status</TableCell>
            <TableCell align="right">Goal&nbsp;</TableCell>
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
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
         
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
