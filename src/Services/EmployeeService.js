const axios = require('axios');
const extUrl='https://localhost:44377/api';
const getEmployees = () => {
    return (
        axios.get(`${extUrl}/Employee/GetEmployees`, { headers: { 'Content-Type': 'application/json' } })
            .then(result => {  
                return result;
            })
    );
}

const fetchEmployeeById = (id) => {
    return (
        axios.get(`${extUrl}/Employee/GetEmployeeById/${id}` , { headers: { 'Content-Type': 'application/json' } })
            .then(result => {  
                return result;
            },
            error => {
                return error;
            })
    );
}

const addEmployee = async (employee) => {
    return (
        await  axios.post(`${extUrl}/Employee/AddEmployee`,employee, {'Content-Type': 'application/json'
    }).then(result => {
                return result;
            },
                error => {
                    return error;
                })
    );
}

const editEmployee = async (employee) => {
    return (
        await  axios.put(`${extUrl}/Employee/UpdateEmployee`,employee, {'Content-Type': 'application/json'
    }).then(result => {
                return result;
            },
                error => {
                    return error;
                })
    );
}
const deleteEmployee = async (ids) => {    
    return (
      await  axios.delete(`${extUrl}/Employee/DeleteEmployees?employeeIdsString= ${ids}`, { headers: { 'Content-Type': 'application/json' } })
            .then(result => {  
                return result;
            },
              )
    );
}

export const EmployeeService = {
    getEmployees,
    fetchEmployeeById,
    addEmployee,
    editEmployee,
    deleteEmployee
};