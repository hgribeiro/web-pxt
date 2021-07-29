import { useContext } from 'react';
import { ReactNode } from 'react';
import { useAuth } from '../../contexts/AuthContext';


interface MainProps {
  children: ReactNode;
}

function Main({ children }: MainProps) {

  const {user} = useAuth()

  return (
    <>
      <h1>{user?.id}</h1>
      {children}
    </>
  );
}

export default Main;
