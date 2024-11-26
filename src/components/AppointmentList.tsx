import React from 'react';
import { formatDate, formatTime } from '../utils/dateUtils';
import type { Appointment } from '../types/appointment';
import { Clock, Calendar, User, Wrench } from 'lucide-react';

interface AppointmentListProps {
  appointments: Appointment[];
  onDelete: (id: string) => void;
}

export function AppointmentList({ appointments, onDelete }: AppointmentListProps) {
  if (appointments.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No hay citas programadas
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {appointments.map((appointment) => (
        <div
          key={appointment.id}
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4 text-blue-600" />
                <span className="font-medium">{appointment.customerName}</span>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(appointment.date)}</span>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{formatTime(appointment.time)}</span>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-600">
                <Wrench className="w-4 h-4" />
                <span>{appointment.description}</span>
              </div>
            </div>
            
            <button
              onClick={() => onDelete(appointment.id)}
              className="text-red-600 hover:text-red-800 transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}