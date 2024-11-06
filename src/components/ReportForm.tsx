import React, { useState } from 'react';
import { Beaker, Thermometer, FileText, Camera } from 'lucide-react';

interface ReportFormData {
  poolId: string;
  ph: number;
  chlorine: number;
  alkalinity: number;
  temperature: number;
  observations: string;
  recommendations: string;
  images: FileList | null;
}

export default function ReportForm() {
  const [formData, setFormData] = useState<ReportFormData>({
    poolId: '',
    ph: 7.0,
    chlorine: 1.0,
    alkalinity: 80,
    temperature: 26,
    observations: '',
    recommendations: '',
    images: null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Nuevo Reporte de Análisis</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ID de Piscina
          </label>
          <input
            type="text"
            required
            className="w-full p-2 border rounded-md"
            value={formData.poolId}
            onChange={(e) => setFormData({...formData, poolId: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <span className="flex items-center">
              <Beaker className="h-4 w-4 mr-2" />
              pH
            </span>
          </label>
          <input
            type="number"
            step="0.1"
            required
            className="w-full p-2 border rounded-md"
            value={formData.ph}
            onChange={(e) => setFormData({...formData, ph: parseFloat(e.target.value)})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <span className="flex items-center">
              <Beaker className="h-4 w-4 mr-2" />
              Cloro (ppm)
            </span>
          </label>
          <input
            type="number"
            step="0.1"
            required
            className="w-full p-2 border rounded-md"
            value={formData.chlorine}
            onChange={(e) => setFormData({...formData, chlorine: parseFloat(e.target.value)})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <span className="flex items-center">
              <Beaker className="h-4 w-4 mr-2" />
              Alcalinidad (ppm)
            </span>
          </label>
          <input
            type="number"
            required
            className="w-full p-2 border rounded-md"
            value={formData.alkalinity}
            onChange={(e) => setFormData({...formData, alkalinity: parseInt(e.target.value)})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <span className="flex items-center">
              <Thermometer className="h-4 w-4 mr-2" />
              Temperatura (°C)
            </span>
          </label>
          <input
            type="number"
            step="0.1"
            required
            className="w-full p-2 border rounded-md"
            value={formData.temperature}
            onChange={(e) => setFormData({...formData, temperature: parseFloat(e.target.value)})}
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <span className="flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              Observaciones
            </span>
          </label>
          <textarea
            rows={3}
            className="w-full p-2 border rounded-md"
            value={formData.observations}
            onChange={(e) => setFormData({...formData, observations: e.target.value})}
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <span className="flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              Recomendaciones
            </span>
          </label>
          <textarea
            rows={3}
            className="w-full p-2 border rounded-md"
            value={formData.recommendations}
            onChange={(e) => setFormData({...formData, recommendations: e.target.value})}
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <span className="flex items-center">
              <Camera className="h-4 w-4 mr-2" />
              Imágenes
            </span>
          </label>
          <input
            type="file"
            multiple
            accept="image/*"
            className="w-full p-2 border rounded-md"
            onChange={(e) => setFormData({...formData, images: e.target.files})}
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Guardar Reporte
        </button>
      </div>
    </form>
  );
}