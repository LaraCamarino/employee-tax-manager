# 👨‍💼 Employee Tax Manager - Gerenciamento e Cálculo de IRRF

## 🚀 Sobre o Projeto

O **Employee Tax Manager** é uma aplicação Front-End desenvolvida em React e TypeScript, focada no gerenciamento de dados de funcionários e no cálculo automatizado do Imposto de Renda Retido na Fonte (IRRF).

O objetivo principal é fornecer uma interface simples e eficiente para o cadastro, edição, exclusão e visualização de funcionários, exibindo em tempo real os descontos de Previdência e a base de cálculo do IRRF.

## ✨ Funcionalidades Implementadas

* **CRUD Completo:** Cadastro, Leitura, Atualização e Exclusão de funcionários.
* **Edição via Modal:** Interface de edição dedicada que reutiliza o formulário de cadastro de forma limpa, garantindo a separação entre os modos de Criação e Edição.
* **Cálculo Dinâmico:** Cálculo em tempo real do salário base IR e do valor final do IRRF.
* **Validação Robusta:** Uso do **React Hook Form (RHF)** e **Zod** para validação de esquemas de dados (CPF, Salário Bruto, etc.).
* **Gestão de Estado Centralizada:** Utiliza a **Context API** com `useReducer` para gerenciar o estado global da lista de funcionários e do funcionário em edição (`employeeToEdit`).

## 🛠️ Tecnologias Utilizadas

* **React:** Biblioteca principal.
* **TypeScript:** Para tipagem estática e segurança de código.
* **React Hook Form:** Gerenciamento eficiente de formulários.
* **Zod:** Validação de esquemas de dados.
* **Context API + useReducer:** Gerenciamento de estado global.

## ⚙️ Como Executar Localmente

Siga estas instruções para configurar e rodar o projeto em sua máquina:

### Pré-requisitos

* Node.js (versão LTS recomendada)
* npm ou yarn

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/LaraCamarino/employee-tax-manager.git](https://github.com/LaraCamarino/employee-tax-manager.git)
    cd employee-tax-manager
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Inicie o projeto:**
    ```bash
    npm run dev
    # ou
    yarn dev
    ```

O aplicativo estará disponível em `http://localhost:5173` (ou porta similar).