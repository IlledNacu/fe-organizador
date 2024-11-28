import { Flex, Input } from 'antd';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button } from '@mantine/core';
import React, { useState } from 'react';
import { notification as AntdNotification } from 'antd';
import { usuarioService } from '../api/userApi';
import { storage } from '../localStorage';
import { useNavigate } from 'react-router-dom';

const boxStyle: React.CSSProperties = {
  width: '100vw',
  height: 120
};

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const isValidEmail = (email: string) => {
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return regex.test(email);
    };

    const isValidPassword = (password: string) => {
      const regex = /^[a-zA-Z0-9]*$/;
      return regex.test(password);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isValidEmail(email)) {
          AntdNotification.error({
            message: 'Correo inválido',
            description: 'Por favor ingresa un correo electrónico válido.',
          });
          return;
        }

        if (!isValidPassword(password)) {
          AntdNotification.error({
            message: 'Contraseña inválida',
            description: 'La contraseña solo puede contener caracteres alfanuméricos.',
          });
          return;
        }

        try{
          const user = await usuarioService.login(email, password);
          storage.logIn(user);
          navigate('/notes');
        }catch {
            AntdNotification.error({
              message: 'No se pudo conectar a la base de datos',
              description: 'Intente de nuevo más tarde'
            });
        }
    };

    return (
        <Flex style={boxStyle} justify={'center'} align={'center'}>
            <form onSubmit={handleSubmit} className="text-center">
                <h2>Iniciar Sesión</h2>
                <div className="mb-3">
                    <Input size="large" placeholder="Email" prefix={<UserOutlined />} 
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <Input.Password
                      size="large"
                      placeholder="Password"
                      iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                      type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Button type="submit" variant="filled" color="pink" size="lg" fullWidth>Ingresar</Button>
            </form>
        </Flex>
    );
};

export default LoginPage;