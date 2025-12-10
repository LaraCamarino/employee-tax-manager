import React from 'react';
import { useEmployees } from '../context/EmployeesContext';
import EmployeeForm from './EmployeeForm';

const EmployeeEditModal: React.FC = () => {
  const { state, dispatch } = useEmployees();
  const employeeToEdit = state.employeeToEdit;

  if (!employeeToEdit) return null;

  const handleClose = () => {
    dispatch({ type: 'SET_EMPLOYEE_TO_EDIT', payload: null });
  };
  
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button 
          onClick={handleClose} 
          className="modal-close-button"
        >
          &times;
        </button>
        <EmployeeForm employeeToEdit={employeeToEdit}/> 
      </div>
    </div>
  );
};

export default EmployeeEditModal;