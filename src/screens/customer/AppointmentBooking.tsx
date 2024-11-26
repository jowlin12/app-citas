import React, { useState } from 'react';
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from '../navigationTypes';
import { useTimeSlots } from '../../hooks/useTimeSlots';
import { useAppointments } from '../../hooks/useAppointments';
import {
  FlexboxLayout,
  ScrollView,
  Label,
  Button,
  TextField
} from '@nativescript/core';

type BookingScreenProps = {
  route: RouteProp<MainStackParamList, 'AppointmentBooking'>;
  navigation: FrameNavigationProp<MainStackParamList, 'AppointmentBooking'>;
};

export function AppointmentBooking({ navigation }: BookingScreenProps) {
  const { availableTimeSlots } = useTimeSlots();
  const { createAppointment } = useAppointments();
  const [description, setDescription] = useState('');
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const handleBooking = async () => {
    if (!selectedSlot || !description) return;
    
    const slot = availableTimeSlots.find(s => s.id === selectedSlot);
    if (!slot) return;

    await createAppointment({
      timeSlotId: slot.id,
      date: slot.date,
      time: slot.time,
      description
    });

    navigation.navigate('AppointmentConfirmation');
  };

  return (
    <FlexboxLayout flexDirection="column" class="p-4">
      <Label class="h2 text-center m-b-20">Agendar Cita</Label>

      <ScrollView class="m-b-20">
        <Label class="h4 m-b-10">Horarios Disponibles:</Label>
        <FlexboxLayout flexDirection="column">
          {availableTimeSlots.map((slot) => (
            <Button
              key={slot.id}
              text={`${slot.date} - ${slot.time}`}
              onTap={() => setSelectedSlot(slot.id)}
              class={`btn m-y-1 ${selectedSlot === slot.id ? 'btn-primary' : 'btn-outline'}`}
            />
          ))}
        </FlexboxLayout>
      </ScrollView>

      <TextField
        hint="Descripción del servicio"
        text={description}
        onTextChange={(args) => setDescription(args.value)}
        class="input m-b-10"
      />

      <Button
        text="Confirmar Cita"
        onTap={handleBooking}
        isEnabled={!!selectedSlot && !!description}
        class="btn btn-primary"
      />
    </FlexboxLayout>
  );
}