const axios = require('axios');
const extUrl='https://localhost:44377/api';
const login = async (loginUser) => {  
    return (
        await  axios.post(`${extUrl}/ApplicationUser/Login`, loginUser, {'Content-Type': 'application/json'
        }).then(user => {    
        
            return user;
        },
            error => {
           
              return error;
            })
    )
}


const getLoginUserDetails = (userName) => {
    return (
        axios.get(`${extUrl}/ApplicationUser/UserDetails/${userName}`, { headers: { 'Content-Type': 'application/json' } })
            .then(result => {
                return result;
            })
    );
}

const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
}

const forgotPassword = async (userObj) => {
    return (
        await  axios.post(`${extUrl}/ApplicationUser/ForgotPassword`,userObj, {'Content-Type': 'application/json'
    }).then(result => {
                return result;
            },
                error => {
                    return error;
                })
    );
}

const resetPassword = async (resetPasswordObj) => {
    return (
        await axios.post(`${extUrl}/ApplicationUser/ResetPassword`, resetPasswordObj, {'Content-Type': 'application/json'
        }).then(result => {
            return result;
        },
        error => {
            return error;
        })
    );
}


const register = (employee) => {
    return (
        axios.post(`${extUrl}/ApplicationUser/Register`, employee, {'Content-Type': 'application/json'
            }).then(users => {
                return users;
            },
            error => {
           
                return error;
              })
    );
}


export const authenticationService = {
    login,
    logout,   
    forgotPassword,
    resetPassword,
    getLoginUserDetails,
    register
};