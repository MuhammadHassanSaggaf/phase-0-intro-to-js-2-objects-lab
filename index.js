// Write your solution in this file

const employee = {
  name : 'Muhammad Saggaf',
  address : 'Mombasa'

};

function updateEmployeeWithKeyAndValue(emp, key, value) {
  return {
    ...emp,
    [key] : value
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(emp, key, value) {
  emp[key] = value;
  return emp;
}

function deleteFromEmployeeByKey(emp, key){
  let newEmp = {...emp};
  delete newEmp[key];
  return newEmp;
}

function destructivelyDeleteFromEmployeeByKey(emp, key){
  delete emp[key];
  return emp;
}
