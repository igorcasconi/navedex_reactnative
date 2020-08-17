import React, { useState, useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { ViewUser, ImageUser, NameUser, OfficeUser, ViewButtons, ViewInfo, ButtonUserDelete, ButtonUserEdit } from './style';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import api, { config } from '../../services/api';
import ContextData from '../../contexts/ContextData';
import ModalDelete from '../ModalDelete';

export interface UserItemProps {
    id: string;
    user_id: string;
    name: string;
    job_role: string;
    url: string;
}

interface UserProps {
    user_naver: UserItemProps; 
}

const UserItem: React.FC<UserProps> = ({user_naver}) => {

    const { navigate } = useNavigation();
    const {user} = useContext(ContextData);
    const [ modal, setModal] = useState(false);

    function handleNaverProfile(id: string) {
        navigate('Profile', { id });
    }
    
    function handleEditNaver(id: string) {
        navigate('EditNaver', { id });
    }

    return( 
        <>
        <ModalDelete title="Excluir naver" message="Tem certeza que deseja excluir este naver?" show={modal} close={() => setModal(false)} id={user_naver.id} />

        <ViewUser key={user_naver.id}>
            <TouchableOpacity onPress={() => { handleNaverProfile(user_naver.id) }}>
                <ImageUser source={{ uri: user_naver.url}} />

                <ViewInfo>
                    <NameUser>{user_naver.name}</NameUser>

                    <OfficeUser>{user_naver.job_role}</OfficeUser>

                </ViewInfo>
            </TouchableOpacity>

            <ViewButtons>

                <ButtonUserDelete onPress={() => { 
                    setModal(true);
                }}>
                    <Ionicons name="md-trash" size={30} />
                </ButtonUserDelete>

                <ButtonUserEdit onPress={() => {handleEditNaver(user_naver.id)}}>
                    <Ionicons name="md-create" size={30} />
                </ButtonUserEdit>

            </ViewButtons>

        </ViewUser>
        </>
    );
}

export default UserItem;