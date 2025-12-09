import { z } from "zod";

export const employeeSchema = z.object({
  name: z.string().min(3, "Mínimo de 3 caracteres."),
  cpf: z
    .string()
    .min(1, "CPF é obrigatório.")
    .regex(/^[0-9]+$/, "O CPF deve conter apenas números.")
    .length(11, "O CPF deve ter exatamente 11 dígitos."),
  grossSalary: z.coerce
    .number()
    .min(0.01, "Salário bruto deve ser maior que zero."),
  pensionDiscount: z.coerce
    .number()
    .min(0, "Desconto da previdência deve ser maior ou igual a zero."),
  numberOfDependents: z.coerce
    .number()
    .int()
    .min(0, "Número de dependentes deve ser maior ou igual a zero."),
});

export type FormData = z.infer<typeof employeeSchema>;
