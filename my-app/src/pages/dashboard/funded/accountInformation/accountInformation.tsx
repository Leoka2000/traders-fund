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
  createData('Broker', '...'),
  createData('Account type', 'One step / Two step'),
  createData('Account ID', '8923474598'),
  createData('Eligible withdrawal', '$93189232,2392913.00'),
  createData('Weekly withdrawal', '$1289,2302.00'),
  createData('Daily withdrawal', '$8932,2832.00'),

];

export default function AccountInformation() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight:'900', fontSize:'1.05rem', letterSpacing:'0.6px', color:"#8BC8CCff"}}>Account information</TableCell>
            <TableCell align="right" sx={{fontWeight:'900', fontSize:'1.05rem', letterSpacing:'0.6px', color:"#8BC8CCff"}}>Your details</TableCell>
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