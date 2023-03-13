import { Box, TextField, Button, AlertColor } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignupRequest } from "../Store/Actions/actions";
import { Alert, Snackbar, SnackbarOrigin } from "@mui/material";
import { AppState } from "../Store";

export interface State extends SnackbarOrigin {
    open: boolean;
    severity: AlertColor | undefined
}

const SignUp = () => {

    const [openSnackbar, setOpenSnackbar] = useState<State>({
        open: false,
        vertical: 'top',
        horizontal: 'center',
        severity: 'error'
    });

    const token = useSelector((state: AppState) => state.auth.token);
    const error = useSelector((state: AppState) => state.signup.error);

    const {vertical, horizontal, open} = openSnackbar;

    const [signupState, setSignupState] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        phone_number: 0
    });

    const dispatch = useDispatch();

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(SignupRequest(signupState.fname, signupState.lname, signupState.email, signupState.password, signupState.phone_number));
        if(token)
        {
            setOpenSnackbar({open: true, horizontal: 'center' ,vertical: 'top', severity: 'success'});
        }
        else
        {
            setOpenSnackbar({open: true, horizontal: 'center' ,vertical: 'top', severity: 'error'});
        }

    }
    
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenSnackbar({...openSnackbar, open:false});
    };

    return(
        <form onSubmit={submitHandler}>
            <div style={{
                background: '#52B2CF',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',}}>
                <Box sx={{boxShadow: '10',
                width: '70vh',
                height: '70vh',
                borderRadius: '2vh',
                background: '#D1CFE2',
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignContent: 'center',
                padding: '1vh',
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}>
                <TextField   
                    required 
                    sx={{minWidth: '50vh'}}
                    id="fname" 
                    label="First Name" 
                    variant="standard" 
                    type='text'
                    onChange={(e) => {setSignupState({...signupState, fname: e.target.value})}}></TextField>
                <TextField   
                    required 
                    sx={{minWidth: '50vh'}}
                    id="lname" 
                    label="Last Name" 
                    variant="standard" 
                    type='text'
                    onChange={(e) => {setSignupState({...signupState, lname: e.target.value})}}></TextField>
                <TextField   
                    required
                    sx={{minWidth: '50vh'}} 
                    id="email" 
                    label="Email" 
                    variant="standard" 
                    type='email'
                    onChange={(e) => {setSignupState({...signupState, email: e.target.value})}}></TextField>
                <TextField   
                    required 
                    sx={{minWidth: '50vh'}}
                    id="password" 
                    label="Password" 
                    variant="standard" 
                    type='password'
                    onChange={(e) => {setSignupState({...signupState, password: e.target.value})}}></TextField>
                <TextField   
                    required 
                    sx={{minWidth: '50vh'}}
                    id="phonenumber" 
                    label="Phone Number" 
                    variant="standard" 
                    type='number'
                    onChange={(e) => {setSignupState({...signupState, phone_number: parseInt(e.target.value)})}}></TextField>
                <Button variant="contained" type='submit'>Sign Up</Button>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical, horizontal}}>
                    <Alert severity={openSnackbar.severity}>
                        {token? "User created successfully" : "User already exist"}
                    </Alert>
                </Snackbar>
                </Box>
            </div>
        </form>
    );
}

export default SignUp;