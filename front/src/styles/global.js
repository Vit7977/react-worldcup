import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Funnel+Display:wght@300..800&display=swap');

*{
    margin: 0;
    padding: 0;
    font-family: 'Funnel Display','sans-serif';
}
body{
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
}
`;

export default Global;
