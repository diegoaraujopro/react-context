import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

export function SignIn() {
  const { signed, signIn, signOut } = useContext(AuthContext);

  const [signInText, setSignInText] = useState('Sign In');

  async function handleSignIn() {
    setSignInText('loading...');
    await signIn();
    setSignInText('Sign In');
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
        <Link to="/protected" className="App-link">
          Dashboard (Protected)
        </Link>
        <br />
        <Link to="/protected-2" className="App-link">
          Settings (Protected)
        </Link>
      </>
    );
  } else {
    return (
      <>
        <button onClick={handleSignIn}>{signInText}</button>
        <br />
        <Link to="/protected" className="App-link">
          Dashboard (Protected)
        </Link>
        <br />
        <Link to="/protected-2" className="App-link">
          Settings (Protected)
        </Link>
      </>
    );
  }
}
