import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {authenticationService} from '../../Services/AuthenticationService';
const Singup= props => {
    const [regirstations,setRegirstations]=useState({
        firstName:'',
        lastName:'',
        email:'',
        userName:'',
        password:'',
        confirmPassword:'',
        role:'User'

    })
    const onChange = (e) => {
        setRegirstations({...regirstations,...{[e.target.name]: e.target.value }});
    }
    const submitHandler =(e) =>{

        e.preventDefault();
        let register = {fullName: regirstations.firstName + ' ' +  regirstations.lastName, email: regirstations.email, userName: regirstations.userName,password: regirstations.password,role:regirstations.role};
        authenticationService.register(register)
            .then(res => {
                
                props.history.push('/');
            });
    }
    const cancelHandler =() =>{
          props.history.push('/');;
        
    }
    return (
    <Container component="main" maxWidth="xs">
            <Typography component="h1" variant="h5">
                Sign Up
            </Typography>

            <ValidatorForm
            onSubmit={submitHandler}>  
       
            
            <TextValidator type="text" variant="outlined" label="First Name" fullWidth margin="normal" name="firstName" value={regirstations.firstName} onChange={onChange} validators={['required']} errorMessages={['First Name is required']}/>
            <TextValidator type="text" variant="outlined" label="Last Name" fullWidth margin="normal" name="lastName" value={regirstations.lastName} onChange={onChange} validators={['required']} errorMessages={['Last Name is required']}/>
            <TextValidator type="text" variant="outlined" label="Email" fullWidth margin="normal" name="email" value={regirstations.email} onChange={onChange}   validators={['required', 'isEmail']} errorMessages={['Email is required', 'Email is not valid']}/>
            <TextValidator type="text" variant="outlined" label="User Name" fullWidth margin="normal" name="userName" value={regirstations.userName} onChange={onChange} validators={['required']} errorMessages={['User Name is required']}/>
            <TextValidator type="password" variant="outlined"  label="Password" fullWidth margin="normal" name="password" value={regirstations.password} onChange={onChange} validators={['required']} errorMessages={['Passsword is required']}/>
            <Grid container>
                    <Grid item xs>
                    <Button
                 type="submit"
                 fullWidth
                 variant="contained"
                 color="primary"
                 
             >Submit</Button>
                    </Grid>
                    <Grid item xs>
                    <Button
                 
                 fullWidth
                 variant="contained"
                 
                 onClick={cancelHandler}
             >Cancel</Button>
                    </Grid>
                </Grid>
        </ValidatorForm>

        
           </Container>
     
    )
}

export default Singup
