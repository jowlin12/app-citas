import React, { useState } from 'react';
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from '../navigationTypes';
import { TimeSlot } from '../../types/timeSlot';
import { useTimeSlots } from '../../hooks/useTimeSlots';
import {
  FlexboxLayout,
  ScrollView,
  Label,
  Button,
  DatePicker,
  TimePicker
} from '@nativescript/core';

type TimeSlotScreenProps = {
  route: RouteProp<MainStackParamList, 'TimeSlotManagement'>;
  navigation: FrameNavigationProp<MainStackParamList, 'TimeSlotManagement'>;
};

export function TimeSlotManagement({ navigation }: TimeSlotScreenProps) {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const { timeSlots, addTimeSlot, removeTimeSlot } = useTimeSlots();

  const handleAddTimeSlot = () => {
    const newSlot: TimeSlot = {
      id: Date.now().toString(),
      date: date.toISOString().split('T')[0],
      time: time.toTimeString().split(' ')[0],
      isAvailable: true,
      adminId: 'current-admin-id', // Replace with actual admin ID
    };
    addTimeSlot(newSlot);
  };

  return (
    <FlexboxLayout flexDirection="column" class="p-4">
      <Label class="h2 text-center m-b-20">Gestión de Horarios</Label>
      
      <FlexboxLayout flexDirection="column" class="form m-b-20">
        <DatePicker 
          date={date}
          onDateChange={(args) => setDate(args.value)}
          class="m-b-10"
        />
        
        <TimePicker
          hour={time.getHours()}
          minute={time.getMinutes()}
          onTimeChange={(args) => setTime(args.value)}
          class="m-b-10"
        />
        
        <Button
          text="Agregar Horario"
          onTap={handleAddTimeSlot}
          class="btn btn-primary"
        />
      </FlexboxLayout>

      <ScrollView>
        <FlexboxLayout flexDirection="column">
          {timeSlots.map((slot) => (
            <FlexboxLayout
              key={slot.id}
              class="slot-item p-2 m-y-1"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Label text={`${slot.date} - ${slot.time}`} />
              <Button
                text="Eliminar"
                onTap={() => removeTimeSlot(slot.id)}
                class="btn btn-danger"
              />
            </FlexboxLayout>
          ))}
        </FlexboxLayout>
      </ScrollView>
    </FlexboxLayout>
  );
}