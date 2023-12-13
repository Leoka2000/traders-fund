import * as React from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Typography } from '@material-ui/core';
import { Divider } from '@mui/material';

import './accountType.css'
export default function AccountType() {
  const [view, setView] = React.useState('list');

  const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
    setView(nextView);
  };

  return (
    <ToggleButtonGroup
      orientation="vertical"
      value={view}
      exclusive
      sx={{ mt: '1rem' }}
      onChange={handleChange}

    >
      <ToggleButton sx={{ display: 'flex', flexDirection: 'column' }} value="list" aria-label="list">
        <div className='flex flex-col items-start pb-3'>
          <p className='text-lg font-medium lowercase'>One step</p>
          <p className='text-base font-light lowercase'>Pass a one step evaluation challange and get funded in 30 days</p>
        </div>
        <ul className='flex flex-col items-start w-full'>
          <li className='text-base font-size lowercase'>- 75% Profit split</li>
          <li className='text-base font-size lowercase'>- 3 month evaluation period</li>
          <li className='text-base font-size lowercase'>- Weekly withdrawals</li>
          <li className='text-base font-size lowercase'>- Trade stocks, commodities, crypto and more</li>
        </ul>
        <Divider />
        <div>

        </div>
      </ToggleButton>
      <ToggleButton sx={{ display: 'flex', flexDirection: 'column' }} value="module" aria-label="module">
        <div className='flex flex-col items-start pb-3'>
          <p className='text-lg  font-medium lowercase'>Two step</p>
          <p className='text-base font-light lowercase'>Pass our two step evaluation challange and maximise your profits.</p>
        </div>
        <ul className='flex flex-col items-start w-full'>
          <li className='text-base font-size lowercase'>- 85% Profit split</li>
          <li className='text-base font-size lowercase'>- 2x3 month evaluation period</li>
          <li className='text-base font-size lowercase'>- Weekly withdrawals</li>
          <li className='text-base font-size lowercase'>- Trade stocks, commodities, crypto and more</li>
        </ul>
        <Divider />
      </ToggleButton>

     

    </ToggleButtonGroup>
  );
}