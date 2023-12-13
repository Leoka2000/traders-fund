import { Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import Form from '../form/form';
import InteractiveLogo from '../interactiveLogo/interactiveLogo';

type Props = {}

const Index = (props: Props) => {

  

  return (
    <React.Fragment>
      <InteractiveLogo/>
       <Grid container spacing={3}>
<Grid item xs={12} md={8} lg={7}>

  <Paper
    sx={{
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      height: 'auto',
    }}
  >
    
    <Form />
  </Paper>
</Grid>



<Grid item xs={12} md={4} lg={5}>
  <Paper
    sx={{
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      height: 285,
    }}>

    {/* <Deposits /> */}
  </Paper>
</Grid>

</Grid>
    </React.Fragment>
  )
}

export default Index