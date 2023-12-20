import { Button, Divider, Grid, Paper, Typography } from '@mui/material';
import React, { useState } from 'react'
import Form from '../form/form';
import InteractiveLogo from '../interactiveLogo/interactiveLogo';
import FormDialog from '../submit/submit';





const IndexCreateAccount = () => {
  const [accountSize, setAccountSize] = useState<number>(2000);
  const [evaluationType, setEvaluationType] = useState<string>('One step');
  const [toggleSelect, setToggleSelect] = useState('')



  return (
    <React.Fragment>
      <InteractiveLogo />
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
            {/* passing */}
            <Form
              onEvaluationType={evaluationType}
              onEvaluationTypeChange={setEvaluationType}
              onAccountSize={accountSize}
              onAccountSizeChange={setAccountSize}
              onToggleSelectChange={setToggleSelect}
              onToggleSelect={toggleSelect} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={5}>
          <Paper

            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 'auto',
            }}>

            <div>
              <div className='flex justify-between mb-1'>
                <p>Trading capital:</p>
                {accountSize === 2000 ? (
                  <p className='font-extrabold'>$2,000</p>
                ) : accountSize === 5000 ? (
                  <p className='font-extrabold'>$5,000</p>
                ) : accountSize === 10000 ? (
                  <p className='font-extrabold'>$10,000</p>
                ) : accountSize === 25000 ? (
                  <p className='font-extrabold'>$25,000</p>
                ) : accountSize === 100000 ? (
                  <p className='font-extrabold'>$100,000</p>
                ) : accountSize === 200000 ? (
                  <p className='font-extrabold'>$200,000</p>
                ) :
                  <p></p>}
              </div>
              <div className='flex justify-between mb-1'>
                <p>Evaluation type:</p>
                <p className='font-extrabold'>{evaluationType}</p>
              </div>
              <div className='flex justify-between'>
                <p>Evaluation period:</p>
                {evaluationType === 'One step' ? (
                  <p className='font-extrabold'>3 months</p>
                ) : evaluationType === 'Two step' ? (
                  <p className='font-extrabold'>2x3 months</p>
                ) : (
                  <p></p>
                )}
              </div>

              <Divider sx={{ mb: "1rem", mt: "1rem" }} />
              <div className='flex justify-between mb-1'>
                <p>Profit target:</p>
                {evaluationType === 'One step' ? (
                  <p className='font-extrabold'>10%</p>
                ) : evaluationType === 'Two step' ? (

                  <div className='flex flex-col'>
                    <p className='font-extrabold text-right'>First step: 7,5%</p>
                    <p className='font-extrabold'>Second step: 5%</p>
                  </div>
                ) : (
                  <p></p>
                )}
              </div>
              <div className='flex justify-between mb-1'>
                <p>Profit split:</p>
                {evaluationType === 'One step' ? (
                  <p className='font-extrabold'>75%</p>
                ) : evaluationType === 'Two step' ? (
                  <p className='font-extrabold'>85%</p>
                ) : (
                  <p></p>
                )}
              </div>
              <div className='flex justify-between mb-1'>
                <p>Maximun drawdown:</p>
                <p className='font-extrabold'>10%</p>
              </div>
            </div>
            <Divider sx={{ mb: "1rem", mt: "1rem" }} />
            <div className='mb-3'>
              <div className='flex justify-between mb-1'>
                <p>Minumun trading days:</p>
                <p className='font-extrabold'>7 days</p>
              </div>
              <div className='flex justify-between mb-1'>
                <p>Maximun drawdown:</p>
                <p>10%</p>
              </div>
              <div className='flex justify-between mb-1'>
                <p>One time fee:</p>
                {accountSize === 2000 && evaluationType === 'One step' ? (
                  <p className='font-extrabold'>$90</p>
                ) : accountSize === 2000 && evaluationType === 'Two step' ? (
                  <p className='font-extrabold'>$50</p>
                ) :
                  accountSize === 5000 && evaluationType === 'One step' ? (
                    <p className='font-extrabold'>$145</p>
                  ) :
                    accountSize === 5000 && evaluationType === 'Two step' ? (
                      <p className='font-extrabold'>$100</p>
                    ) :
                      accountSize === 10000 && evaluationType === 'One step' ? (
                        <p className='font-extrabold'>$350</p>
                      ) :
                        accountSize === 10000 && evaluationType === 'Two step' ? (
                          <p className='font-extrabold'>$200</p>
                        ) :
                          accountSize === 25000 && evaluationType === 'One step' ? (
                            <p className='font-extrabold'>$500</p>
                          ) :
                            accountSize === 25000 && evaluationType === 'Two step' ? (
                              <p className='font-extrabold'>$400</p>
                            ) :
                              accountSize === 100000 && evaluationType === 'One step' ? (
                                <p className='font-extrabold'>$950</p>
                              ) :
                                accountSize === 100000 && evaluationType === 'Two step' ? (
                                  <p className='font-extrabold'>$750</p>
                                ) :
                                  accountSize === 200000 && evaluationType === 'One step' ? (
                                    <p className='font-extrabold'>$1,850</p>
                                  ) :
                                    accountSize === 200000 && evaluationType === 'Two step' ? (
                                      <Typography noWrap className='font-extrabold'>$1,200</Typography>
                                    ) : <p></p>}
              </div>
            </div>

            <FormDialog  onAccountSize={accountSize} />

          </Paper>

        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default IndexCreateAccount