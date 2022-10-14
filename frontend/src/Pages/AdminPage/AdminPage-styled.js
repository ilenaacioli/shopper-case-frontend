import styled from "styled-components";

export const ContainerAdminPage = styled.div`
display: flex;
background-color: #edfaf6; 
min-height: 36.5rem;
align-items: center;
justify-content: center;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    min-height: 37.6rem;
    flex-direction: column;
    
    }
`

export const ContainerProducts = styled.div`
    max-height: 32rem;
    max-width: 56rem;
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
        margin-top: 2rem;
    }

`

export const ContainerEditProduct = styled.div`
display: flex;
flex-direction: column;
margin-top: 4rem;
margin-left: 1.5rem;
min-height: 20rem;
width: 25rem;
align-items: center;
background-color: #002d62;
border: none;
border-radius:0.5rem ;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
h2{
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    color: white;
}

form{
    display: flex;
flex-direction: column;
align-items: center;
}

input{
    margin-top: 0.5rem;
    height: 1.5rem;
    border: 1px solid black;
    border-radius: 0.3rem;
    width: 15rem;
}

button{
    height: 3rem;
    width: 10rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 0.3rem;
    background-color: #2da77a;
    border: none;
    color: white;
    :hover{
    color:#2da77a ;
    border: 1px solid #2da77a ;
    background-color: white;
}
}

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        max-width: 20rem;
        margin-left:0;
    }
`
