import React, { useState } from 'react'

import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Link} from 'react-router-dom';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { authenticationService } from '../../Services/AuthenticationService';

const LoginPage = props => {
    const [loginParams, setLoginParams] = useState({
        username:'',
        password:''
    });
   const onChange = (e) => {
        console.log(e.target.name)
setLoginParams({...loginParams,...{[e.target.name]: e.target.value }});
    }

const submitHandler=(e)=>{
    debugger;
    e.preventDefault();
    let login = { UserName: loginParams.username, Password: loginParams.password };

    
    authenticationService.login(login)
        .then(res => {
            if(res !== undefined) 
            {
                if (res.status === 200) {                   
                    localStorage.setItem('token', res.data.token);  
                    props.history.push('/List');
                }
            }                                
        });
    console.log(loginParams)
}

    return (
        
        <ValidatorForm onSubmit={submitHandler}>  
     
        <Container component="main" maxWidth="xs">
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <form >
           
                <TextValidator
                    variant="outlined"
                    margin="normal"
                    required={loginParams.username ===""}
                    fullWidth
                    id="username"
                    label="Email Address"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    value={loginParams.username}
                    onChange={onChange}
                    validators={['required']}
                    errorMessages={['UserName is required']}
                />
                <TextValidator
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={loginParams.password}
                    onChange={onChange}
                    validators={['required']}
                    errorMessages={['Password is required']}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="default"
                   
                >Sign IN</Button>
                <Grid container>
                    <Grid item xs>
                        <Link to="/forget" variant="body2">
                            Forgot password?
                         </Link>
                    </Grid>
                    <Grid item>
                        
                        <Link to="/singup" >
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
            </form>

        </Container>
        </ValidatorForm>
    );
};


export default LoginPage
