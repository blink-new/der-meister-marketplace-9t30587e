import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Auth } from '@/components/Auth';
import { Home } from '@/components/Home';
import ProviderLayout from '@/pages/provider/ProviderLayout';
import ManageListings from '@/pages/provider/ManageListings';
import { User } from '@/types';
import ServiceDetail from '@/pages/ServiceDetail';
import BookingConfirm from '@/pages/BookingConfirm';

function App() {
  const [user, setUser] = useState<User | null>(null);

  const handleAuthComplete = (userData: User) => {
    setUser(userData);
  };

  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route 
              path="/" 
              element={!user ? <Auth onComplete={handleAuthComplete} /> : <Home user={user} />}
            />
            <Route path="/services/:id" element={<ServiceDetail />} />
            <Route 
              path="/provider" 
              element={user?.role === 'provider' ? <ProviderLayout /> : <Navigate to="/" />}
            >
              <Route path="dashboard" element={<div>Provider Dashboard</div>} />
              <Route path="listings" element={<ManageListings />} />
              {/* Add other provider routes here */}
            </Route>
            <Route path="/booking/confirm" element={<BookingConfirm />} />
            {/* Redirect to provider dashboard after login if role is provider */}
            {user?.role === 'provider' && <Route path="/" element={<Navigate to="/provider/dashboard" replace />} />}
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;