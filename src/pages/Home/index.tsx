
import { useHistory} from 'react-router-dom'

import { Container } from './styles';

import HomeImage from '../../assets/home.svg'
import googleIcon from '../../assets/google-icon.svg'

import { useAuth } from '../../contexts/AuthContext';



function Home() {

  const history = useHistory();
  const{signInWithGoogle,user} = useAuth()


  function handleSignIn() {
    if(!user){
      signInWithGoogle();
    }


    history.push('/main')
  }
  return (
    <Container>
      <aside>
        <img src={HomeImage} alt="woman writing in a note" />
        <strong>Crie Anotações como quiser</strong>
        <p>Nunca mais esqueça das coisas</p>
      </aside>
      <main>
        <div>
          <strong>Notes</strong>
          <button onClick={handleSignIn} >
          <img src={googleIcon} alt="google's icon" />
          Faça login com o Google
          </button>
        </div>
      </main>
    </Container>
  );
};

export default Home;
