import { useState } from 'react';
import { Login } from '@/app/components/Login';
import { Dashboard } from '@/app/components/Dashboard';

interface User {
  email: string;
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (email: string, password: string) => {
    // Mock authentication - aceita qualquer email/senha
    setUser({ email });
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return <Dashboard userEmail={user.email} onLogout={handleLogout} />;
}
