import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/index';
import Container from 'react-bootstrap/Container';
import DropDownInput from '../../components/DropDownInput/index';
import TableComponent from '../../components/Table/index';
import { AddButton, SubmitButton } from '../../components/Buttons/index';
import Collapse from 'react-bootstrap/Collapse';
import FControl from '../../components/TextInput/FormGroup';
import API from '../../utils/employeesAPI';
import Button from 'react-bootstrap/Button';

function Employees() {
  const [open, setOpen] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [addEmployee, setAddEmployee] = useState({});

  useEffect(() => {
    loadEmployees();
  }, []);

  function loadEmployees() {
    API.getEmployees()
      .then((res) => {
        console.log(res);
        const employees = res.data.map((employee) => {
          return {
            id: employee.id,
            name: employee.name,
            position: employee.position,
            permission: employee.permission,
            rate: employee.rate,
          };
        });
        const filteredEmployees = [...employees];
        setEmployees(employees);
        setFilteredEmployees(filteredEmployees);
      })
      .catch((err) => console.error(err));
  }

  function handleInputChange(event) {
    const inputText = event.target.value;
    setFilteredEmployees(
      employees.filter((employee) => {
        const words = employee.name.split(' ');
        let isMatch = false;

        words.forEach((word) => {
          if (word.toLowerCase().startsWith(inputText.toLowerCase())) {
            isMatch = true;
          }
        });

        return isMatch;
      })
    );
  }

  function updateEmployeeState(newEmployee) {
    setAddEmployee({
      ...addEmployee,
      ...newEmployee,
    });
  }

  function handleAddEmployeeSubmit(event) {
    event.preventDefault();
    if (
      addEmployee.name &&
      addEmployee.id &&
      addEmployee.position &&
      !isNaN(addEmployee.rate) &&
      addEmployee.permission
    ) {
      API.addEmployee(addEmployee).then(loadEmployees());
      setOpen(!open);
      var p = document.createElement('p');
      p.innerHTML = 'Employee successfully added';
      document.getElementById('buttonsDiv').appendChild(p);
    } else {
      var p = document.createElement('p');
      p.innerHTML = 'Please fill all fields with appropriate input to submit an employee';
      document.getElementById('employeeSubmit').appendChild(p);
    }
  }

  return (
    <div>
      <Container className="d-flex justify-content-center mt-5">
        <SearchBar
          placeholder="Search employees"
          className="flex-row rounded-sm"
          onChange={handleInputChange}
        />
      </Container>
      <div
        className=" d-flex row justify-content-center align-items-center text-white"
        id="buttonsDiv"
      >
        <div className="m-1">
          <DropDownInput className="d-flex justify-content-center">
            Sort by vendor
          </DropDownInput>
        </div>
        <div className="m-1">
          <AddButton
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          />
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Collapse in={open}>
          <div className="w-50 ">
            <FControl
              onChange={(event) => {
                updateEmployeeState({ name: event.target.value });
              }}
              placeholder="Employee Name"
              className="m-2"
            />
            <FControl
              onChange={(event) => {
                updateEmployeeState({ id: event.target.value });
              }}
              placeholder="Employee Pin"
              className="m-2"
            />
            <FControl
              onChange={(event) => {
                updateEmployeeState({ rate: event.target.value });
              }}
              placeholder="Employee Rate"
              className="m-2"
            />
            <FControl
              onChange={(event) => {
                updateEmployeeState({ position: event.target.value });
              }}
              placeholder="Employee Role"
              className="m-2"
            />
            <FControl
              onChange={(event) => {
                updateEmployeeState({ permission: event.target.value });
              }}
              placeholder="Employee Permissions"
              className="m-2"
            />
            <div className="d-flex justify-content-center mt-5">
              <SubmitButton
                onClick={handleAddEmployeeSubmit}
                className="d-flex align-self-center"
              />
            </div>
          </div>
        </Collapse>
      </div>

      <Container className="d-flex justify-content-center mt-5">
        <TableComponent className="text-white w-75">
          <thead>
            <TableComponent.TR>
              <TableComponent.TH>Employee Name</TableComponent.TH>
              <TableComponent.TH>Employee Role</TableComponent.TH>
              <TableComponent.TH>Employee Rate</TableComponent.TH>
              <TableComponent.TH>Employee Pin</TableComponent.TH>
            </TableComponent.TR>
          </thead>
          <tbody>
            {filteredEmployees.map((employee) => (
              <TableComponent.TR key={employee.id}>
                <TableComponent.TD>{employee.name}</TableComponent.TD>
                <TableComponent.TD>{employee.position}</TableComponent.TD>
                <TableComponent.TD>{employee.rate}</TableComponent.TD>
                <TableComponent.TD>{employee.id}</TableComponent.TD>
              </TableComponent.TR>
            ))}
          </tbody>
        </TableComponent>
      </Container>
    </div>
  );
}

export default Employees;
