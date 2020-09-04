import React, { useCallback, useRef, useContext } from 'react';
import { FiMail, FiLock, FiChevronLeft, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import logo from '../../assets/images/FarmTwoClean.png';

import Input from '../../components/Input';

import {
  Container,
  Content,
  AnimationContainer,
  BackgroundImg,
} from './styles';

import getValidationErrors from '../../utils/getValdationErrors';

import api from '../../services/api';

import { useToast } from '../../context/toast';

interface signUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async (data: signUpFormData): Promise<
    void
  > => {
    try {
      formRef.current?.setErrors({});

      const validationSchema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite um email válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await validationSchema.validate(data, {
        abortEarly: false,
      });

      console.log('before api post');

      await api.post('/users', data);

      console.log('after api post');

      addToast({
        type: 'success',
        title: 'Cadastro realizado com sucesso',
        description: 'Você já pode fazer se logon',
      });

      console.log('ok');

      history.push('/');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      addToast({
        type: 'error',
        title: 'Erro no cadastro!',
        description: 'Ocorreu um erro ao fazer cadastro, tente novamente',
      });
    }
  }, []);

  return (
    <Container>
      <BackgroundImg />
      <Content>
        <AnimationContainer>
          <img src={logo} alt="Mãe Terra" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Crie sua conta</h1>

            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="Email" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <button type="submit">Cadastrar</button>
          </Form>

          <Link to="/">
            <FiChevronLeft size={20} />
            Voltar
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
