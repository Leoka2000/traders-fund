import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({onAccountSize}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Continue to checkout
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Overview</DialogTitle>
        <DialogContent sx={{display:'flex', gap:'3rem'}}>
          <DialogContentText>
            Amount to pay:
          </DialogContentText>
          <DialogContentText>
           x
          </DialogContentText>
          {/* 
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
           */}
        </DialogContent>
        <DialogActions sx={{width: '100%'}}>
          <Button sx={{width: '100%'}} onClick={handleClose}>Continue to payment</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}