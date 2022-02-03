import React,{useState} from 'react';
import Axios from "axios";
function Admin() {

    
  const [employeeList, setEmployeeList] = useState([]);
  
  const [newWage, setNewWage] = useState(0);

  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeeList(response.data);
    });
  };
  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
        setEmployeeList(
            employeeList.filter((val) => {
                return val.id != id;
            })
        );
    });
};

const updateEmployeeWage = (id) => {
    Axios.put("http://localhost:3001/update", { wage: newWage, id: id }).then(
        (response) => {
            setEmployeeList(
                employeeList.map((val) => {
                    return val.id == id
                        ? {
                            id: val.id,
                            name: val.name,
                            country: val.country,
                            age: val.age,
                            position: val.position,
                            wage: newWage,
                        }
                        : val;
                })
            );
        }
    );
};
  return <div>
     <h1 style={{textAlign:'center'}}>Admin</h1>


     <div className="employees">
                <button onClick={getEmployees}>Show Employees</button>

                {employeeList.map((val, key) => {
                    return (
                        <div className="employee">
                            <div>
                                <h3>Name: {val.name}</h3>
                                <h3>Age: {val.age}</h3>
                                <h3>Country: {val.country}</h3>
                                <h3>Position: {val.position}</h3>
                                <h3>Wage: {val.wage}</h3>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="2000..."
                                    onChange={(event) => {
                                        setNewWage(event.target.value);
                                    }}
                                />
                                <button
                                    onClick={() => {
                                        updateEmployeeWage(val.id);
                                    }}
                                >
                                    {" "}
                                    Update
                                </button>

                                <button
                                    onClick={() => {
                                        deleteEmployee(val.id);
                                    }}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
  </div>;
}

export default Admin;
