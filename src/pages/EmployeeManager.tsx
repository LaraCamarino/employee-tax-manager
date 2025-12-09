import React from 'react';
import EmployeeForm from '../components/EmployeeForm';
import EmployeeTable from '../components/EmployeeTable';

const EmployeeManager: React.FC = () => {
  return (
    <div className="employee-management-page">
      <h1>Gestão de Funcionários e Cálculo de IRRF</h1>
      
      <section className="registration-section">
        <EmployeeForm />
      </section>

      <section className="list-section">
        <EmployeeTable />
      </section>
    </div>
  );
};

export default EmployeeManager;