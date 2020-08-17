import React, { useState, useEffect, useContext } from 'react';
import { ModalDeleteView, ViewDeleteTitle, TitleModalDelete, MessageModalDelete, ViewButtonsDelete, ButtonDeleteModal, ButtonCancel, TextButtonDeleteModal, TextButtonCancel } from './style';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';

import api, { config } from '../../services/api';
import ModalMessage from '../ModalMessage';
import ContextData from '../../contexts/ContextData';

interface ModalProps {
    title: string;
    message?: string;
    show: boolean;
    id: string;
    close: VoidFunction;
}

const ModalDelete: React.FC<ModalProps> = ({ title, message, show, id, close}) => {

    const [visible, setVisible] = useState(false);
    const [modalMessageVisible, setModalMessageVisible] = useState(false);
    const {user} = useContext(ContextData);

    var titleModalMessage = "Naver excluído";
    var messageModalMessage = "Naver excluído com sucesso!";

    function closeModal() {
        setVisible(false);
    }

    useEffect(() => {
        if(show) {
            setVisible(true);
        } else {
            closeModal();
        }

    }, [show]);

    function handleDeleteNaver(id: string){

        if (id) {

            api.delete('/navers/'+ id, config(user.token)).
            then(response => {
                setModalMessageVisible(true);
                setVisible(false);
            }).catch(err => {
                titleModalMessage = "Ocorreu um erro";
                messageModalMessage = "ocorreu um erro ao excluir o naver!";
                setModalMessageVisible(true);
            });
        }
    
    }

    return( 
    <>
        <ModalMessage title={titleModalMessage} message={messageModalMessage} show={modalMessageVisible} />

        <Modal isVisible={visible} >
                <ModalDeleteView>
                    <ViewDeleteTitle>
                        <TitleModalDelete>{ title }</TitleModalDelete>
                        <TouchableOpacity onPress={close}>
                            <Ionicons name="md-close" size={25} color="#c1c1c1" />
                        </TouchableOpacity>
                    </ViewDeleteTitle>

                    <MessageModalDelete>{ message }</MessageModalDelete>

                    <ViewButtonsDelete>
                        <ButtonCancel onPress={close}>
                            <TextButtonCancel>Cancelar</TextButtonCancel>
                        </ButtonCancel>

                        <ButtonDeleteModal onPress={() => { handleDeleteNaver(id) }}>
                            <TextButtonDeleteModal>Excluir</TextButtonDeleteModal>
                        </ButtonDeleteModal>
                    </ViewButtonsDelete>
                </ModalDeleteView>
        </Modal>
    </>
    );

}

export default ModalDelete;