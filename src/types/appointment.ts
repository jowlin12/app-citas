export interface Appointment {
  id: string;
  customerId: string;
  customerName: string;
  timeSlotId: string;
  date: string;
  time: string;
  description: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}