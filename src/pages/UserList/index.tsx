import React, { useState,useContext } from 'react';
import { FlatList } from 'react-native';
import { Container, ViewButtons, TextInit, ButtonAddNaver, TextButton, List } from './style';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';

import UserItem, {UserItemProps} from '../../components/UserItem';
import ContextData from '../../contexts/ContextData';
import api, {config} from '../../services/api';


const UserList = () => {

    const { navigate } = useNavigation();
    const {user} = useContext(ContextData);
    const [navers, setNavers] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    function handleAddNaver() {
        navigate('AddNaver', { id: '' });
    }

    const loadNavers = async () => {
        try{
            const response = await api.get('/navers',config(user.token));
            setNavers(response.data);
        } catch(err) {
            console.log(err);
        }

    }

    useFocusEffect(() => {
        loadNavers();
    });

    const renderItem = ({ item }) => (
        <UserItem user_naver={item} />
    );

    console.log();

    return (
        <Container>


            <ViewButtons>

                <TextInit>Navers</TextInit>

                <ButtonAddNaver onPress={handleAddNaver}>
                    <TextButton>Adicionar naver</TextButton>
                </ButtonAddNaver>

            </ViewButtons>

            <List >
                <FlatList
                    data={navers}
                    numColumns={2}
                    renderItem={renderItem}
                    keyExtractor={(item: UserItemProps) => item.user_id}
                />
            </List>

        </Container>
    );
}

export default UserList;