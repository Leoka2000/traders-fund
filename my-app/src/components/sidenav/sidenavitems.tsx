import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import CheckList from '@mui/icons-material/Approval';
import SchoolRounded from "@material-ui/icons/SchoolRounded";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Link } from 'react-router-dom';
import Gavel from '@mui/icons-material/Gavel';
import WorkOutlineRounded from '@material-ui/icons/WorkOutlineRounded';
import MonetizationOnRounded from '@material-ui/icons/MonetizationOnRounded';
import HelpOutlineRounded from '@material-ui/icons/HelpOutlineRounded';
import { BackspaceIcon } from '@heroicons/react/20/solid';
import Backspace from '@mui/icons-material/Backspace';
import './sidenav.css'

export const applyFunding = (
  <React.Fragment>
    <Link to='/sheesh'>
      <ListItemButton className='hover'>
        <ListItemIcon>

          <CheckList />

        </ListItemIcon>
        <ListItemText primary="Apply for funding" />
      </ListItemButton>
    </Link>
  </React.Fragment>
)
export const tfUniIcon = (
  <ListItemButton>
    <ListItemIcon>
      <SchoolRounded />
    </ListItemIcon>
    <ListItemText primary="TF University" />
  </ListItemButton>

)
export const tutorials = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <BorderColorIcon />
      </ListItemIcon>
      <ListItemText primary="Tutorials" />
    </ListItemButton>
  </React.Fragment>
)
export const tradingRules = (
  <React.Fragment>

    <ListItemButton>
      <ListItemIcon>
        <Gavel />
      </ListItemIcon>
      <ListItemText primary="Trading Rules" />
    </ListItemButton>

  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Subheader
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <WorkOutlineRounded />
      </ListItemIcon>
      <ListItemText primary="Evaluation" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <MonetizationOnRounded />
      </ListItemIcon>
      <ListItemText primary="Funded trainig" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <HelpOutlineRounded />
      </ListItemIcon>
      <ListItemText primary="Help" />
    </ListItemButton>
    <ListItemButton >
      <ListItemIcon>
        <Backspace />
      </ListItemIcon>
      <ListItemText primary="Widthdraw" />
    </ListItemButton>
  </React.Fragment>
);


