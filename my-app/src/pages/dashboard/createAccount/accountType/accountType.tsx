import * as React from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Typography } from '@material-ui/core';
import { Divider, Paper } from '@mui/material';

import './accountType.css'
export default function AccountType(
  { evaluationTypeProps, setEvaluationTypeProps }
) {

  const [alignment, setAlignment] = React.useState('One step');

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
    setEvaluationTypeProps(newAlignment); // Assuming you want to set the newAlignment value
  };

  return (
    <Paper>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        sx={{ width: '100%' }}
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton sx={{ width: '100%' }} value="One step">One step</ToggleButton>
        <ToggleButton sx={{ width: '100%' }} value="Two step">Two step</ToggleButton>
      </ToggleButtonGroup>
      <div className='flex w-full'>
        <div className='flex flex-col p-3'>
          <div className='flex flex-col items-start pb-3'>
            <p className='text-lg font-medium'>One step</p>
            <p className='text-base font-light'>Pass a one step evaluation challange and get funded in 30 days</p>
          </div>
          <ul className='flex flex-col items-start w-full'>
            <li className='text-base font-size'>- 75% Profit split</li>
            <li className='text-base font-size'>- 3 month evaluation period</li>
            <li className='text-base font-size'>- Weekly withdrawals</li>
            <li className='text-base font-size'>- Trade stocks, commodities, crypto and more</li>
          </ul>
        </div>
        <div className='flex flex-col p-3'> <div className='flex flex-col items-start pb-3'>
          <p className='text-lg font-medium lowercase'>Two step</p>
          <p className='text-base font-light lowercase'>Pass our two step evaluation challange and maximise your profits.</p>
        </div>
          <ul className='flex flex-col items-start w-full'>
            <li className='text-base font-size'>- 85% Profit split</li>
            <li className='text-base font-size'>- 2x3 month evaluation period</li>
            <li className='text-base font-size'>- Weekly withdrawals</li>
            <li className='text-base font-size'>- Trade stocks, commodities, crypto and more</li>
          </ul>
        </div>
      </div>
    </Paper>
  );
}


{/*  
      <ToggleButtonGroup
        orientation="vertical"
        value={view}
        exclusive
        sx={{ mt: '1rem' }}
        onChange={handleChange}

      >
       
        <ToggleButton  sx={{ display: 'flex', flexDirection: 'column' }} value="One step" aria-label="list">
          <div className='flex flex-col items-start pb-3'>
            <p className='text-lg font-medium lowercase'>One step</p>
            <p className='text-base font-light lowercase'>Pass a one step evaluation challange and get funded in 30 days</p>
          </div>
          <ul className='flex flex-col items-start w-full'>
            <li className='text-base lowercase font-size'>- 75% Profit split</li>
            <li className='text-base lowercase font-size'>- 3 month evaluation period</li>
            <li className='text-base lowercase font-size'>- Weekly withdrawals</li>
            <li className='text-base lowercase font-size'>- Trade stocks, commodities, crypto and more</li>
          </ul>
        </ToggleButton>
        <Divider />
        <ToggleButton sx={{ display: 'flex', flexDirection: 'column' }} value="Two step" aria-label="module">
          <div className='flex flex-col items-start pb-3'>
            <p className='text-lg font-medium lowercase'>Two step</p>
            <p className='text-base font-light lowercase'>Pass our two step evaluation challange and maximise your profits.</p>
          </div>
          <ul className='flex flex-col items-start w-full'>
            <li className='text-base lowercase font-size'>- 85% Profit split</li>
            <li className='text-base lowercase font-size'>- 2x3 month evaluation period</li>
            <li className='text-base lowercase font-size'>- Weekly withdrawals</li>
            <li className='text-base lowercase font-size'>- Trade stocks, commodities, crypto and more</li>
          </ul>
        </ToggleButton>
        <Divider />
      </ToggleButtonGroup>
      */}