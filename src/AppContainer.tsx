import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from './context/AuthContext';
import { LoginScreen } from './screens/auth/LoginScreen';
import { RegisterScreen } from './screens/auth/RegisterScreen';
import { AdminDashboard } from './screens/admin/AdminDashboard';
import { CustomerDashboard } from './screens/customer/CustomerDashboard';
import { AppointmentBooking } from './screens/customer/AppointmentBooking';

const Stack = createStackNavigator();

export function AppContainer() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen 
            name="AdminDashboard" 
            component={AdminDashboard}
            options={{ title: 'Panel de Administración' }}
          />
          <Stack.Screen 
            name="CustomerDashboard" 
            component={CustomerDashboard}
            options={{ title: 'Mi Taller Mazos Car' }}
          />
          <Stack.Screen 
            name="AppointmentBooking" 
            component={AppointmentBooking}
            options={{ title: 'Agendar Cita' }}
          />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}