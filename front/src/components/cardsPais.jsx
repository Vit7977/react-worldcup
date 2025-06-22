import styled from "styled-components";
import { FaEdit, FaTrash } from 'react-icons/fa';
import style from '../styles/cardsPais.module.css';
import axios from 'axios';
import { useState } from 'react';
import EditPaisForm from './FormEditPais'; // Importa o form separado

const CardsPais = ({ pais, grupo }) => {
    const [editPais, setEditPais] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const handleEdit = (pais) => {
        setEditPais(pais);
        setShowForm(true);
    };

    const handleDelete = async (id) => {
        const alertDelete = window.confirm('Deseja mesmo deletar este país?');
        if(alertDelete === true){
            try {
                await axios.delete(`http://localhost:9090/api/pais/${id}`);
                alert('País deletado com sucesso!');
                window.location.reload();
            } catch (error) {
                console.error(error);
            }
        } else{
            return window.location.reload();
        }
        
    };

    return (
        <Container>
            <Body className={style.body}>
                {pais.map((pais) => (
                    <CardContainer className={style.container} key={pais.id}>
                        <CardContent className={style.content}>
                            <PaisImg className={style.img} src={pais.bandeira_url} />
                            <PaisData>{pais.nome}</PaisData>
                            <PaisData>Grupo: {pais.grupo}</PaisData>
                            <PaisData>
                                <FaEdit className={style.editIcon} onClick={() => handleEdit(pais)} />
                                <FaTrash className={style.deleteIcon} onClick={() => handleDelete(pais.id)} />
                            </PaisData>
                        </CardContent>
                    </CardContainer>
                ))}
            </Body>
            <EditPaisForm 
                    key={editPais?.id}
                    editPais={editPais}
                    showForm={showForm}
                    setShowForm={setShowForm}
                    grupo={grupo}
                />
        </Container>
    );
};

const Container = styled.div``;
const Body = styled.div``;
const CardContainer = styled.div``;
const CardContent = styled.div``;
const PaisData = styled.span``;
const PaisImg = styled.img``;

export default CardsPais;
