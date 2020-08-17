import styled from 'styled-components/native';

export const ModalDeleteView = styled.View`
    height: 220px;
    background-color: #FFF;
    padding: 20px;
`;

export const ViewDeleteTitle = styled.View`
    flex-direction: row;
    justify-content: space-between;

`;

export const TitleModalDelete = styled.Text`
    color: #212121;
    font-family: 'Montserrat_600SemiBold';
    font-size: 26px;
    line-height: 30px;
    margin-bottom: 30px;
`;

export const MessageModalDelete = styled.Text`
    color: #212121;
    font-family: 'Montserrat_500Medium';
    font-size: 20px;
    line-height: 20px;
`;

export const ViewButtonsDelete = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
`;

export const ButtonDeleteModal = styled.TouchableOpacity`
    width: 170px;
    height: 45px;
    background-color: #212121;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const ButtonCancel = styled.TouchableOpacity`
    width: 170px;
    height: 45px;
    border: 1px;
    border-style: solid;
    border-color: #212121;
    background-color: #FFF;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const TextButtonDeleteModal = styled.Text`
    font-family: 'Montserrat_600SemiBold';
    font-size: 18px;
    color: #FFF;
    line-height: 20px;
    margin-left: 5px;
`;

export const TextButtonCancel = styled.Text`
    font-family: 'Montserrat_600SemiBold';
    font-size: 18px;
    color: #212121;
    line-height: 20px;
    margin-left: 5px;
`;
