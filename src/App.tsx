import './App.css';

import { AuthProvider } from './contexts/AuthContext';
import { AppRoutes } from './routers';

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
