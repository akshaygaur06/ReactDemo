import React, { useState ,useEffect} from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {EmployeeService} from '../../Services/EmployeeService';

const Edit =props => {
    useEffect(() => {
      
        BindEmployeeData()
      },[]);
    const [emps,setEmps]=useState({
        employeeId:'',
        name:'',
        empcode:'',
        mobile:'',
        position:''
    
          })
    const {employeeId, fullName,empcode,mobile,position}=emps
    const back=()=>{
        props.history.push('/List');
      }
     const BindEmployeeData =()=> {
         debugger
        EmployeeService.fetchEmployeeById(window.localStorage.getItem("employeeId"))
            .then((res) => {
                let employee = res.data;
                 const {employeeId, fullName,empcode,mobile,position}=employee
                setEmps({employeeId, fullName,empcode,mobile,position})
               
            }, error => {
                debugger
                return error;
              });
    }
  
  
    
     const onChange=(e)=>{
            setEmps({...emps,...{[e.target.name]: e.target.value }})
            back()
     }

        
    const submitHandler=(e)=>{
            e.preventDefault();
            let employee = {employeeId, fullName,  empcode,  mobile,  position};
            EmployeeService.editEmployee(employee)
                .then(res => {            
                    back()
                });
    }
        
    

    return (
        <Container component="main" maxWidth="xs">
        <Typography component="h1" variant="h5">
        Edit
        </Typography>
        <ValidatorForm onSubmit={submitHandler} >
        <TextValidator type="text" variant="outlined" label="Employee Code" fullWidth margin="normal" name="empcode" value={empcode} onChange={onChange} validators={['required']} errorMessages={['Employee Code is required']}/>

                <TextValidator type="text" variant="outlined" label="Full Name"  fullWidth margin="normal" name="fullName" value={fullName} onChange={onChange} validators={['required']} errorMessages={['Full Name is required']}/>

             
                <TextValidator label="Mobile" variant="outlined" fullWidth margin="normal" name="mobile" value={mobile} onChange={onChange} validators={['required','mobileValidation']} errorMessages={['Mobile is required','Mobile number must be of 10 digits']}/>

                <TextValidator label="Designation"  variant="outlined"  fullWidth margin="normal" name="position" value={position} onChange={onChange} validators={['required']} errorMessages={['Designation is required']}/>
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
export default Edit