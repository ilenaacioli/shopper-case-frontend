import styled from "styled-components";

export const ContainerProducPage = styled.div`
    display: flex;
    flex-direction: row;
`

export const ContainerProducts = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    min-height: 100vh;
    max-width: 800px;

    div{
        display: flex;
        flex-wrap: wrap;
    }
    input{
        min-width: 200px;
        max-height: 30px;
    }
`