import { Button, Divider, Grid, Paper, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react'
import Form from '../form/form';
import InteractiveLogo from '../interactiveLogo/interactiveLogo';
import FormDialog from '../submit/submit';





const IndexCreateAccount = () => {
  const [accountSize, setAccountSize] = useState<number>(2000);
  const [evaluationType, setEvaluationType] = useState<string>('One step');
  const [toggleSelect, setToggleSelect] = useState('')
  const [updatedAccountSize, setUpdatedAccountSize] = useState('')
  const [updatedFee, setUpdatedFee] = useState('')

  useEffect(() => {
    if (accountSize === 2000) {
      setUpdatedAccountSize('$2,500');
    } else if (accountSize === 5000) {
      setUpdatedAccountSize('$5,000');
    } else if (accountSize === 10000) {
      setUpdatedAccountSize('$10,000');
    } else if (accountSize === 25000) {
      setUpdatedAccountSize('$25,000');
    } else if (accountSize === 100000) {
      setUpdatedAccountSize('$100,000');
    } else if (accountSize === 200000) {
      setUpdatedAccountSize('$200,000');
    }
  }, [accountSize]);


  const handleFeeUpdate = (accountSize, evaluationType) => {
    if (accountSize === 2000 && evaluationType === 'One step') {
      setUpdatedFee('$90');
    } else if (accountSize === 2000 && evaluationType === 'Two step') {
      setUpdatedFee('$50');
    } else if (accountSize === 5000 && evaluationType === 'One step') {
      setUpdatedFee('$145');
    } else if (accountSize === 5000 && evaluationType === 'Two step') {
      setUpdatedFee('$100');
    } else if (accountSize === 10000 && evaluationType === 'One step') {
      setUpdatedFee('$350');
    } else if (accountSize === 10000 && evaluationType === 'Two step') {
      setUpdatedFee('$200');
    } else if (accountSize === 25000 && evaluationType === 'One step') {
      setUpdatedFee('$500');
    } else if (accountSize === 25000 && evaluationType === 'Two step') {
      setUpdatedFee('$400');
    } else if (accountSize === 100000 && evaluationType === 'One step') {
      setUpdatedFee('$950');
    } else if (accountSize === 100000 && evaluationType === 'Two step') {
      setUpdatedFee('$750');
    } else if (accountSize === 200000 && evaluationType === 'One step') {
      setUpdatedFee('$1,850');
    } else if (accountSize === 200000 && evaluationType === 'Two step') {
      setUpdatedFee('$1,200');
    } else {
      setUpdatedFee('');
    }
  };
  
  useEffect(() => {
    handleFeeUpdate(accountSize, evaluationType);
  }, [accountSize, evaluationType]);

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
                <p>{updatedAccountSize}</p>
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
               <p>{updatedFee}</p>
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