import React from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
const Forgot= props => {

    const cancelHandler =() =>{
        props.history.push('/');;
      
  }
    return (
        <Container component="main" maxWidth="xs">
              <Typography component="h1" variant="h5">
                Forget Password
            </Typography>
             <form>
               <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="username"
                    autoFocus
                   
                />
                  <Grid container>
                    <Grid item xs>
                    <Button
                 
                 fullWidth
                 variant="contained"
                 color="primary"
                 
               
             >Submit</Button>
                    </Grid>
                    <Grid item xs>
                    <Button
                 
                 fullWidth
                 variant="contained"
                 color="Default"
                 onClick={cancelHandler}
             >Cancel</Button>
                    </Grid>
                </Grid>
       </form>
                </Container>
               
    )
}

export default Forgot
