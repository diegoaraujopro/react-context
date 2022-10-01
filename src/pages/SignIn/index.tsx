import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

export function SignIn() {
  const { signed, signIn, signOut } = useContext(AuthContext);

  async function handleSignIn() {
    console.log('login');
    await signIn();
    console.log('loged');
  }

  function handleSignOut() {
    signOut();
  }

  if (signed) {
    return (
      <>
        <button title="Sign Out" onClick={handleSignOut}>
          Sign Out
        </button>
        <br />
        <Link to="/protected">Dashboard (Protected)</Link>
      </>
    );
  } else {
    return (
      <>
        <button title="Sign In" onClick={handleSignIn}>
          Sign In
        </button>
        <br />
        <Link to="/protected">Dashboard (Protected)</Link>
      </>
    );
  }
}
