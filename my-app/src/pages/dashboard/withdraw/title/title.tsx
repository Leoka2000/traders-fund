import { Container, Paper, Typography } from '@mui/material';
import React from 'react';

export const Title = () => {
  return (
    <React.Fragment>

      <div className="flex flex-col p-0 m-0 overflow-hidden">
        <Typography className='gradient' sx={{ fontSize: '1.5rem', fontWeight: 'bold' }} component={'h2'}>Request payout</Typography>
        <Typography sx={{ textAlign: "left", display: 'flex', justifyContent: 'center' }}>The global payroll solution by Traders Fund that allows you to withdraw your profits using a variety of payment methods.</Typography>
      </div>
      
    </React.Fragment>
  );
};
