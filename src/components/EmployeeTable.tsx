import React, { useState, useMemo } from 'react';
import { useEmployees } from '../context/EmployeesContext';
import type { EmployeeData } from '../types/Employee';
import { formatBRCurrency, formatCpf } from '../utils/formatters';

const EmployeeTable: React.FC = () => {
  const { state, dispatch } = useEmployees();
  const [nameFilter, setNameFilter] = useState('');
  const [cpfFilter, setCpfFilter] = useState('');
  
  const filteredEmployees = useMemo(() => {
    let list = state.employees;

    if (nameFilter) {
      list = list.filter(emp =>
        emp.name.toLowerCase().includes(nameFilter.toLowerCase())
      );
    }

    if (cpfFilter) {
      list = list.filter(emp => 
        emp.cpf.includes(cpfFilter)
      );
    }

    return list;
  }, [state.employees, nameFilter, cpfFilter]);

  const handleEdit = (id: string) => {
    const employeeToEdit = state.employees.find(employee => employee.id === id) || null;
    dispatch({ type: 'SET_EMPLOYEE_TO_EDIT', payload: employeeToEdit });
  }
  
  const handleDelete = (id: string) => {
    if (window.confirm("Tem certeza de que deseja excluir este funcionário?")) {
      dispatch({ type: 'DELETE_EMPLOYEE', payload: id });
    }
  };

  return (
    <div className="employee-list-container">
      <h3>Lista de Funcionários</h3>

      <div className="filter-controls">
        <input
          type="text"
          placeholder="Filtrar por nome"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filtrar por CPF"
          value={cpfFilter}
          onChange={(e) => setCpfFilter(e.target.value)}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Salário Bruto</th>
            <th>Desconto da Previdência</th>
            <th>Dependentes</th>
            <th>Desconto IRRF </th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee: EmployeeData) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{formatCpf(employee.cpf)}</td>
              <td>{formatBRCurrency(employee.grossSalary)}</td>
              <td>{formatBRCurrency(employee.pensionDiscount)}</td>
              <td>{employee.numberOfDependents}</td>
              <td style={{ fontWeight: 'bold' }}>
                {formatBRCurrency(employee.IRRFDiscount)}
              </td>
              <td>
                <button 
                  onClick={() => handleEdit(employee.id)}
                  style={{ marginRight: '8px' }}
                >
                  Atualizar
                </button>
                <button onClick={() => handleDelete(employee.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {filteredEmployees.length === 0 && <p>Nenhum funcionário encontrado.</p>}
    </div>
  );
};

export default EmployeeTable;