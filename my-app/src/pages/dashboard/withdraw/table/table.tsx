
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
  return { name, calories};
}

const rows = [
  createData('Daily remaining payout limit', "$1,000.00"),
  createData('Remaining weekly payout limit', "$5,000.00"),
  
 
];

export default function BasicTable() {
  return (
    <TableContainer  component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Withdraw limits</TableCell>
            <TableCell align="right"></TableCell>
      
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
          
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}