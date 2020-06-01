import React, { useState ,useEffect} from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {EmployeeService} from '../../Services/EmployeeService';


const Edit =props => {
    useEffect(() => {
      
        BindEmployeeData()
      },[]);
    
      
      const [emps,setEmps]=useState({
        employeeId:'',
        fullName:'',
        empcode:'',
        mobile:'',
        position:''
    
          })

          const [valid,setValid]=useState({
          isRequired:false
          })

        
    const {employeeId, fullName,empcode,mobile,position}=emps
   
    const back=()=>{
        props.history.push('/list');
      }
     const BindEmployeeData =()=> {
        
        EmployeeService.fetchEmployeeById(window.localStorage.getItem("employeeId"))
            .then((res) => {
                let employee = res.data;
                 const {employeeId, fullName,empcode,mobile,position}=employee
                setEmps({employeeId, fullName,empcode,mobile,position})
               
            }, error => {
               
                return error;
              });
    }
  
  
    
     const onChange=(e)=>{
            setEmps({...emps,...{[e.target.name]: e.target.value }})
        
     }

        
    const submitHandler=(e)=>{
        e.preventDefault();
    if(fullName==='' || empcode===''||  mobile==='' || position ===''){
        setValid({isRequired:true})      
        return false
}
      
      
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
   <form>
        <TextField type="text" error={( empcode==='' && valid.isRequired )}  variant="outlined" label="Employee Code" fullWidth margin="normal" name="empcode" value={empcode} onChange={onChange} />

                <TextField type="text" error={( fullName==='' && valid.isRequired )} variant="outlined" label="Full Name"  fullWidth margin="normal" name="fullName" value={fullName} onChange={onChange} />

             
                <TextField label="Mobile" error={( mobile==='' && valid.isRequired )}  variant="outlined" fullWidth margin="normal" name="mobile" value={mobile} onChange={onChange}  inputProps={{ maxLength: 10
  }}/>

                <TextField label="Designation"  error={( position==='' && valid.isRequired )} variant="outlined"  fullWidth margin="normal" name="position" value={position} onChange={onChange} />
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
                    onClick={back}
                    variant="contained"
             >Cancel</Button>
                    </Grid>
                </Grid>
               
                </form>
</Container>
    )
}
export default Edit