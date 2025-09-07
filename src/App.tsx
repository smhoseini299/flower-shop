import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Shop from './components/Shop';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [user, setUser] = useState<{ username: string } | null>(null);

  const handleLogin = (username: string, password: string) => {
    // Simple authentication check (in real app, this would be an API call)
    if (username && password) {
      setUser({ username });
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    setShowAdminLogin(false);
  };

  const handleAdminLogin = () => {
    setShowAdminLogin(true);
  };

  const handleBackToShop = () => {
    setShowAdminLogin(false);
  };

  return (
    <div className="App">
      {!showAdminLogin && !isLoggedIn ? (
        <Shop onAdminLogin={handleAdminLogin} />
      ) : !isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Dashboard onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;