import styled from 'styled-components/native';

export const ViewUser = styled.View`
    width: 190px;
    height: 340px;
    margin-bottom: 10px;
    margin-right: 30px;
`;

export const ImageUser = styled.Image`
    width: 190px;
    height: 190px;
    resize-mode: contain;
`;

export const ViewInfo = styled.View`
    padding: 5px;
`;

export const NameUser = styled.Text`
    font-family: 'Montserrat_600SemiBold';
    font-size: 18px;
    line-height: 40px;
    color: #212121;
`;

export const OfficeUser = styled.Text`
    font-family: 'Montserrat_500Medium';
    font-size: 14px;
    line-height: 25px;
    color: #212121;
`;

export const ViewButtons = styled.View`
    flex-direction: row;
    margin-top: 10px;
`;

export const ButtonUserDelete = styled.TouchableOpacity`
    margin-left: 5px;
`;

export const ButtonUserEdit = styled.TouchableOpacity`
    margin-left: 25px;
`;