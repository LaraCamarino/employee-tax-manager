import { createContext, useReducer, useContext, ReactNode, Dispatch } from 'react';
import type { EmployeeData, Employee, IRRFCalculation } from '../types/Employee';
import { calculateIRRF } from '../utils/taxCalculations';

interface State {
  employees: EmployeeData[];
  employeeToEdit: EmployeeData | null;
}

type Action =
  | { type: 'ADD_EMPLOYEE'; payload: Employee }
  | { type: 'UPDATE_EMPLOYEE'; payload: Employee }
  | { type: 'DELETE_EMPLOYEE'; payload: string }
  | { type: 'SET_EMPLOYEE_TO_EDIT'; payload: EmployeeData | null };

const EmployeesContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
} | undefined>(undefined);

function employeesReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_EMPLOYEE': {
      const taxResults: IRRFCalculation = calculateIRRF(action.payload);
      
      const newEmployee: EmployeeData = { ...action.payload, ...taxResults };
      
      return { ...state, employees: [...state.employees, newEmployee] };
    }
    
    case 'UPDATE_EMPLOYEE': {
      const updatedInput = action.payload;
      const taxResults: IRRFCalculation = calculateIRRF(updatedInput);
      const updatedEmployee: EmployeeData = { ...updatedInput, ...taxResults };

      return {
        ...state,
        employees: state.employees.map(employee => 
          employee.id === updatedEmployee.id ? updatedEmployee : employee
        ),
      };
    }
    
    case 'DELETE_EMPLOYEE':
      return {
        ...state,
        employees: state.employees.filter(employee => employee.id !== action.payload)
      };
    
    case 'SET_EMPLOYEE_TO_EDIT':
      return {
        ...state,
        employeeToEdit: action.payload
      };  
      
    default:
      return state;
  }
}

export const EmployeesProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(employeesReducer, { employees: [], employeeToEdit: null });

  return (
    <EmployeesContext.Provider value={{ state, dispatch }}>
      {children}
    </EmployeesContext.Provider>
  );
};

export const useEmployees = () => {
  const context = useContext(EmployeesContext);
  
  if (!context) {
    throw new Error('useEmployees must be used within an EmployeesProvider');
  }

  return context;
};