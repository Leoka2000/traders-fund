import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

import { Link } from 'react-router-dom';
import Chart from '../graph/graph';
import TickNumber from '../graph/graph';
import Deposits from '../details/details';
import BasicTable from '../details/details';
import PieColor from '../pie/pie';
import ScrollableTabsButtonPrevent from '../tabs/tabs';
import AccountInformation from '../accountInformation/accountInformation';
import ResponsiveLineChart from '../graph2/graph2';
import LineChartConnectNulls from '../graph/graph';

type Props = {}

const IndexFunded = (props: Props) => {

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
        <Grid item xs={12} md={8} lg={7}>

          <Paper sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 400,
            justifyContent: 'center'
          }}>
            <LineChartConnectNulls/>

          </Paper>
        </Grid>



        <Grid item xs={12} md={4} lg={5}>
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 400,
            }}>

            <BasicTable />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <PieColor />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ display: 'flex', justifyContent: 'center', p:'2rem' }}>
<AccountInformation/>
          </Paper>
        </Grid>
      </Grid>
      <Copyright sx={{ pt: 4 }} />
    </React.Fragment>
  )
}

export default IndexFunded