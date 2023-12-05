import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Navbar from '../navbar/navbar'
import Help from "@material-ui/icons/HelpOutlineRounded";
import { FaStickyNote } from "react-icons/fa";
import MenuIcon from "@material-ui/icons/Menu";
import Workoutline from "@material-ui/icons/WorkOutlineRounded";
import CheckList from '@mui/icons-material/Approval';
import SchoolRounded from "@material-ui/icons/SchoolRounded";
import Money from "@material-ui/icons/MonetizationOnRounded";
import { Link } from "react-router-dom"
import BackspaceIcon from '@mui/icons-material/Backspace';
import Logo from '../../assets/brand/traderslogo.png'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import './sidebar.css'
import GavelIcon from '@mui/icons-material/Gavel';



const drawerWidth = 200;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: "#141414",
    color: 'white'

  },
  drawer: {
    flexShrink: 0,
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#141414",
    color: 'white'

  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
      background: "#141414",
      color: 'white'

    }
  },
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down("sm")]: {
      display: "none",
      background: "#141414",
      color: 'white'

    }
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    background: "#141414",
    color: 'white'
  }
}));

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };

  return (
    <div className="sidebar-custom justify-between">
      <div className={classes.root}>
        <CssBaseline />
        <AppBar color="#141414" position="fixed" className={classes.appBar}>
          <Toolbar >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={toggleDrawer}
              className={classes.menuButton}
            >
              <MenuIcon className="text-neutral-500" />
            </IconButton>
            <Typography variant="h6" noWrap>
              Dashboard
            </Typography>
            <Navbar />



          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant={isMdUp ? "permanent" : "temporary"}
          classes={{
            paper: classes.drawerPaper
          }}
          anchor="left"
          open={open}
          onClose={toggleDrawer}
        >
          <div className={classes.toolbar} />
          <List>
            <div className="logo-wrapper pt-2 pb-2">
              <div><img src={Logo} /></div>
            </div>

            <ListItem button>

              <ListItemIcon className="flex gap-3 justify-center items-center w-full font-custom">
                <CheckList className='text-neutral-500' />

                <ListItemText primary='Apply for funding' className='text-neutral-500 text-xs font-custom ' />

              </ListItemIcon>

            </ListItem>
          </List>

          <div className="bar-wrapper">
            <div className="bar"></div>
          </div>
          <List>
            <ListItem button>
              <ListItemIcon className="flex gap-3 justify-center items-center w-full font-custom">
                <SchoolRounded className='text-neutral-500' />
                <ListItemText className='text-neutral-500' primary='TF University' />
              </ListItemIcon>
            </ListItem>

            <ListItem button>

              <ListItemIcon className="flex gap-3 justify-center items-center w-full">
                <BorderColorIcon className='text-neutral-500' />

                <ListItemText primary='Tutorials' className='text-neutral-500' />

              </ListItemIcon>

            </ListItem>

            <ListItem button>

              <ListItemIcon className="flex gap-3 justify-center items-center w-full">
                <GavelIcon className='text-neutral-500' />

                <ListItemText primary='Trading rules' className='text-neutral-500' />

              </ListItemIcon>

            </ListItem>
          </List>

          <div className="bar-wrapper">
            <div className="bar"></div>
          </div>
          <List>
            <ListItem button>
              <ListItemIcon className="flex gap-3 justify-center items-center w-full">
                <Workoutline className='text-neutral-500' />
                <ListItemText className='text-neutral-500' primary='Evaluation' />
              </ListItemIcon>
            </ListItem>
            <Link className='no-underline' to='/funded-training'>
              <ListItem button>

                <ListItemIcon className="flex gap-3 justify-center items-center w-full">
                  <Money className='text-neutral-500' />

                  <ListItemText primary='Funded training' className='text-neutral-500' />

                </ListItemIcon>

              </ListItem>
            </Link>
          </List>

          <div className="bar-wrapper">
            <div className="bar"></div>
          </div>

          <List>
            <ListItem button>
              <ListItemIcon className="flex gap-3 justify-center items-center w-full">
                <Help className='text-neutral-500' />
                <ListItemText className='text-neutral-500' primary='Help' />
              </ListItemIcon>
            </ListItem>


            <ListItem button>
              <ListItemIcon className="flex gap-3 justify-center items-center w-full">
                <BackspaceIcon className='text-neutral-500' />
                <ListItemText className='text-neutral-500' primary='Withdraw' />
              </ListItemIcon>
            </ListItem>
          </List>

        </Drawer>
        <main className={classes.content + 'bg-neutral-950 custom-font p-14 text-justify text-neutral-400'}>
          <Toolbar />
          <Typography component="h2" variant="h6" gutterBottom>
            On small and extra-small screens the sidebar/drawer is temporary and
            can be opened via the menu icon in the toolbar.
          </Typography>
          <Typography component="h2" variant="h6" gutterBottom>
            On medium, large, and extra-large screens the sidebar/drawer is
            permanent and there is no menu icon in the toolbar.
          </Typography>
          <hr />
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
            quisque non tellus. Convallis convallis tellus id interdum velit
            laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
            adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
            integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
            eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
            quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
            vivamus at augue. At augue eget arcu dictum varius duis at consectetur
            lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
            faucibus et molestie ac.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
            sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
            mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
            risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
            purus viverra accumsan in. In hendrerit gravida rutrum quisque non
            tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
            morbi tristique senectus et. Adipiscing elit duis tristique
            sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
            eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
            posuere sollicitudin aliquam ultrices sagittis orci a.
          </Typography>
        </main>
      </div>
    </div >
  );
}
