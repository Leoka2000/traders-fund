import React, { useState, useEffect } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Button, MenuItem, Select } from '@mui/material';

export default function ResponsiveLineChart() {

  const [data, setData] = useState([10, 20, 30, 40, 50, 60]);
  const [yAxisData, setYAxisData] = useState([20, 500, 200, 110, 200, 50]);
  const [selectedOption, setSelectedOption] = useState('Day');

  const handleDayButtonClick = () => {
    setData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    setYAxisData([2, 500, 200, 110, 200, 50, 60, 900, 300, 450, 700, 800]);
    setSelectedOption('Day');
  };

  const handleLastHourButtonClick = () => {
    setData([10, 20, 30, 40, 50, 60]);
    setYAxisData([20, 500, 200, 110, 200, 50]);
    setSelectedOption('Last Hour');
  };

  const handleMonthlyButtonClick = () => {
    setData([1, 2, 3, 4]);
    setYAxisData([200, 250, 300, 900]);
    setSelectedOption('Monthly');
  };

  return (
    <div id="chart-container" style={{ width: '100%' }}>
      <header className='flex justify-end'>
        <Button onClick={handleDayButtonClick}>Hourly</Button>
        <Button onClick={handleLastHourButtonClick}>Last Hour</Button>
        <Button onClick={handleMonthlyButtonClick}>Last Month</Button>
      </header>
      <LineChart
        xAxis={[{
          data: data,
        }]}
        series={[
          {
            data: yAxisData,
          },
        ]}
        className='w-full'
        height={330}
      />

    </div>
  );
}
