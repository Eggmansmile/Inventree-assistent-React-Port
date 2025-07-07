import { useState } from 'react';
import Logo from './logo'
import './App.css'
import Header from './header'
import Scanner from './Scanner'
import ButtonPing from './ButtonPing'
import Login from './login';
import TestAPIbutton from './TestAPIbutton';



function App(){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLoginSuccess = (username, password) => {
    setCredentials({ username, password });
    setIsLoggedIn(true);
  };

  // If the user is not logged in, show the login screen
  if (!isLoggedIn) {
    return (<Login onLoginSuccess={handleLoginSuccess} />)
  }

  // Otherwise, show the main application content
  return (
    <div className="App">
      <Logo />
      <Header />
      <Scanner />
      <ButtonPing/>
      <TestAPIbutton username={credentials.username} password={credentials.password} />
    </div>
  );
}

export default App
