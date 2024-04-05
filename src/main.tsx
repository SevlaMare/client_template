import ReactDOM from 'react-dom/client';

import { RouterProvider } from './providers/routes';
import { AuthProvider } from './providers/auth';
import { ThemeProvider } from './providers/theme';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <AuthProvider>
      <RouterProvider />
    </AuthProvider>
  </ThemeProvider>
);
