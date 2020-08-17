import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #FFF;
    padding: 20px;
`;

export const ViewButtons = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 15px;
    margin-bottom: 30px;
`;

export const TextInit = styled.Text`
    font-family: 'Montserrat_600SemiBold';
    font-size: 26px;
    line-height: 40px;
    color: #212121;
    max-width: 148px;
`;

export const ButtonAddNaver = styled.TouchableOpacity`
    width: 190px;
    height: 45px;
    background-color: #212121;

`;

export const TextButton = styled.Text`
    color: #FFF;
    font-style: normal;
    font-family: 'Montserrat_500Medium';
    font-size: 18px;
    line-height: 42px;
    align-items: center;
    text-align: center;
`;

export const List = styled.View`
    margin-bottom: 70px;
`;

export const ViewLoading = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;