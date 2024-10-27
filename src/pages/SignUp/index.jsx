import React from 'react';
import { MdEmail, MdLock, MdPerson  } from 'react-icons/md';
import { Header } from '../../components/Header';
import {
    Container, 
    Column, 
    Title, 
    Wrapper, 
    SubtitleLogin, 
    TitleLogin, 
    TermText,
    LoginText  
} from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';

const schema = yup.object({
    name: yup.string().required('Campo obrigatório'),
    email: yup.string().email('E-mail não é válido.').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres.').required('Campo obrigatório'),
  }).required();

const SignUp = () => {

    const { control, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange', 
        });
    
    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/feed')
    }

    return (<>
        <Header autenticado={false}/>
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar 
                    as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                </Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                    <form>
                        <Input name="name" errorMessage={errors?.email?.message} control={control} placeholder="Nome completo" leftIcon={<MdPerson  />}/>
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />}/>
                        <Input name="password" errorMessage={errors?.email?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                        <Button title="Criar minha conta" variant="secondary" type="submit" onClick={handleClickSignIn}/>
                    </form>
                    <TermText>Ao clicar em "criar minha conta grátis", declaro que 
                        aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                    </TermText>
                    <LoginText>Já tenho conta. <span>Fazer login</span></LoginText>
                </Wrapper>
            </Column>
        </Container>
        </>)
}

export { SignUp }