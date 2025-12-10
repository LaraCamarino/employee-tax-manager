import type { EmployeeData } from "../types/Employee";
import { calculateIRRF } from "../utils/taxCalculations";

const rawEmployees = [
  {
    id: "a1b2c3d",
    name: "João Silva",
    cpf: "12345678901",
    grossSalary: 5500.0,
    pensionDiscount: 600.0,
    numberOfDependents: 1,
  },
  {
    id: "e4f5g6h",
    name: "Maria Oliveira",
    cpf: "98765432109",
    grossSalary: 2800.0,
    pensionDiscount: 350.0,
    numberOfDependents: 0,
  },
  {
    id: "i7j8k9l",
    name: "Carlos Santos",
    cpf: "11223344556",
    grossSalary: 12000.0,
    pensionDiscount: 877.24,
    numberOfDependents: 3,
  },
];

const initialEmployees: EmployeeData[] = rawEmployees.map((emp) => {
  const taxResults = calculateIRRF(emp);
  return {
    ...emp,
    ...taxResults,
  } as EmployeeData;
});

export default initialEmployees;
