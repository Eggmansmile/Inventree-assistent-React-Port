import Logo from './logo'
import './App.css'
import Header from './header'
import Scanner from './Scanner'
import ButtonPing from './ButtonPing'

function App(){
  // Otherwise, show the main application content
  return (
    <div className="App">
      <Logo />
      <Header />
      <Scanner />
      <ButtonPing/>
    </div>
  );
}

export default App
