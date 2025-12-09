import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { EmployeesProvider } from './context/EmployeesContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EmployeesProvider>    
      <App />
    </EmployeesProvider>
  </StrictMode>,
)
