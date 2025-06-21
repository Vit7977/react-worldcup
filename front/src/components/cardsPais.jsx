import styled from "styled-components";
import { FaEdit, FaTrash } from 'react-icons/fa';
import '../styles/cardsPais.css';
import axios from 'axios';
import { useState } from 'react';
import EditPaisForm from './formEditPais'; // Importa o form separado

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
            <Body className="body">
                {pais.map((pais, i) => (
                    <CardContainer className="container" key={i}>
                        <CardContent className="content">
                            <PaisImg src={pais.bandeira_url} />
                            <PaisData>{pais.nome}</PaisData>
                            <PaisData>Grupo: {pais.grupo}</PaisData>
                            <PaisData>
                                <FaEdit className="editIcon" onClick={() => handleEdit(pais)} />
                                <FaTrash className="deleteIcon" onClick={() => handleDelete(pais.id)} />
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
