import { ReactNode, useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';
import { Default } from '../layouts/default';
import { Dashboard } from '../pages/Dashboard';
import { Home } from '../pages/Home';
import { Settings } from '../pages/Settings';
import { SignIn } from '../pages/SignIn';

export const AppRoutes = () => {
  function RequireAuth({ children }: { children: JSX.Element }) {
    const { signed } = useContext(AuthContext);

    if (!signed) {
      alert('You are not logged');
      return <Navigate to="/home" />;
    }
    return children;
  }

  return (
    <Routes>
      <Route element={<Default />}>
        <Route
          path="/protected"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route
          path="/protected-2"
          element={
            <RequireAuth>
              <Settings />
            </RequireAuth>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/*" element={<Home />} />
      </Route>
    </Routes>
  );
};
