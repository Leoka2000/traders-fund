import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import LogoutIcon from '@mui/icons-material/Logout';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxRounded from '@mui/icons-material/AccountBoxRounded';
import { Link } from 'react-router-dom';
import BorderColor from '@mui/icons-material/BorderColor';
import Gavel from '@mui/icons-material/Gavel';
import SchoolRounded from '@material-ui/icons/SchoolRounded';
import './sidenav.css'

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className='flex justify-center'>
      <Button
      sx={{background: 'linear-gradient(90deg, rgba(109,29,166,0.8015581232492998) 25%, rgba(41,166,195,0.9164040616246498) 100%, rgba(33,9,121,0.36738445378151263) 100%)'}}
  
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
      
      
        startIcon={<AssignmentIcon />}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >

      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}

        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Link to='/login' onClick={handleClose} >
          <MenuItem onClick={handleClose} disableRipple>
            <Gavel />
            Login
          </MenuItem>
        </Link>
        <Link to='/s' className='flex flex-col' onClick={handleClose} >
        <MenuItem onClick={handleClose} disableRipple>
            <SchoolRounded />
            TF University
          </MenuItem>

        </Link>
        <Link to='/sksks' onClick={handleClose} >
          <MenuItem onClick={handleClose} disableRipple>
            <Gavel />
            Trading rules
          </MenuItem>
        </Link>
        <Link to='/sksks' className='flex flex-col' onClick={handleClose} >
          <MenuItem onClick={handleClose} disableRipple>
            <BorderColor />
            Tutorials
          </MenuItem>
        </Link>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <AccountBoxRounded />
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <SettingsIcon />
          Settings
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <LogoutIcon />
          Log-out
        </MenuItem>
      </StyledMenu>
    </nav>
  );
}