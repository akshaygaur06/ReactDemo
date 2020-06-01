import React, { useEffect ,useState }  from 'react'; 
import { forwardRef } from 'react';
import { EmployeeService } from "../Services/EmployeeService";
import MaterialTable from 'material-table';
import { AddBox,ArrowDownward,Check,ChevronLeft,ChevronRight,
    Clear,DeleteOutline,Edit,FilterList,FirstPage,LastPage,Remove,SaveAlt,Search,ViewColumn } from "@material-ui/icons";

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };


const ListEmployee =props=> {
    const [selected,setSelected]=useState();
   const[employees,setEmployees]= useState([])
    useEffect(()=>{  
        getEmployeeList()
    },[])

    const getEmployeeList=() =>{
        EmployeeService.getEmployees()
            .then((res) => {
                setEmployees(res.data)
            });
    }

    const deleteEmployee=()=> {
   
        EmployeeService.deleteEmployee(selected)
        .then(res => { 
        getEmployeeList()
      })
       

            
    }

    const editEmployee =(id)=> {
        
        window.localStorage.setItem("employeeId", id);
   props.history.push('/edit');
    }

    const addEmployee=()=> {
        window.localStorage.removeItem("employeeId");
     props.history.push('/create');
    }
   
        return (
            <div>
              
                <div style={{ maxWidth: "100%" }}>
                    <MaterialTable
                      icons={tableIcons}
                      columns={[
                            { title: 'Id', field: 'employeeId' },
                            { title: 'Employee Code', field: 'empcode' },
                            { title: 'Full Name', field: 'fullName' },
                            { title: 'Position', field: 'position' }
                        ]}
                        data={employees}
                        title=""
                        actions={[
                            {
                                icon: () =>  { return <AddBox/> },
                                tooltip: 'Add Employee',
                                isFreeAction: true,
                                onClick: (event) => {
                                    addEmployee(); 
                                }
                              },
                            {
                                icon: () => { return <DeleteOutline/> },
                                tooltip: 'Delete All ',
                                onClick: (event, rowData) =>{
                                    debugger;
                                    deleteEmployee()
                                 }
                              },
                            {
                              icon: () => { return <Edit/> },
                              tooltip: 'Edit ',
                             position:'row',
                              onClick: (event, rowData) =>{
                               
                                editEmployee(rowData.employeeId);
                               }
                            }
                          ]}
                          options={{
                            exportButton: true,
                            actionsColumnIndex: -1,
                            resizable:true,
                            selection:true

                          }}
                          onSelectionChange={(rows) =>{
                           const selectValue=rows.map((row)=>{
                                return row.employeeId

                            })

                            setSelected(selectValue.toString())
                           debugger
                          } }
                         
                    />
                </div>
            </div>
        );
    }




export default ListEmployee;