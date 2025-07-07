import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Home, List, Calendar, DollarSign, MessageSquare, ShieldCheck, LogOut } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProviderLayout: React.FC = () => {
  const { t } = useLanguage();

  const navItems = [
    { to: '/provider/dashboard', icon: Home, label: t('dashboard') },
    { to: '/provider/listings', icon: List, label: 'Listings' },
    { to: '/provider/calendar', icon: Calendar, label: 'Calendar' },
    { to: '/provider/bookings', icon: Calendar, label: 'Bookings' },
    { to: '/provider/earnings', icon: DollarSign, label: 'Earnings' },
    { to: '/provider/chat', icon: MessageSquare, label: 'Chat' },
    { to: '/provider/verify', icon: ShieldCheck, label: 'Verification' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md flex flex-col">
        <div className="p-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
            Der Meister
          </h1>
          <span className="text-sm text-gray-500">Provider Portal</span>
        </div>
        <nav className="flex-1 px-4 py-2">
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-1 rounded-lg transition-colors duration-200 ${isActive
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-100'
                    }`
                  }
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t">
          <button className="flex items-center w-full px-4 py-2 text-left text-gray-600 hover:bg-gray-100 rounded-lg">
            <LogOut className="w-5 h-5 mr-3" />
            {t('logout')}
          </button>
        </div>
      </aside>
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default ProviderLayout;
