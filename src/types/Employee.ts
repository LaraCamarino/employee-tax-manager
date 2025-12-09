export interface Employee {
  id: string;
  name: string;
  cpf: string;
  grossSalary: number;
  pensionDiscount: number;
  numberOfDependents: number;
}

export interface IRRFCalculation {
  IRBaseSalary: number;
  IRRFDiscount: number;
}

export interface EmployeeData extends Employee, IRRFCalculation {}
