import React, { useState } from 'react';
import { generateId } from '../utils/dateUtils';
import type { Appointment } from '../types/appointment';

interface AppointmentFormProps {
  onSubmit: (appointment: Appointment) => void;
}

export function AppointmentForm({ onSubmit }: AppointmentFormProps) {
  const [formData, setFormData] = useState({
    customerName: '',
    date: '',
    time: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: generateId(),
      ...formData,
    });
    setFormData({
      customerName: '',
      date: '',
      time: '',
      description: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <div>
        <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">
          Nombre del Cliente
        </label>
        <input
          type="text"
          id="customerName"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.customerName}
          onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">
          Fecha
        </label>
        <input
          type="date"
          id="date"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="time" className="block text-sm font-medium text-gray-700">
          Hora
        </label>
        <input
          type="time"
          id="time"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={formData.time}
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Descripción del Servicio
        </label>
        <textarea
          id="description"
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          rows={3}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Agendar Cita
      </button>
    </form>
  );
}