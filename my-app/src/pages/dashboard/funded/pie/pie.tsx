import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';

const pieParams = { height: 200};
const palette = ['cyan', 'white', 'black'];

export default function PieColor() {
  return (
    <Stack direction="row" width="100%" textAlign="center" >
      <Box flexGrow={1}>
       
        <PieChart
         colors={palette}
          series={[{ data: [{ value: 10,  label:'label 1' }, { value: 15,  label:'label 2' }, { value: 20,  label:'label 3' }] }]}
          {...pieParams}
        />
      </Box>
      <Box flexGrow={1}>

        <PieChart
          colors={palette}
          series={[{ data: [{ value: 30,  label:'label 1' }, { value: 15,  label:'label 2' }, { value: 20,  label:'label 3' }] }]}
          {...pieParams}
        />
      </Box>
      <Box flexGrow={1}>

        <PieChart
         colors={palette}
          series={[
            { data: [{ value: 2, label:'label 1' }, { value: 9,  label:'label 2' }, { value: 20,  label:'label 3' }] },
          ]}
          {...pieParams}
        />
      </Box>
    </Stack>
  );
}