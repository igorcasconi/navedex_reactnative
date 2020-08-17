import React, {useState, useContext} from 'react';
import {Container, ContentLogin, ImageLogo, ButtonAccess, TextButton, ViewImage, ViewError, TextError, Loading } from './style';
import { ActivityIndicator } from 'react-native';

import ContextData from '../../contexts/ContextData';
import Input from '../../components/Input';

import logoImg from '../../assets/logo.png';



const Login = () => {

    const { signIn, loading, erroLogin } = useContext(ContextData);

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function handleLogin(__email: string, __pass: string) {
        signIn(__email, __pass);
    }

    return (
        <>
        <Container>
            <ContentLogin>

                <ViewImage>
                    <ImageLogo source={logoImg} />
                </ViewImage>

                { erroLogin ? 
                    <ViewError>
                        <TextError>Usuário e/ou senha incorretos!</TextError>
                    </ViewError> :
                    null
                }

                <Input type="default" autoCapitalize="none" placeText="E-mail" value={email} onChangeText={(text) => { setEmail(text) }} />

                <Input type="default" placeText="Senha" security={true} value={senha} onChangeText={(text) => { setSenha(text) }} />

                <ButtonAccess onPress={() => { 
                    
                    handleLogin(email, senha);
                    
                }}>
                    <TextButton>ENTRAR</TextButton>
                </ButtonAccess>

                { loading ? <Loading color="#212121" size={30} /> : null }

            </ContentLogin>
        </Container>
        </>
    );
}

export default Login;