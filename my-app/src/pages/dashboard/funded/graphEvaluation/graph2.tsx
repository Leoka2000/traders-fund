import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import { LineChart } from '@mui/x-charts/LineChart';
import { Button } from '@mui/material';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AttachMoney from '@mui/icons-material/AttachMoney';
import PercentIcon from '@mui/icons-material/Percent';



export default function LineChartConnectNulls() {
  const [data, setData] = useState([4000, 3000, 2000, 1499, 1890, 2390]);
  const [xData, setXData] = useState(['Minute 10', 'Minute 20', 'Minute 30', 'Minute 40', 'Minute 50', 'Minute 60']);
  const [selectedOption, setSelectedOption] = useState('Last Hour');

  const [alignment, setAlignment] = React.useState<string | null>('left');

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setAlignment(newAlignment);
  };


  
  const handleLastHourButtonClick = () => {
    setData([4000, 3000, 2000, 1499, 1890, 2390]);
    setXData(['Minute 10', 'Minute 20', 'Minute 30', 'Minute 40', 'Minute 50', 'Minute 60']);
    setSelectedOption('Last Hour');
  };
  
  const handleDayButtonClick = () => {
    setData([4000, 3000, 2000, 3000, 1890, 239]);
    setXData(['4 Hour', '8 Hour', '12 Hour', '16 Hour', '20 Hour', '24 Hour']);
    setSelectedOption('Day');
  };

  const handleMonthlyButtonClick = () => {
    setData([1002, 300, 700, 400]);
    setXData(['1st Week', '2nd Week', '3rd Week', '4th Week']);
    setSelectedOption('Monthly');
  };
  const handleYearlyButtonClick = () => {
    setData([1002, 300, 700, 500, 1002, 300, 700, 300, 1002, 300, 700, 100]);
    setXData(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
    setSelectedOption('Monthly');
  };

  return (
    <Stack sx={{ width: '100%', height:'100%' }}>
      <header className='flex justify-between pb-3 overflow-hidden'>
        <div>
        <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      
      
      <ToggleButton value="left" aria-label="left aligned">
        <AttachMoney/>
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        <PercentIcon />
      </ToggleButton>
    </ToggleButtonGroup>
        </div>
      <div>
        <Button onClick={handleLastHourButtonClick}>Hour</Button>
        <Button onClick={handleDayButtonClick}>Day</Button>
        <Button onClick={handleMonthlyButtonClick}>Month</Button>
        <Button onClick={handleYearlyButtonClick}>Year</Button>
        </div>
      </header>
      <LineChart
        xAxis={[{ data: xData, scaleType: 'point' }]}
        series={[{ data, label: 'PnL%' }]}
       sx={{height:'100%'}}

      />


    </Stack>
  );
}






// 

