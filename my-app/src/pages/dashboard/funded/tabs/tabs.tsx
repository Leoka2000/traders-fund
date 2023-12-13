import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function ScrollableTabsButtonVisible() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: { xs: 320, sm: 480 },
        bgcolor: 'background.paper',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}
      >
        <Tab label="Account 1" />
        <Tab label="Account 2"/>
        <Tab label="Account 3" />
        <Tab label="Account 4" />
        <Tab label="Account 5" />
        <Tab label="Account 6" />
        <Tab label="Account 7" />
      </Tabs>
    </Box>
  );
}