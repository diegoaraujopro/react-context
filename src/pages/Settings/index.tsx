import { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

export function Settings() {
  const { signOut } = useContext(AuthContext);

  function handleSignOut() {
    signOut();
  }

  return (
    <>
      <h1>Settings</h1>
      <button title="Sign Out" onClick={handleSignOut}>
        Sign Out
      </button>
    </>
  );
}
