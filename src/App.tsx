import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Welcome } from './pages/Welcome';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';
import { AppointmentForm } from './components/AppointmentForm';
import { AppointmentList } from './components/AppointmentList';

function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Nueva Cita</h2>
            <AppointmentForm onSubmit={() => {}} />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Mis Citas</h2>
            <AppointmentList appointments={[]} onDelete={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <Toaster position="top-right" />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;