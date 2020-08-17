import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
    height: 100%;
    padding: 20px;
    background-color: #FFF;
    
`;

export const ContentLogin = styled.View`
    flex: 1;
    justify-content: center;
    
    width: 100%;
`;

export const ViewImage = styled.View`
    align-items: center;
`;

export const ImageLogo = styled.Image`
    height: 53px;
    max-width:230px;
    margin-top: -100px;
`;

export const ButtonAccess = styled.TouchableOpacity`
    width: 100%;
    height: 40px;
    background-color: #212121;
    padding: 10px;
    margin-top: 20px;
`;

export const TextButton = styled.Text`
    font-family: 'Montserrat_500Medium';
    font-size: 14px;
    line-height: 20px;
    color: #FFF;
    display: flex;
    align-items: center;
    text-align: center;
`;

export const ViewError = styled.View`
    width: 100%;
    height: 30px;
    background-color: red;
    margin-bottom: 20px;
`;

export const TextError = styled.Text`
    font-family: 'Montserrat_700Bold';
    font-size: 14px;
    line-height: 30px;
    color: #FFF;
    display: flex;
    align-items: center;
    text-align: center;
`;

export const Loading = styled.ActivityIndicator`
    margin-top: 20px;
`;