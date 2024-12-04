// Define an empty array to store employee details and empty object to store individual employee data
let employeeDetails = [];
let employeeInfo = {};

submitButton.addEventListener("click", () => {
  if (empName.value == "" || age.value == "") {
      alert("All fields are mandatory!");
  } else if (age.value < 20 || age.value > 60) {
      alert("Employee age can't be allowed");
  } else {
      employeeInfo = {
          empName: empName.value,
          age: age.value,
          designation: designation.value,
      };

      employeeDetails.push(employeeInfo);                // Adding an new employee object to the employeeDetails array
      addEmpInfoToTable(empInfo, employeeInfo);          // Adding an employee information to the table
      clearFields();
  }
});

