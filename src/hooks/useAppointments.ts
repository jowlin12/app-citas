import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appointment } from '../types/appointment';
import { useTimeSlots } from './useTimeSlots';

export function useAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const { timeSlots } = useTimeSlots();

  useEffect(() => {
    loadAppointments();
  }, []);

  const loadAppointments = async () => {
    try {
      const stored = await AsyncStorage.getItem('appointments');
      if (stored) {
        setAppointments(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error loading appointments:', error);
    }
  };

  const saveAppointments = async (newAppointments: Appointment[]) => {
    try {
      await AsyncStorage.setItem('appointments', JSON.stringify(newAppointments));
    } catch (error) {
      console.error('Error saving appointments:', error);
    }
  };

  const createAppointment = async (data: {
    timeSlotId: string;
    date: string;
    time: string;
    description: string;
  }) => {
    const newAppointment: Appointment = {
      id: Date.now().toString(),
      customerId: 'current-user-id', // Replace with actual user ID
      customerName: 'Current User', // Replace with actual user name
      timeSlotId: data.timeSlotId,
      date: data.date,
      time: data.time,
      description: data.description,
      status: 'pending'
    };

    const newAppointments = [...appointments, newAppointment];
    setAppointments(newAppointments);
    await saveAppointments(newAppointments);
  };

  const getCustomerAppointments = (customerId: string) => {
    return appointments.filter(app => app.customerId === customerId);
  };

  const getAllAppointments = () => {
    return appointments.map(app => ({
      ...app,
      timeSlot: timeSlots.find(slot => slot.id === app.timeSlotId)
    }));
  };

  return {
    appointments: getAllAppointments(),
    customerAppointments: (id: string) => getCustomerAppointments(id),
    createAppointment
  };
}