import styled from "styled-components";
import "../styles/formPais.css";
import { useState, useRef } from "react";
import axios from "axios";

const FormPais = ({grupo}) =>{
    const ref = useRef()

    const [bandeiraUrl, setBandeiraUrl] = useState("")

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const pais = ref.current;

        await axios.post("http://localhost:9090/api/pais", {
            nome: pais.nome.value,
            bandeira_url: pais.bandeira_url.value,
            grupo: pais.grupo.value
        }).then(({data}) => console.log(data))
        .catch(({data}) => console.error(data));

        pais.nome.value = "";
        pais.bandeira_url.value = "";
        pais.grupo.value = "";

        alert("País cadastrado com sucesso!");
        return window.location.reload();
    }
    return (
        <Body className="imgFundo">            
            <Form className="form-pais" ref={ref} onSubmit={handleSubmit}>
                <Header className="titulo-pais">Cadastrar País</Header>
                <Div className="div-dados">
                    <Input className="input-txt" name="nome" required></Input>
                    <Label className="lbl">Nome</Label>
                </Div>
                <Div className="div-dados">
                    <Input className="input-txt" name="bandeira_url" required onChange={(e) => setBandeiraUrl(e.target.value)}></Input>
                    <Label className="lbl">Bandeira(URL)</Label>  
                </Div>
                    <Div className="div-dados">
                <Label>Grupo</Label>
                        <Select name="grupo">
                            {grupo.map((item)=>{
                                return <Option key={item.id} value={item.id}>{item.nome}</Option>
                            })}
                        </Select>
                    </Div>
                <Button className="btn-submit" type="submit">Cadastrar</Button>
            </Form>
            <ContainerPFlag className='containerPFlag'>
                 <Header className='titulo-pais'>Preview Bandeira</Header>
                 <PreviewFlag className='previewFlag' src={bandeiraUrl} alt="Digite a URL da Bandeira" />
            </ContainerPFlag>

        </Body>

    );
}

const Body = styled.div``;

const Form = styled.form``;

const Div = styled.div``;

const Header = styled.h1``;

const Label = styled.label``;

const Input = styled.input``;

const Button = styled.button``;

const Select = styled.select``;

const Option = styled.option``;

const ContainerPFlag = styled.div``;
const PreviewFlag = styled.img``;

export default FormPais