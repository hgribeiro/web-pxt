

import { BrowserRouter, Route } from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContext';
import Home from './pages/Home';
import Main from './pages/Main';
import GlobalStyle from './styles/global';


function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={Home} />
        <Route path="/main" component={Main} />
      </AuthContextProvider>
      <GlobalStyle />
    </BrowserRouter>

  );
}

export default App;
