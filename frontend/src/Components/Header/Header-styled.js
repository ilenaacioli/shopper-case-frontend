import styled from "styled-components";


export const ContainerHeaderHome = styled.div`
    max-width: 100vw;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    margin-left: 2rem;
    margin-right: 2rem;

    button {
        height: 2rem;
        width: 10rem;
        margin-top: 1rem;
        border-radius: 0.3rem;
        background-color: #2da77a;
        border: none;
        color: white;
    }

    button:hover{
        color:#2da77a ;
        border: 1px solid #2da77a ;
        background-color: white;
    }
`