import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { useEmployees } from '../context/EmployeesContext';
import type { Employee } from '../types/Employee';
import type { FormData } from '../utils/validationSchemas';
import { employeeSchema } from '../utils/validationSchemas';

const generateUniqueId = () => Math.random().toString(36).substring(2, 9); 

const EmployeeForm: React.FC = () => {
  const { dispatch } = useEmployees();
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm<FormData>({
    resolver: zodResolver(employeeSchema),
    defaultValues: {
      name: '',
      cpf: '',
      grossSalary: 0,
      pensionDiscount: 0,
      numberOfDependents: 0,
    }
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const newEmployee: Employee = {
      id: generateUniqueId(),
      ...data
    };

    dispatch({ type: 'ADD_EMPLOYEE', payload: newEmployee });
    
    reset(); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="employee-form">
      <h3>Cadastro de Funcionário</h3>
      
      <div className="form-group">
        <label htmlFor="name">Nome</label>
        <input 
          type="text" 
          {...register("name")} 
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="cpf">CPF</label>
        <input 
          type="text" 
          {...register("cpf")} 
        />
        {errors.cpf && <p className="error">{errors.cpf.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="grossSalary">Salário Bruto</label>
        <input 
          type="number" 
          {...register("grossSalary")} 
        />
        {errors.grossSalary && <p className="error">{errors.grossSalary.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="pensionDiscount">Desconto da Previdência</label>
        <input 
          type="number" 
          {...register("pensionDiscount")} 
        />
        {errors.pensionDiscount && <p className="error">{errors.pensionDiscount.message}</p>}
      </div>
      
      <div className="form-group">
        <label htmlFor="numberOfDependents">Número de Dependentes</label>
        <input 
          type="number" 
          {...register("numberOfDependents")} 
        />
        {errors.numberOfDependents && <p className="error">{errors.numberOfDependents.message}</p>}
      </div>

      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default EmployeeForm;