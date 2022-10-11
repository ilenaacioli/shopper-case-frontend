import styled from "styled-components";

export const ContainerProducPage = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #edfaf6;

    img{
        margin-top: 5rem;
        margin-left: 3.2rem;
        max-width: 20rem;
    }
`

export const ContainerProducts = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 57rem;
    min-width: 57rem;
    align-items: center;

    input{
        margin: 1rem;
        width: 40rem;
        height: 1.5rem;
    }
`

export const CardDiv = styled.div`
    max-height: 32rem;
    overflow-y: scroll;
    display: flex;
    flex-wrap: wrap;
   
`
