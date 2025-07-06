import Logo from './logo'
import './App.css'
import Header from './header'
import Scanner from './Scanner'
import ButtonPing from './ButtonPing'
import Login from './Login'
import { AuthProvider, useAuth } from './AuthContext.jsx'

function AppContent() {
  const { user, logout } = useAuth();

  // If the user is not logged in, show the Login screen
  if (!user) {
    return <Login />;
  }

  // Otherwise, show the main application content
  return (
    <div className="App">
      <Logo />
      <Header />
      <p>Welcome, {user.username}! <button onClick={logout}>Logout</button></p>
      <Scanner />
      <ButtonPing/>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App
