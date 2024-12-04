// To clearing input fields and for designations assigning default value is MGR after submission
const clearFields = () => {
  empName.value = "";
  age.value = "";
  designation.value = "MGR";
};


// Function to add employee info to the table
const addEmpInfoToTable = (empInfo, empInfoData) => {
  var trData = document.createElement("tr");
  var trDataDetails = `<tr>`;
  trDataDetails += `<td>${empInfoData.empName}</td>`;
  trDataDetails += `<td>${empInfoData.age}</td>`;
  trDataDetails += `<td>${designations[empInfoData.designation]}</td>`;
  // The Edit button in the table to modify employee details.
  // The Delete button to remove an employee record.
  trDataDetails += `<td>
      <button onclick="editRecords('${empInfoData.empName}')">Edit</button>     
      <button onclick="deleteRecord('${empInfoData.empName}')">Delete</button>
  </td>`;
  trDataDetails += `</tr>`;
  trData.innerHTML = trDataDetails;
  // Appending the row to the Table Body
  empInfo.appendChild(trData);
};

// Function to edit a record based on Employee Name
const editRecords = (empNameToEdit) => {
  // Find the employee object that matches the provided name
  const employee = employeeDetails.find(emp => emp.empName === empNameToEdit);
  if (employee) {
      empName.value = employee.empName;
      age.value = employee.age;
      designation.value = employee.designation;

      // Removing the row based on employee Name from the array temporarily for updating(If we won't provide this then edited record displays twice)
      employeeDetails = employeeDetails.filter(emp => emp.empName !== empNameToEdit);
      empInfo.innerHTML = "";
      employeeDetails.forEach(emp => addEmpInfoToTable(empInfo, emp));          // Rebuild the table with the remaining employees
  }
};
  
// Function to delete a record based on Employee Name
const deleteRecord = (empNameToDelete) => {
  employeeDetails = employeeDetails.filter(emp => emp.empName !== empNameToDelete);

  // Refreshes the table to reflect the deletion
  empInfo.innerHTML = "";
  employeeDetails.forEach(emp => addEmpInfoToTable(empInfo, emp));
};


















// const addEmpInfoToTable = (empInfo, empInfoData) => {
//     var trData = document.createElement("tr");
//     var trDataDetails = `<tr>`;
//     trDataDetails += `<td> ${empInfoData.empName} </td>`;
//     trDataDetails += `<td> ${empInfoData.age} </td>`;
//     trDataDetails += `<td> ${designations[empInfoData.designation]} </td>`;
    // trDataDetails += `<td> <button id = '${empInfoData.empName}' onclick = 'editRecords(${empInfoData.empName})'>Edit</button>`;
    // trDataDetails += `<button id = '${empInfoData.empName}' onclick = 'deleteRecord(${empInfoData.empName})'>Delete</button> </td>`;
//     trDataDetails += `</tr>`;
  
//     trData.innerHTML = trDataDetails;
//     empInfo.appendChild(trData);
//   };
//   const editRecords = (empNameToEdit) => {
//     const employee = employeeDetails.find(emp => emp.empName === empNameToEdit);
//     if (employee) {
//         empName.value = employee.empName;
//         age.value = employee.age;
//         designation.value = employee.designation;
  
//         // Remove the current record from the array for updating
//         employeeDetails = employeeDetails.filter(emp => emp.empName !== empNameToEdit);
//         empInfo.innerHTML = "";
//         employeeDetails.forEach(emp => addEmpInfoToTable(empInfo, emp));
//     }
//   };
//   const deleteRecord = (empNameToDelete) => {
//     employeeDetails = employeeDetails.filter(emp => emp.empName !== empNameToDelete);

//     // Refresh table
//     empInfo.innerHTML = "";
//     employeeDetails.forEach(emp => addEmpInfoToTable(empInfo, emp));
// };  