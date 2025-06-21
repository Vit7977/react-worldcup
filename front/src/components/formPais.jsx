import styled from 'styled-components';
import '../styles/formPais.css';
import { useRef } from 'react';
import axios from 'axios';

const FormPais = ({grupo}) =>{
    const ref = useRef()

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const pais = ref.current;

        await axios.post('http://localhost:9090/api/pais', {
            nome: pais.nome.value,
            bandeira_url: pais.bandeira_url.value,
            grupo: pais.grupo.value
        }).then(({data}) => console.log(data))
        .catch(({data}) => console.error(data));

        pais.nome.value = "";
        pais.bandeira_url.value = "";
        pais.grupo.value = "";

        return alert('País cadastrado com sucesso!')
    }
    return (
        <Body className='imgFundo'>            
            <Form className='form-pais' ref={ref} onSubmit={handleSubmit}>
                <Header className='titulo-pais'>Cadastrar País</Header>
                <Div className='div-dados'>
                    <Input className='input-txt' name='nome' required></Input>
                    <Label className='lbl'>Nome</Label>
                </Div>
                <Div className='div-dados'>
                    <Input className='input-txt' name='bandeira_url' required></Input>
                    <Label className='lbl'>Bandeira(URL)</Label>  
                </Div>
                    <Div className='div-dados'>
                <Label>Grupo</Label>
                        <Select name='grupo'>
                            {grupo.map((item, i)=>{
                                return <Option key={i} value={item.id}>{item.nome}</Option>
                            })}
                        </Select>
                    </Div>
                <Button className='btn-submit' type='submit'>Cadastrar</Button>
            </Form>
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

export default FormPais