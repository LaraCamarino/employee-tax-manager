import React from 'react';
import { useEmployees } from '../context/EmployeesContext';
import EmployeeForm from '../components/EmployeeForm';
import EmployeeTable from '../components/EmployeeTable';
import EmployeeEditModal from '../components/EmployeeEditModal';

const EmployeeManager: React.FC = () => {
  const { state } = useEmployees();
  const isModalOpen = !!state.employeeToEdit;

  return (
    <div className="employee-management-page">
      <h1>Gestão de Funcionários e Cálculo de IRRF</h1>
      
      <section className="registration-section">
        <EmployeeForm />
      </section>

      <section className="list-section">
        <EmployeeTable />
      </section>

      {isModalOpen && (
        <EmployeeEditModal />
      )}
    </div>
  );
};

export default EmployeeManager;