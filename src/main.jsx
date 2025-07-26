import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@material-tailwind/react'
import MyState from "./context/data/MyState";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <MyState>
        <App />
      </MyState>
    </ThemeProvider>
  </StrictMode>
);
