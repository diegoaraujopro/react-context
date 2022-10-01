import { ReactNode, useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';
import { Dashboard } from '../pages/Dashboard';
import { Home } from '../pages/Home';
import { SignIn } from '../pages/SignIn';

export const AppRoutes = () => {
  function RequireAuth({ children }: { children: JSX.Element }) {
    const { signed } = useContext(AuthContext);

    if (!signed) {
      return <Navigate to="/home" />;
    }
    return children;
  }

  return (
    <Routes>
      <Route
        path="/protected"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};
