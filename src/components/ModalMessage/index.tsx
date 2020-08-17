import React, { useState, useEffect } from 'react';
import { ModalView, ViewTitle, TitleModal, MessageModal } from './style';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';

interface ModalProps {
    title: string;
    message: string;
    show: boolean;
    url?: string;
}

const ModalMessage: React.FC<ModalProps> = ({ title, message, show, url}) => {

    const [visible, setVisible] = useState(false);
    const { navigate } = useNavigation();

    useEffect(() => {
        if(show) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [show])

    return( 
        <Modal isVisible={visible} >
                <ModalView>
                    <ViewTitle>
                        <TitleModal>{ title }</TitleModal>
                        <TouchableOpacity onPress={() => { 
                            setVisible(false); 
                            navigate('UserList');
                        }}>
                            <Ionicons name="md-close" size={25} color="#c1c1c1" />
                        </TouchableOpacity>
                    </ViewTitle>

                    <MessageModal>{ message }</MessageModal>

                   
                </ModalView>
        </Modal>
    );

}

export default ModalMessage;