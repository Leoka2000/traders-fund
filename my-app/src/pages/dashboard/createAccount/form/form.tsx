import React, {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AccountType from '../accountType/accountType';
import InteractiveLogo from '../interactiveLogo/interactiveLogo';

export default function Form() {
  const [accountSize, setAccountSize] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAccountSize(event.target.value);
  };
console.log(accountSize)
  return (
    <form>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="demo-simple-select-helper-label">Account size</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={accountSize}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'$2,500'}>$2,500</MenuItem>
          <MenuItem value={'$5,000'}>$5,000</MenuItem>
          <MenuItem value={'$10,000'}>$10,000</MenuItem>
          <MenuItem value={'$25,000'}>$25,000</MenuItem>
          <MenuItem value={'$50,000'}>$50,000</MenuItem>
          <MenuItem value={'$100,000'}>$100,000</MenuItem>
        </Select>
        <FormHelperText>USD currency</FormHelperText>

<AccountType/>


      </FormControl>
    </form>
  );
}
