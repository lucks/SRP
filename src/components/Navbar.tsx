import React from 'react';
import { Menu, LogOut, ClipboardList, Waves } from 'lucide-react';

export default function Navbar({ role }: { role: 'engineer' | 'client' }) {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Waves className="h-8 w-8" />
            <span className="ml-2 text-xl font-semibold">AquaReport</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="hover:bg-blue-700 px-3 py-2 rounded-md flex items-center">
              <ClipboardList className="h-5 w-5 mr-2" />
              {role === 'engineer' ? 'Nuevo Reporte' : 'Mis Reportes'}
            </button>
            <button className="hover:bg-blue-700 px-3 py-2 rounded-md">
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}