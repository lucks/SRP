import React from 'react';
import { Calendar, Thermometer, Beaker, FileText } from 'lucide-react';

interface Report {
  id: string;
  poolId: string;
  date: string;
  ph: number;
  chlorine: number;
  alkalinity: number;
  temperature: number;
  observations: string;
  recommendations: string;
  engineerId: string;
  images?: string[];
}

interface ReportCardProps {
  report: Report;
  isExpanded: boolean;
}

export default function ReportCard({ report, isExpanded }: ReportCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold">Piscina ID: {report.poolId}</h3>
          <p className="text-gray-600 flex items-center mt-1">
            <Calendar className="h-4 w-4 mr-2" />
            {new Date(report.date).toLocaleDateString()}
          </p>
        </div>
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
          Completado
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center text-gray-600 mb-1">
            <Beaker className="h-4 w-4 mr-2" />
            pH
          </div>
          <span className="text-lg font-semibold">{report.ph}</span>
        </div>

        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center text-gray-600 mb-1">
            <Beaker className="h-4 w-4 mr-2" />
            Cloro
          </div>
          <span className="text-lg font-semibold">{report.chlorine} ppm</span>
        </div>

        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center text-gray-600 mb-1">
            <Beaker className="h-4 w-4 mr-2" />
            Alcalinidad
          </div>
          <span className="text-lg font-semibold">{report.alkalinity} ppm</span>
        </div>

        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center text-gray-600 mb-1">
            <Thermometer className="h-4 w-4 mr-2" />
            Temperatura
          </div>
          <span className="text-lg font-semibold">{report.temperature}°C</span>
        </div>
      </div>

      {isExpanded && (
        <>
          <div className="mb-4">
            <h4 className="font-medium flex items-center mb-2">
              <FileText className="h-4 w-4 mr-2" />
              Observaciones
            </h4>
            <p className="text-gray-700">{report.observations}</p>
          </div>

          <div className="mb-4">
            <h4 className="font-medium flex items-center mb-2">
              <FileText className="h-4 w-4 mr-2" />
              Recomendaciones
            </h4>
            <p className="text-gray-700">{report.recommendations}</p>
          </div>

          {report.images && report.images.length > 0 && (
            <div>
              <h4 className="font-medium mb-2">Imágenes</h4>
              <div className="grid grid-cols-2 gap-4">
                {report.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Imagen ${index + 1}`}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}