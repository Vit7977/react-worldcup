import { Link } from "react-router-dom";

const Home = () =>{
    return (
        <div>
            <h1>Home</h1>
            <Link to={'/cadastrar/pais'}>Cadastrar País</Link>
            <Link to={'/listar/pais'}>Listar País</Link>
        </div>
    );
}

export default Home;