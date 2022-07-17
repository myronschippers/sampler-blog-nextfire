import { useContext } from 'react';
import {
  auth,
  googleAuthProvider,
  authSignInWithPopup,
} from '../../../lib/firebase';
import { UserContext } from '../../../lib/context';

export default function Enter() {
  const { user, username } = useContext(UserContext);

  return (
    <main>
      <h2>Sign in</h2>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
}

// Sign in with Google button
function SignInButton() {
  const signInWithGoogle = async () => {
    await authSignInWithPopup(auth, googleAuthProvider);
  };

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={'/google-logo.png'} /> Sign in with Google
    </button>
  );
}

// Sign out button
function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign out</button>;
}

function UsernameForm() {
  return null;
}
