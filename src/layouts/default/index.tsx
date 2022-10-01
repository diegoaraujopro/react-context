import { Outlet } from 'react-router-dom';

export function Default() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}
