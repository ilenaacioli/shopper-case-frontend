import styled from "styled-components";

export const CardDiv = styled.div`
    max-height: 32rem;
    overflow-y: scroll;
    display: flex;
    flex-wrap: wrap;
    &::-webkit-scrollbar {
        width: 0.7rem;
    }
    &::-webkit-scrollbar-track {
        background-color: #EFEFE5;
        border-radius: 1rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: grey;
        border-radius: 1rem;
    }
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        max-height: 25rem;
        max-width: 30rem;

    }
   
`

export const BasketImg = styled.img`
    margin-top: 5rem;
    margin-left: 3.6rem;
    max-width: 20rem;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        max-width: 12rem;
        margin-left: 6rem;
    }
`

export const ContainerProducPage = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #edfaf6;
    min-height: 36.5rem;

    p{
        font-family: 'Lato', sans-serif;
    font-weight: 700;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: flex;
    flex-direction: column;
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
        @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        width: 9rem;
    }

    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        min-width: 10rem;
       
    }
`

