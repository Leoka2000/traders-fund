
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Box, Card, Stack, Typography } from '@mui/material';
import './pie.css'

const palette = ['#8BC8CCff', '#607d8b', 'gray'];

export default function PieActiveArc() {
  return (
    <Stack className='myStyle' direction="row" width="100%" justifyContent={'space-between'} textAlign="center" spacing={2}>
    <Box sx={{gap:'1rem', width:'6rem', display:'flex', flexDirection:'column'}} flexGrow={1}>
      <Typography noWrap className='py-1 border rounded-lg border-neutral-600'>Asset Class</Typography>
        <PieChart

          colors={palette}
          series={[
            {
              data: [
                { id: 0, value: 10, label: 'Stocks' },
                { id: 1, value: 15, label: 'Energy' },
               
              ],
            
            },
          ]}
          height={200}
          className='mychart'


        />
      </Box>
      <Box sx={{gap:'1rem', display:'flex',width:'10rem', flexDirection:'column'}} flexGrow={1}>
      <Typography noWrap className='py-1 border rounded-lg border-neutral-600'>Perfomance by sector</Typography>
        <PieChart
    className='mychart'
          colors={palette}
       
          series={[
            {
              data: [
                { id: 0, value: 10, label: 'Energy' },
                { id: 1, value: 15, label: 'Technology' },
              
              ],
           
            
            },
          ]}
          height={200}
        />
      </Box>
      
      <Box sx={{gap:'1rem', display:'flex',width:'10rem', flexDirection:'column'}} flexGrow={1}>
      <Typography noWrap className='py-1 border rounded-lg border-neutral-600'>Industry</Typography>
        <PieChart

          colors={palette}
          series={[
            {
              data: [
                { id: 0, value: 10, label: 'Computer' },
                { id: 1, value: 15, label: 'Oil&gas' },
               
              ],
             
            
            },
          ]}
          className='mychart'
          sx={{fontSize:'0.9rem'}}
          height={200}
       
        />
      </Box>
    </Stack>
  );
} 