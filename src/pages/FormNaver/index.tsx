import React, { useState, useContext, useEffect } from 'react';
import { Container, TextInit, ButtonSave, TextButton } from './style';
import { KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native';
import { format } from 'date-fns';

import Input from '../../components/Input';
import ContextData from '../../contexts/ContextData';
import api, { config } from '../../services/api';
import ModalMessage from '../../components/ModalMessage';

interface Naver {
    id: string;
    name: string;
    job_role: string;
    admission_date: string;
    birthdate: string;
    project: string;
    url: string;
}

const FormNaver: React.FC<Naver> = ({route}) => {
    const {user} = useContext(ContextData);
    const [name, setName] = useState('');
    const [jobRole, setJobRole] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [admissionDate, setAdmissionDate] = useState('');
    const [project, setProject] = useState('');
    const [url, setUrl] = useState('');
    const [modal, setModal] = useState(false);

    const { id } = route.params;

    let pageName: string;
    let titleModal: string;
    let messageModal: string;

    if (id) {
        pageName = 'Editar naver';
        titleModal = 'Naver editado';
        messageModal = 'Naver editado com sucesso!';
        const loadEditNaver = async () => {

            try {
                const response = await api.get('/navers/' + id, config(user.token));
                setName(response.data.name);
                setJobRole(response.data.job_role);
                setBirthdate(format(new Date(response.data.birthdate), 'dd/MM/yyyy'));
                setAdmissionDate(format(new Date(response.data.admission_date),'dd/MM/yyyy'));
                setProject(response.data.project);
                setUrl(response.data.url);
            } catch(err) {
                console.log(err);
            }
        }

        useEffect(() => {
            loadEditNaver();
        }, []);

    } else {
        pageName = 'Adicionar naver';
        titleModal = 'Naver adicionado';
        messageModal = 'Naver adicionado com sucesso!';
    }

    async function handleSaveForm() {

        if(name == '' && jobRole == '' && birthdate == '' && admissionDate == '' && project == '' && url == '' ){
            console.log('Tem campos vazios');
        } else {

            if(id) { // UPDATE
                
                const params = JSON.stringify({
                    "job_role": jobRole,
                    "admission_date": admissionDate,
                    "birthdate": birthdate,
                    "project": project,
                    "name": name,
                    "url": url,
                });

                await api.put('/navers/' + id, params, config(user.token))
                .then((response) => {
                    setModal(true);
                })
                .catch((err) => {
                    titleModal = 'Ocorreu um erro';
                    messageModal = 'Não foi possível editar o naver!';
                });

            } else { // CREATE
                const params = JSON.stringify({
                    "job_role": jobRole,
                    "admission_date": admissionDate,
                    "birthdate": birthdate,
                    "project": project,
                    "name": name,
                    "url": url,
                });

                await api.post('/navers', params, config(user.token))
                .then((response) => {
                    setModal(true);
                }).catch(err => {
                    titleModal = 'Ocorreu um erro';
                    messageModal = 'Não foi possível adicionar o naver!';
                });
            }
        }
    }

    return(
        <Container>

            <ModalMessage title={titleModal} message={messageModal} show={modal} url="UserList" />

            <KeyboardAvoidingView>
                <ScrollView>
                    <TextInit>{ pageName }</TextInit>

                    <Input placeText="Nome" value={name} onChangeText={(text) => { setName(text) }} />
                    <Input placeText="Cargo" value={jobRole} onChangeText={(text) => { setJobRole(text) }} />
                    <Input placeText="Data de nascimento" value={birthdate} onChangeText={(text) => { setBirthdate(text) }}/>
                    <Input placeText="Data de admissão na empresa" value={admissionDate} onChangeText={(text) => { setAdmissionDate(text) }} />
                    <Input placeText="Projeto que participou" value={project} onChangeText={(text) => { setProject(text) }}/>
                    <Input placeText="URL da foto naver" value={url} onChangeText={(text) => { setUrl(text) }}/>

                    <ButtonSave onPress={handleSaveForm}>
                        <TextButton>Salvar</TextButton>
                    </ButtonSave>
                </ScrollView>
            </KeyboardAvoidingView>

        </Container>
    );

}

export default FormNaver;
