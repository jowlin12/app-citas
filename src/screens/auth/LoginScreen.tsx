import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAuth } from '../../context/AuthContext';
import {
  FlexboxLayout,
  TextField,
  Button,
  Label,
} from '@nativescript/core';

type LoginScreenProps = {
  navigation: StackNavigationProp<any>;
};

export function LoginScreen({ navigation }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const user = await login(email, password);
      navigation.replace(user.role === 'admin' ? 'AdminDashboard' : 'CustomerDashboard');
    } catch (error) {
      alert('Error al iniciar sesión');
    }
  };

  return (
    <FlexboxLayout flexDirection="column" class="p-4">
      <Label class="h1 text-center m-b-20">Mi Taller Mazos Car</Label>
      
      <TextField
        hint="Email"
        keyboardType="email"
        text={email}
        onTextChange={(args) => setEmail(args.value)}
        class="input m-b-10"
      />
      
      <TextField
        hint="Contraseña"
        secure={true}
        text={password}
        onTextChange={(args) => setPassword(args.value)}
        class="input m-b-20"
      />
      
      <Button
        text="Iniciar Sesión"
        onTap={handleLogin}
        class="btn btn-primary m-b-10"
      />
      
      <Button
        text="Registrarse"
        onTap={() => navigation.navigate('Register')}
        class="btn btn-outline"
      />
    </FlexboxLayout>
  );
}