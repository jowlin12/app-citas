import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TimeSlot } from '../types/timeSlot';

export function useTimeSlots() {
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);

  useEffect(() => {
    loadTimeSlots();
  }, []);

  const loadTimeSlots = async () => {
    try {
      const stored = await AsyncStorage.getItem('timeSlots');
      if (stored) {
        setTimeSlots(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error loading time slots:', error);
    }
  };

  const saveTimeSlots = async (slots: TimeSlot[]) => {
    try {
      await AsyncStorage.setItem('timeSlots', JSON.stringify(slots));
    } catch (error) {
      console.error('Error saving time slots:', error);
    }
  };

  const addTimeSlot = async (slot: TimeSlot) => {
    const newSlots = [...timeSlots, slot];
    setTimeSlots(newSlots);
    await saveTimeSlots(newSlots);
  };

  const removeTimeSlot = async (id: string) => {
    const newSlots = timeSlots.filter(slot => slot.id !== id);
    setTimeSlots(newSlots);
    await saveTimeSlots(newSlots);
  };

  const getAvailableTimeSlots = () => {
    return timeSlots.filter(slot => slot.isAvailable);
  };

  return {
    timeSlots,
    availableTimeSlots: getAvailableTimeSlots(),
    addTimeSlot,
    removeTimeSlot
  };
}