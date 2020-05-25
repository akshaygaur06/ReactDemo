import React,{useState,useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {EmployeeService} from '../../Services/EmployeeService';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });


const List =()=> {

const classes=useStyles
const [rows,setRows] =  useState([]);

useEffect(()=>{  
    getEmployeeList()
},[])

const getEmployeeList =() => {
    EmployeeService.getEmployees()
        .then((res) => {
            setRows(res.data)
        });
}

  return (
      <div>
    <Button variant="contained" color="primary"  >
    Add Employee
</Button>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
             <TableCell>Id</TableCell>
            <TableCell align="right">Employee Code</TableCell>
            <TableCell align="right">Full Name</TableCell>
            <TableCell align="right">Designation</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            
            <TableRow key={row.fullName}>
              <TableCell component="th" scope="row">
                {row.employeeId}
              </TableCell>
              <TableCell align="right">{row.empcode}</TableCell>
              <TableCell align="right">{row.fullName}</TableCell>
              <TableCell align="right">{row.position}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}



export default List