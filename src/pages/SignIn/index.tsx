import React, { useCallback, useRef, useContext } from 'react';
import { FiMail, FiLock, FiLogIn } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { useAuth } from '../../context/auth';
import { useToast } from '../../context/toast';

import logo from '../../assets/images/FarmTwoClean.png';

import Input from '../../components/Input';

import {
  Container,
  Content,
  AnimationContainer,
  BackgroundImg,
} from './styles';
import getValidationErrors from '../../utils/getValdationErrors';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: { email: string; password: string }) => {
      try {
        formRef.current?.setErrors({});

        const validationSchema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await validationSchema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login. Cheque as credenciais',
        });
      }
    },
    [signIn, addToast],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="Mãe Terra" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu logon</h1>

            <Input name="email" icon={FiMail} placeholder="Email" />

            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <button type="submit">Entrar</button>

            <a href="/forgot">Esqueci minha senha</a>
          </Form>

          <Link to="/signup">
            <FiLogIn size={20} />
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>
      <BackgroundImg />
    </Container>
  );
};

export default SignIn;
