import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ReportCard from './components/ReportCard';
import ReportForm from './components/ReportForm';
import { Waves, ClipboardList, Search } from 'lucide-react';

// Mock data
const mockReports = [
  {
    id: '1234567890',
    poolId: 'pool1',
    date: '2024-03-15',
    ph: 7.4,
    chlorine: 2.0,
    alkalinity: 100,
    temperature: 28,
    observations:
      'Condiciones normales de la piscina. Limpieza regular realizada.',
    recommendations:
      'Mantener el monitoreo diario. Próxima limpieza profunda en 7 días.',
    engineerId: 'eng1',
    images: [
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1519449556851-5720b33024e7?w=800&auto=format&fit=crop&q=60',
    ],
  },
  {
    id: '0987654321',
    poolId: 'pool2',
    date: '2024-03-14',
    ph: 6.8,
    chlorine: 1.5,
    alkalinity: 90,
    temperature: 27,
    observations: 'Nivel de pH ligeramente bajo. Se requiere ajuste.',
    recommendations:
      'Aplicar regulador de pH. Verificar nuevamente en 24 horas.',
    engineerId: 'eng1',
  },
];

function App() {
  const [userRole] = useState<'engineer' | 'client'>('engineer');
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar role={userRole} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">SRP</h1>
            <p className="mt-1 text-gray-600">
              Gestión y análisis de calidad del agua
            </p>
          </div>

          {userRole === 'engineer' && (
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center"
            >
              <ClipboardList className="h-5 w-5 mr-2" />
              Nuevo Reporte
            </button>
          )}
        </div>

        {showForm ? (
          <ReportForm />
        ) : (
          <>
            <div className="mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar reportes..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="grid gap-6">
              {mockReports.map((report) => (
                <ReportCard key={report.id} report={report} isExpanded={true} />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
