import { useDispatch } from 'react-redux';
import { loginRequest, logout } from '../Store/Actions/actions';

import { AppState } from '../Store';
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Box, Button, Link, TextField } from '@mui/material';

const LoginForm = () => {
  const dispatch = useDispatch();
  
  const [formState, setFormState] = useState({email: '', password: ''});

  const error = useSelector((state: AppState) => state.auth.error);
  const userId = useSelector((state: AppState) => state.auth.userId);
  const isLoggedin = useSelector((state: AppState) => state.auth.isLoggedIn);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loginRequest(formState.email, formState.password));
  };

  const handleLogout = () => {
    dispatch(logout());
    setFormState({
      email: '',
      password: ''
    });
  }

  return (
    <form onSubmit={handleSubmit}>
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
            {!isLoggedin && <Button variant="contained" type='submit'>Log In</Button>}
            {isLoggedin && <Button variant="contained" onClick={handleLogout}>Log Out</Button>}
            <Link href='/signup' underline='hover'>Sign Up?</Link>
        </Box>
      {error && <div>{error}</div>}
      </div>
    </form>
  );
};

export default LoginForm