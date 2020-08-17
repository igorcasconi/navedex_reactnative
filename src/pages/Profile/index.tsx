import React, { useContext, useState, useEffect } from 'react';
import { 
    Container, 
    ImageProfile, 
    ViewImage, 
    ViewInfoProfile, 
    ProfileName, 
    OfficeProfile, 
    TextInfo, 
    TextDetail, 
    ViewButtons, 
    ButtonDeleteProfile, 
    ButtonEditProfile,
    TextButtonEdit,
    TextButtonDelete
} from './style';
import { ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';

import api, { config } from '../../services/api';
import ContextData from '../../contexts/ContextData';
import converterDateInYear from '../../utils/converterDateInYear';
import ModalDelete from '../../components/ModalDelete';

interface Naver {
    id: string;
    name: string;
    job_role: string;
    admission_date: string;
    birthdate: string;
    project: string;
    url: string;
}

const Profile: React.FC<Naver> = ({route}) => {

    const { id } = route.params;
    const { user } = useContext(ContextData);
    const [ naver, setNaver ] = useState<Naver>({} as Naver);
    const { navigate } = useNavigation();
    const [modal, setModal] = useState(false);

    const loadNaver = async () => {
        try {
            const response = await api.get('/navers/' + id, config(user.token));
            setNaver(response.data);
        } catch(err) {
            console.log(err);
        } 
    }

    useEffect(() => {
        loadNaver();
    },[]);

    function handleEditNaver(id: string) {
        navigate('EditNaver', { id });
    }

    return(
    <>
        <ModalDelete title="Excluir naver" message="Tem certeza que deseja excluir este naver?" show={modal} close={() => { setModal(false);}} id={naver.id} />

        <Container >
            <ViewImage>
                <ImageProfile source={{ uri: naver.url}} />
            </ViewImage>

            <ScrollView>
                <ViewInfoProfile>
                    <ProfileName>{ naver.name}</ProfileName>
                    <OfficeProfile>{ naver.job_role}</OfficeProfile>

                    <TextInfo>Idade</TextInfo>
                    <TextDetail>{converterDateInYear(naver.birthdate) + ' anos'}</TextDetail>

                    <TextInfo>Tempo de Empresa</TextInfo>
                    <TextDetail>{converterDateInYear(naver.admission_date) > 1 ? converterDateInYear(naver.admission_date) + ' anos' : converterDateInYear(naver.admission_date) + ' ano' }</TextDetail>

                    <TextInfo>Projetos que participou</TextInfo>
                    <TextDetail>{naver.project}</TextDetail>

                    <ViewButtons>
                        <ButtonDeleteProfile onPress={() => { setModal(!modal); }}>
                            <Ionicons name="md-trash" color="#212121" size={30} />
                            <TextButtonDelete>Excluir</TextButtonDelete>
                        </ButtonDeleteProfile>

                        <ButtonEditProfile onPress={() => {handleEditNaver(naver.id)}}>
                            <Ionicons name="md-create" color="#FFF" size={30} />
                            <TextButtonEdit>Editar</TextButtonEdit>
                        </ButtonEditProfile>
                    </ViewButtons>
                </ViewInfoProfile>
            </ScrollView>
        </Container>
    </>
    )
}

export default Profile;