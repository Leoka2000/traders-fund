import { FilledInput, FormControl, FormControlLabel, FormLabel, InputAdornment, InputLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React from 'react'
const gradientCSS = `
  .gradient {
    background-image: linear-gradient(90deg, rgba(109,29,166,0.8015581232492998) 25%, rgba(41,166,195,0.9164040616246498) 100%, rgba(33,9,121,0.36738445378151263) 100%);
  }
`;

export const Form = () => {

    return (
        <React.Fragment>

            <FormControl sx={{ overflow: 'hidden', pt: '1rem', }}  >
            <div className={gradientCSS}>
      <Typography  className='gradient' sx={{ fontSize: '1.45rem', fontWeight:'bold' }} component={'h2'}>Withdraw</Typography>
    </div>
                <FormLabel id="demo-radio-buttons-group-label" sx={{ fontSize: '1.25rem'}}>Select method</FormLabel>
                <RadioGroup sx={{ overflow: 'hidden', pb: '1rem' }}
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Bank transfer"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="Bank transfer" control={<Radio />} label="Bank transfer" />
                    <FormControlLabel value="Revolut" control={<Radio />} label="Revolut" />
                    <FormControlLabel value="Paypal" control={<Radio />} label="Paypal" />
                </RadioGroup>
            </FormControl>

            
          
           <FormControl  sx={{ maxWidth:'28rem'}} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
        
        </React.Fragment>
    )
}

