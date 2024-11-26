import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, Calendar, Shield, Clock } from 'lucide-react';

export function Welcome() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Wrench className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Mazos Car Workshop
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Tu taller de confianza. Agenda tu cita de manera fácil y rápida para mantener tu vehículo en las mejores condiciones.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/register"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Comenzar
              </Link>
              <Link
                to="/login"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Ya tengo una cuenta <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3">
              <div className="flex flex-col items-center">
                <Calendar className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">Agenda Online</h3>
                <p className="mt-2 text-gray-600">
                  Programa tu cita en cualquier momento del día
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">Servicio Garantizado</h3>
                <p className="mt-2 text-gray-600">
                  Técnicos certificados y repuestos originales
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900">Atención Rápida</h3>
                <p className="mt-2 text-gray-600">
                  Servicio eficiente y puntual
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}