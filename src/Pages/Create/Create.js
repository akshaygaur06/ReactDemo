import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {EmployeeService} from '../../Services/EmployeeService';

  const Create = props => {
      const [emps,setEmps]=useState({
    name:'',
    empcode:'',
    phone:'',
    designation:''

      })

      const onChange=(e)=>{
        setEmps({...emps,...{[e.target.name]: e.target.value }})
       
      }
    
      const submitHandler=(e)=>{
        e.preventDefault();
        let employee = {employeeId:0, fullName: this.state.fullName, empcode: this.state.empcode, mobile: this.state.mobile, position: this.state.position};
        EmployeeService.addEmployee(employee)
            .then(res => {            
               props.history.push('/employeeList');
            });
      }
    return (
        <Container component="main" maxWidth="xs">
        <Typography component="h1" variant="h5">
        Create
        </Typography>
        <ValidatorForm onSubmit={submitHandler} >
        <TextValidator type="text" variant="outlined" label="Employee Code" fullWidth margin="normal" name="empcode" value={emps.empcode} onChange={onChange} validators={['required']} errorMessages={['Employee Code is required']}/>

                <TextValidator type="text" variant="outlined" label="Full Name"  fullWidth margin="normal" name="name" value={emps.name} onChange={onChange} validators={['required']} errorMessages={['Full Name is required']}/>

             
                <TextValidator label="Mobile" variant="outlined" fullWidth margin="normal" name="phone" value={emps.phone} onChange={onChange} validators={['required','mobileValidation']} errorMessages={['Mobile is required','Mobile number must be of 10 digits']}/>

                <TextValidator label="Designation"  variant="outlined"  fullWidth margin="normal" name="Designation" value={emps.designation} onChange={onChange} validators={['required']} errorMessages={['Designation is required']}/>
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
                 
                
             >Cancel</Button>
                    </Grid>
                </Grid>
               
 
</ValidatorForm>
</Container>
    )
}
  
export default Create