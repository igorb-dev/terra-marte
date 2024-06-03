import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import RoutesPage from './pages/Routes/Routes';
import './index.css';
import { ContextApiProvider } from './context/ContextApi';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ContextApiProvider>
      <RoutesPage />
    </ContextApiProvider>
  </BrowserRouter>
);