import React, { useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link, useNavigate} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {useForm} from 'react-hook-form'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useLoginMutation} from '../../features/auth/authApiSlice'
import Logo from '../../assets/brand/traderslogo.png'
import './index.css'
import { useDispatch } from 'react-redux';

const darkTheme = createTheme({

    palette: {
      mode: 'dark',
  
      primary: {
        main: '#3f51b5',
        light: '#607d8b',
        dark: '#212121',
      },
      secondary: {
        main: '#f44336',
        
        
        dark: '#af2b2b',
      },
      background: {
        paper: '#212121',
        default: '#121212',
      },
      text: {
        primary: '#c0c0c3',
        secondary: '#c0c0c0',
        disabled: '#878783',
      },
  
    },
    typography: {
      fontFamily: '', // Add DM-Sans font family
    },
  });
export default function SignIn() {
 const userRef = useRef();
 const errRef = useRef()
 const [user, setUser] = useState<string>('')
 const [pwd, setpwd] = useState<string>('')
 const [errMsg, setErrMsg] = useState<string>('')
 const navigate = useNavigate<any>()
const [login, {isLoading}] = useLoginMutation()
const dispatch = useDispatch()

useEffect(() => {
setErrMsg('')
}, [user, pwd])

const handleSubmit = async (e) => {
  e.preventDeafult()
  
  try {
    const userData = await login ({ user, pwd}).unwrap()
    dispatch(setCredentials({...userData, user}))
    setUser('')
    setpwd('')
    navigate('/')
  }
  catch (err) {
    if (!err?.response) {
      setErrMsg('no server response')
    } else if (err.response?.status === 400) {
      setErrMsg('missing username or password') 
    } else if (err.response?.status === 401) {
      setErrMsg('unauthorized');
    } else {
      setErrMsg ('login failed')
    }
    errRef.current.focus()
  }
}


  return (
    <ThemeProvider theme={darkTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
         
            <img className='w-20' src={Logo}/>
          
          <Typography className='gradient text-center' component="h1" variant="h3">
            Dashboard Login
          </Typography>
          {/* onSubmit={handleSubmit} on Box component */}
          
          <Box component="form"   sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
           
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
             
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
             
              autoComplete="current-password"
             
             />
            <FormControlLabel
           
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
            
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,background: 'linear-gradient(90deg, rgba(109,29,166,1) 25%, rgba(41,166,195,0.9444152661064426) 100%, rgba(33,9,121,0.36738445378151263) 100%)' }}
          
            >
        Sign up
            </Button>
            <Grid container>
              <Grid item xs>
                <Link className='gradient' to='/' >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link className='gradient' to='/sign-up'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}