import { Grid, Paper, Typography } from '@mui/material';
import React from 'react'

import Deposits from '../details';
import CustomizedTables from '../challenges/index'
import { Link } from 'react-router-dom';
import BasicLineChart from '../../funded/graph2/graph2';
import ScrollableTabsButtonPrevent from '../../funded/tabs/tabs'

type Props = {}

const Index = (props: Props) => {

  function Copyright(props: any) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" to="/">
          Traders Fund
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  return (
    <React.Fragment>
       <Grid container spacing={3}>
       <Grid item xs={12} md={8} lg={20}>
          <Paper sx={{ display: 'flex', justifyContent: 'center' }}>
            <ScrollableTabsButtonPrevent />
          </Paper>
        </Grid>
<Grid item xs={12} md={8} lg={9}>

  <Paper
    sx={{
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: 400,
    }}
  >
    {/* <FloatingActionButtonZoom /> */}
    <BasicLineChart />
  </Paper>
</Grid>



<Grid item xs={12} md={4} lg={3}>
  <Paper
    sx={{
      p: 2,
      display: 'flex',
      flexDirection: 'column',
     
      
      height: 400,
    }}>

    <Deposits />
  </Paper>
</Grid>

<Grid item xs={12}>
  <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
    <CustomizedTables />
  </Paper>
</Grid>
</Grid>
<Copyright sx={{ pt: 4 }} />
    </React.Fragment>
  )
}

export default Index