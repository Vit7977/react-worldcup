import styled from "styled-components";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import '../styles/formEditPais.css'

const EditPaisForm = ({ editPais, showForm, setShowForm, grupo }) => {
    const ref = useRef();

    const [bandeiraUrl, setBandeiraUrl] = useState("")

    useEffect(()=>{
        if(editPais?.bandeira_url){
            setBandeiraUrl(editPais.bandeira_url)
        }
    }, [editPais])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedPais = {
            nome: ref.current.nome.value,
            bandeira_url: ref.current.bandeira_url.value,
            grupo: ref.current.grupo.value
        };

        try {
            await axios.put(`http://localhost:9090/api/pais/${editPais.id}`, updatedPais);
            alert('País atualizado com sucesso!');
            setShowForm(false);
            window.location.reload();
        } catch (error) {
            console.error('Erro ao atualizar país:', error);
        }
    };

    return (
        <Container className={`container-form-edit ${showForm}`} show={showForm}>
            <EditForm
                ref={ref}
                className="form-edit-pais"
                onSubmit={handleSubmit}
            >
                <Header className='titulo-edit-pais'>Atualizar País <Span className="closeForm" onClick={() => setShowForm(false)}>X</Span></Header>
                <Div className='div-edit'>
                    <Input className="input-edit" name='nome' required defaultValue={editPais?.nome} />
                    <Label className="lbl">Nome</Label>
                </Div>
                <Div className='div-edit'>
                    <Input className="input-edit" id="bandeira_url" name='bandeira_url' required defaultValue={editPais?.bandeira_url}  onChange={(e) => setBandeiraUrl(e.target.value)} />
                    <Label className="lbl">Bandeira(URL)</Label>
                </Div>
                <Div className='div-edit'>
                    <Label>Grupo</Label>
                    <Select name='grupo' defaultValue={editPais?.fk_grupo || ''}>
                        {grupo.map((item, i) => (
                            <Option key={i} value={item.id}>{item.nome}</Option>
                        ))}
                    </Select>
                </Div>
                <Button className="btn-edit" type='submit'>Atualizar</Button>
            </EditForm>
            <ContainerPFlag className="containerPFlag">
                <Header>Preview Bandeira</Header>
                <PreviewFlag className="previewflag" src={bandeiraUrl}/>
            </ContainerPFlag>
        </Container>
    );
};

const Container = styled.div`
    display: ${({ show }) => (show ? 'flex' : 'none')}
`;

const EditForm = styled.form``;
const Input = styled.input``;
const ContainerPFlag = styled.div``;
const PreviewFlag = styled.img``;
const Button = styled.button``;
const Select = styled.select``;
const Option = styled.option``;
const Div = styled.div``;
const Label = styled.label``;
const Header = styled.h1``;
const Span = styled.span``;

export default EditPaisForm;