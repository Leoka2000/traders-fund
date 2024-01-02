import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AccountType from '../accountType/accountType';
import InteractiveLogo from '../interactiveLogo/interactiveLogo';
import { Divider, ToggleButton, ToggleButtonGroup } from '@mui/material';

interface RegistryFilterProps {
  onAccountSize: number;
  onEvaluationType: string;
  onEvaluationTypeChange: (registry: string) => void;
  onAccountSizeChange: (registry: number) => void;
  onToggleSelectChange: (registry: string) => void;


}

export default function Form({
  onAccountSize, onAccountSizeChange,
  onToggleSelectChange, onToggleSelect,
  onEvaluationType, onEvaluationTypeChange
}) {
  const [accountSize, setAccountSize] = useState('');
  const [view, setView] = React.useState('');




  const handleChange = (event: SelectChangeEvent) => {
    setAccountSize(event.target.value);
    onAccountSizeChange(event.target.value)
  };
  // console.log(accountSize)
  return (
    <form className='w-full'>
      <FormControl sx={{ m: 1, width: "100%" }}>
        <InputLabel id="demo-simple-select-helper-label">Account size</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={accountSize}
          label="accountSize"
          
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={2000}>$2,000</MenuItem>
          <MenuItem value={5000}>$5,000</MenuItem>
          <MenuItem value={10000}>$10,000</MenuItem>
          <MenuItem value={25000}>$25,000</MenuItem>
          <MenuItem value={100000}>$100,000</MenuItem>
          <MenuItem value={200000}>$200,000</MenuItem>
        </Select>
        <FormHelperText>USD currency</FormHelperText>
        <div className='pt-3'>
          <AccountType evaluationTypeProps={onEvaluationType} setEvaluationTypeProps={onEvaluationTypeChange} />
        </div>
      </FormControl>
    </form>
  );
}
