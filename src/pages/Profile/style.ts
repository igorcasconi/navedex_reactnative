import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #FFF;
    flex: 1;
`;

export const ViewImage = styled.View`
    width: 100%;
    height: 400px;
    background-color: #c1c1c1;
`;

export const ImageProfile = styled.Image`
    width: 100%;
    height: 400px;
`;

export const ViewInfoProfile = styled.View`
    margin-top: 10px;
    padding: 20px;
`;

export const ProfileName = styled.Text`
    font-family: 'Montserrat_600SemiBold';
    font-size: 28px;
    line-height: 30px;
`;

export const OfficeProfile = styled.Text`
    font-family: 'Montserrat_400Regular';
    font-size: 22px;
    line-height: 35px;
`;

export const TextInfo = styled.Text`
    margin-top: 12px;
    font-family: 'Montserrat_600SemiBold';
    font-size: 20px;
`;

export const TextDetail = styled.Text`
    font-family: 'Montserrat_400Regular';
    font-size: 18px;
    line-height: 32px;
`;

export const ViewButtons = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
`;

export const ButtonDeleteProfile = styled.TouchableOpacity`
    width: 190px;
    height: 45px;
    border: 1px;
    border-style: solid;
    border-color: #212121;
    background-color: #FFF;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const ButtonEditProfile = styled.TouchableOpacity`
    width: 190px;
    height: 45px;
    background-color: #212121;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const TextButtonEdit = styled.Text`
    font-family: 'Montserrat_600SemiBold';
    font-size: 18px;
    color: #FFF;
    line-height: 20px;
    margin-left: 5px;
`;

export const TextButtonDelete = styled.Text`
    font-family: 'Montserrat_600SemiBold';
    font-size: 18px;
    color: #212121;
    line-height: 20px;
    margin-left: 5px;
`;