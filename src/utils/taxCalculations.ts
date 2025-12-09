import type { Employee, IRRFCalculation } from "../types/Employee";

const DEDUCTION_PER_DEPENDENT_VALUE: number = 189.59;

export function calculateIRRF(employee: Employee): IRRFCalculation {
  const { grossSalary, pensionDiscount, numberOfDependents } = employee;

  const baseSalary =
    grossSalary -
    pensionDiscount -
    DEDUCTION_PER_DEPENDENT_VALUE * numberOfDependents;

  const taxBrackets = [
    { limit: 2259.2, taxRate: 0, deduction: 0.0 },
    { limit: 2826.65, taxRate: 0.075, deduction: 169.44 },
    { limit: 3751.05, taxRate: 0.15, deduction: 381.44 },
    { limit: 4664.68, taxRate: 0.225, deduction: 662.77 },
    { limit: Infinity, taxRate: 0.275, deduction: 896.0 },
  ];

  let taxRate = 0;
  let deductionAmount = 0;

  for (const bracket of taxBrackets) {
    if (baseSalary <= bracket.limit) {
      taxRate = bracket.taxRate;
      deductionAmount = bracket.deduction;
      break;
    }
  }

  const IRRFDiscount = Math.max(0, baseSalary * taxRate - deductionAmount);

  return {
    IRBaseSalary: Number(baseSalary.toFixed(2)),
    IRRFDiscount: Number(IRRFDiscount.toFixed(2)),
  };
}
