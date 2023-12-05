import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import CheckList from '@mui/icons-material/Approval';
import SchoolRounded from "@material-ui/icons/SchoolRounded";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';
import Gavel from '@mui/icons-material/Gavel';
import WorkOutlineRounded from '@material-ui/icons/WorkOutlineRounded';
import MonetizationOnRounded from '@material-ui/icons/MonetizationOnRounded';
import HelpOutlineRounded from '@material-ui/icons/HelpOutlineRounded';
import { BackspaceIcon } from '@heroicons/react/20/solid';
import Backspace from '@mui/icons-material/Backspace';

export const mainListItems = (
  <React.Fragment>
    <Link to='/sheesh'>
      <ListItemButton>
        <ListItemIcon>

          <CheckList />

        </ListItemIcon>
        <ListItemText primary="Apply for funding" />
      </ListItemButton>
    </Link>
    <Link to='/'>
      <ListItemButton>
        <ListItemIcon>
          <SchoolRounded />
        </ListItemIcon>
        <ListItemText primary="TF University" />
      </ListItemButton>
    </Link>
    <Link to='/'>
      <ListItemButton>
        <ListItemIcon>
          <BorderColorIcon />
        </ListItemIcon>
        <ListItemText primary="Tutorials" />
      </ListItemButton>
    </Link>
    <ListItemButton>
      <ListItemIcon>
        <Gavel />
      </ListItemIcon>
      <ListItemText primary="Trading Rules" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <WorkOutlineRounded />
      </ListItemIcon>
      <ListItemText primary="Evaluation" />
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
        <Backspace  />
      </ListItemIcon>
      <ListItemText  primary="Widthdraw" />
    </ListItemButton>
  </React.Fragment>
);


