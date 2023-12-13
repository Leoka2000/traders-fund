import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';

const pieParams = { height: 200, margin: { right: 5 } };
const palette = ['grey', 'white', 'darkgrey'];

export default function PieColor() {
  return (
    <Stack direction="row" width="100%" textAlign="center" spacing={2}>
      <Box flexGrow={1}>
        <Typography className='gradient' sx={{fontWeight:'900', fontSize:'1.05rem', letterSpacing:'0.6px'}}>Asset class</Typography>
        <PieChart
         colors={palette}
          series={[{ data: [{ value: 10 }, { value: 15 }, { value: 20 }] }]}
          {...pieParams}
        />
      </Box>
      <Box flexGrow={1}>
        <Typography className='gradient' sx={{fontWeight:'900', fontSize:'1.05rem', letterSpacing:'0.6px'}}>Industry</Typography>
        <PieChart
          colors={palette}
          series={[{ data: [{ value: 30 }, { value: 15 }, { value: 20 }] }]}
          {...pieParams}
        />
      </Box>
      <Box flexGrow={1}>
        <Typography className='gradient' sx={{fontWeight:'900', fontSize:'1.05rem', letterSpacing:'0.6px'}}>Currency</Typography>
        <PieChart
         colors={palette}
          series={[
            { data: [{ value: 2 }, { value: 9 }, { value: 20 }] },
          ]}
          {...pieParams}
        />
      </Box>
    </Stack>
  );
}