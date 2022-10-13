import styled from "styled-components";

export const ContainerAdminPage = styled.div`
display: flex;
background-color: #edfaf6; 
min-height: 36.5rem;
align-items: center;
justify-content: center;
`

export const ContainerProducts = styled.div`
    max-height: 32rem;
    max-width: 71rem;
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
        max-width: 24rem;
    }

`
