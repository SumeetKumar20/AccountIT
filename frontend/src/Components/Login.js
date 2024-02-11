import { auth, googleProvider } from './Firebase';
import { signInWithPopup } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components';

const LoginStyled = styled.div`
 

  align-items: center;
  background-image:url("../img/background.png")
  display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Set height to 100% of the viewport height */
    padding:250px;
    margin-left:30px;

  


  h1 {
    margin-bottom: 20px;
    font-size: 56px;
    color: #333;
  }

  button {
    background-color: #4285f4;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    font-size: 36px;

    &:hover {
      background-color: #3c77f7;
    }
  }
`;

function Login() {
  const [user] = useAuthState(auth);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <LoginStyled>
      <h1>Welcome to AccountIT</h1>
      <button onClick={signInWithGoogle}>Login with Google</button>
    </LoginStyled>
  );
}

export default Login;
