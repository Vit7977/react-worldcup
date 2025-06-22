import styled from "styled-components";
import style from "../styles/formPais.module.css";
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
        <Body className={style.imgFundo}> 
            <Div className={style.body}>       
                <Form className={style.formPais} ref={ref} onSubmit={handleSubmit}>
                    <Header className={style.tituloPais}>Cadastrar País</Header>
                    <Div className={style.divDados}>
                        <Input className={style.inputTxt} name="nome" required></Input>
                        <Label className={style.lbl}>Nome</Label>
                    </Div>
                    <Div className={style.divDados}>
                        <Input className={style.inputTxt} name="bandeira_url" required onChange={(e) => setBandeiraUrl(e.target.value)}></Input>
                        <Label className={style.lbl}>Bandeira(URL)</Label>  
                    </Div>
                        <Div className={style.divDados}>
                    <Label>Grupo</Label>
                            <Select name="grupo">
                                {grupo.map((item)=>{
                                    return <Option key={item.id} value={item.id}>{item.nome}</Option>
                                })}
                            </Select>
                        </Div>
                    <Button className={style.btnSubmit} type="submit">Cadastrar</Button>
                </Form>
                <ContainerPFlag className={style.containerPFlag}>
                     <Header className={style.tituloPais}>Preview Bandeira</Header>
                     <PreviewFlag className={style.previewFlag} src={bandeiraUrl} alt="Digite a URL da Bandeira" />
                </ContainerPFlag>   
            </Div> 
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