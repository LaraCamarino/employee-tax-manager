import React from 'react';
import { useEmployees } from '../context/EmployeesContext';
import EmployeeForm from './EmployeeForm';

const EmployeeEditModal: React.FC = () => {
  const { state } = useEmployees();
  const employeeToEdit = state.employeeToEdit;

  if (!employeeToEdit) return null;
  
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <EmployeeForm employeeToEdit={employeeToEdit}/> 
      </div>
    </div>
  );
};

export default EmployeeEditModal;