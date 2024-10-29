import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const employees = [
    { empID: 1, empName: 'Kesav', empDOB: '1990-01-01', empAddress: 'Krishnagiri', empPhone: '1234567890' },
    { empID: 2, empName: 'Keshav', empDOB: '1985-05-05', empAddress: 'Hosur', empPhone: '2345678901' },
    { empID: 3, empName: 'Rahul', empDOB: '1992-09-09', empAddress: 'Salem', empPhone: '3456789012' },
    { empID: 4, empName: 'Ravi', empDOB: '1994-02-14', empAddress: 'Blr', empPhone: '4567890123' },
  ];

  console.log('Emp data', employees);

  const filteredEmployees = employees.filter(emp =>
    emp.empName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.empPhone.includes(searchTerm)
  );
  
  console.log(filteredEmployees, 'filter data or original data');
  return (
    <div className="App">
      <header className="App-header">
        <p>Employee Search</p>
        <input type="text" placeholder="Search by Name or Phone" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="search-input"/>
        <table className="table">
          <thead>
            <tr>
              <th>empID</th>
              <th>empName</th>
              <th>empDOB</th>
              <th>empAddress</th>
              <th>empPhone</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.length === 0 ? (
              <tr>
                <td colSpan="5" className="no-data">No employee data found</td>
              </tr>
            ) : (
              filteredEmployees.map(emp => (

                <tr key={emp.empID}>
                  <td>{emp.empID}</td>
                  <td>{emp.empName}</td>
                  <td>{emp.empDOB}</td>
                  <td>{emp.empAddress}</td>
                  <td>{emp.empPhone}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </header>
    </div>
  );
};

export default App;
