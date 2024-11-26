import React from 'react';
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from '../navigationTypes';
import { useAppointments } from '../../hooks/useAppointments';
import { useAuth } from '../../context/AuthContext';
import {
  FlexboxLayout,
  ScrollView,
  Label,
  Button,
} from '@nativescript/core';

type CustomerDashboardProps = {
  route: RouteProp<MainStackParamList, 'CustomerDashboard'>;
  navigation: FrameNavigationProp<MainStackParamList, 'CustomerDashboard'>;
};

export function CustomerDashboard({ navigation }: CustomerDashboardProps) {
  const { user } = useAuth();
  const { customerAppointments } = useAppointments();
  const myAppointments = customerAppointments(user?.id || '');

  return (
    <FlexboxLayout flexDirection="column" class="p-4">
      <Label class="h2 text-center m-b-20">Mi Taller Mazos Car</Label>
      
      <Button
        text="Agendar Nueva Cita"
        onTap={() => navigation.navigate('AppointmentBooking')}
        class="btn btn-primary m-b-20"
      />

      <Label class="h4 m-b-10">Mis Citas:</Label>
      <ScrollView>
        <FlexboxLayout flexDirection="column">
          {myAppointments.map((appointment) => (
            <FlexboxLayout
              key={appointment.id}
              class="appointment-card p-3 m-y-2"
              flexDirection="column"
            >
              <Label text={`Fecha: ${appointment.date}`} />
              <Label text={`Hora: ${appointment.time}`} />
              <Label text={`Estado: ${appointment.status}`} />
              <Label text={`Servicio: ${appointment.description}`} />
            </FlexboxLayout>
          ))}
        </FlexboxLayout>
      </ScrollView>
    </FlexboxLayout>
  );
}