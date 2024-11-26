import React from 'react';
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from '../navigationTypes';
import { useAppointments } from '../../hooks/useAppointments';
import {
  FlexboxLayout,
  ScrollView,
  Label,
  Button,
} from '@nativescript/core';

type AdminDashboardProps = {
  route: RouteProp<MainStackParamList, 'AdminDashboard'>;
  navigation: FrameNavigationProp<MainStackParamList, 'AdminDashboard'>;
};

export function AdminDashboard({ navigation }: AdminDashboardProps) {
  const { appointments } = useAppointments();

  return (
    <FlexboxLayout flexDirection="column" class="p-4">
      <Label class="h2 text-center m-b-20">Panel de Administración</Label>
      
      <Button
        text="Gestionar Horarios"
        onTap={() => navigation.navigate('TimeSlotManagement')}
        class="btn btn-primary m-b-20"
      />

      <Label class="h4 m-b-10">Citas Programadas:</Label>
      <ScrollView>
        <FlexboxLayout flexDirection="column">
          {appointments.map((appointment) => (
            <FlexboxLayout
              key={appointment.id}
              class="appointment-card p-3 m-y-2"
              flexDirection="column"
            >
              <Label text={`Cliente: ${appointment.customerName}`} class="font-bold" />
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