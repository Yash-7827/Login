import { useDispatch } from 'react-redux';
import { loginRequest, logout } from '../Store/Actions/actions';

import store, { AppState } from '../Store';
import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Alert, AlertColor, Box, Button, CircularProgress, Link, Snackbar, SnackbarOrigin, TextField } from '@mui/material';
import { green } from '@mui/material/colors';
import { AuthState } from '../Store/Types/auth';

export interface State extends SnackbarOrigin {
  open: boolean;
}

type AuthSatateType = {
  userId: string,
  mail: string,
  isLoggedIn: boolean,
  token: string | null,
  isLoading: boolean,
  error: string | null
}

const LoginForm = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const timer = useRef<number>();

  const uerror = useSelector((state: AppState) => state.auth.error);
  const utoken = useSelector((state: AppState) => state.auth.token);
  const uisLoggedIn = useSelector((state: AppState) => state.auth.isLoggedIn);
  const uuserId = useSelector((state: AppState) => state.auth.userId);
  const uisLoading = useSelector((state: AppState) => state.auth.isLoading);
  console.log('isLoggedIn', uisLoggedIn);

  const [authState, setAuthState] = useState<AuthSatateType>({
    userId: '',
    mail: '',
    isLoggedIn: false,
    token: null,
    isLoading: false,
    error: null
  });
  
  console.log(authState);
  const [formState, setFormState] = useState({email: '', password: ''});

  const [openSnackbar, setOpenSnackbar] = useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'center'
  });
  const {vertical, horizontal, open} = openSnackbar;

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

  useEffect(() => {
    setAuthState({
      error: uerror,
      token: utoken,
      isLoading: uisLoading,
      isLoggedIn: uisLoggedIn,
      userId: uuserId,
      mail: ''
    })
  }, [uuserId]);

  console.log(authState);

  // const handleButtonClick = () => {
  //   if (!loading) {
  //     setSuccess(false);
  //     setLoading(true);
  //     timer.current = window.setTimeout(() => {
  //       setSuccess(true);
  //       setLoading(false);
  //     }, 2000);
  //     setOpenSnackbar({open: true, horizontal: 'center' ,vertical: 'top'});
  //   }
    
  // };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loginRequest(formState.email, formState.password));
    setOpenSnackbar({open: true, horizontal: 'center' ,vertical: 'top'});
    console.log('isLoading==>',authState.isLoading);
  };
  
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar({...openSnackbar, open:false});
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* {loading ? 
        <div>
          <Snackbar open={open} autoHideDuration={1500} onClose={handleClose} anchorOrigin={{vertical, horizontal}}>
            {!token? 
              <Alert severity="error">Invalid credentials!</Alert> :
              <Alert severity="success">Logged in successfully!</Alert>
            }
            </Snackbar>
          <CircularProgress
              size={24}
              sx={{
                color: green[500],
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: '-12px',
                marginLeft: '-12px',
              }}
            />
        </div>      
      :
             */}
      <div style={{
        background: '#52B2CF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',}}>
        <Box sx={{boxShadow: '10',
        borderRadius: '2vh',
        width: '50vh',
        background: '#D1CFE2',
        height: '42vh', 
        display: 'flex', 
        flexFlow: 'column', 
        justifyContent: 'space-around', 
        alignItems:'center'}}>
            <TextField sx={{minWidth: '38vh'}} value={formState.email} required id="email" label="Username" variant="standard" type='email' onChange={(e) => setFormState({...formState, email: e.target.value})}></TextField>
            <TextField sx={{minWidth: '38vh'}} value={formState.password} required id="password" label="Password" variant="standard" type='password' onChange={(e) => setFormState({...formState, password: e.target.value})}></TextField>
            <Button variant="contained" type='submit'>Log In</Button>
            <Link href='/signup' underline='hover'>Sign Up?</Link>
        </Box>
      {uerror && <div>{uerror}</div>}
      </div>
    {/* } */}
    </form>
  );
};

export default LoginForm