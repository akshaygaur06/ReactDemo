import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {EmployeeService} from '../../Services/EmployeeService';
import TextField from '@material-ui/core/TextField';
  const Create = props => {
    const [valid,setValid]=useState({
      isRequired:false
      })
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
        e.preventDefault();
        if( emps.name==='' || emps.empcode===''||   emps.phone==='' ||  emps.designation ===''){
            setValid({isRequired:true})      
            return false
    }
          
        let employee = {employeeId:0, fullName: emps.name, empcode: emps.empcode, mobile: emps.phone, position: emps.designation};
        EmployeeService.addEmployee(employee)
            .then(res => {            
              cancelHandle()
            });
      }
      const cancelHandle=()=>{
        props.history.push('/list');

      }
    return (
        <Container component="main" maxWidth="xs">
        <Typography component="h1" variant="h5">
        Create
        </Typography>

        <form>
        <TextField type="text" error={( emps.empcode==='' && valid.isRequired )}  variant="outlined" label="Employee Code" fullWidth margin="normal" name="empcode" value={emps.empcode} onChange={onChange} />

                <TextField type="text" error={( emps.name==='' && valid.isRequired )} variant="outlined" label="Full Name"  fullWidth margin="normal" name="name" value={emps.name} onChange={onChange} />

             
                <TextField label="Mobile" error={( emps.phone==='' && valid.isRequired )}  variant="outlined" fullWidth margin="normal" name="phone" value={emps.phone} onChange={onChange}  inputProps={{ maxLength: 10
  }}/>

                <TextField label="Designation"  error={( emps.designation==='' && valid.isRequired )} variant="outlined"  fullWidth margin="normal" name="designation" value={emps.designation} onChange={onChange} />
                <Grid container>
                    <Grid item xs>
                    <Button
                   type="submit"
                 fullWidth
                 variant="contained"
                 color="primary"
                 onClick={submitHandler}
             >Submit</Button>
                    </Grid>
                    <Grid item xs>
                    <Button                 
                    fullWidth
                    onClick={cancelHandle}
                    variant="contained"
             >Cancel</Button>
                    </Grid>
                </Grid>
               
                </form>
       
</Container>
    )
}
  
export default Create