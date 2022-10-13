import styled from "styled-components";

export const ContainerErrorPage = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color:#edfaf6 ;
min-height: 40.5rem;

h1{
    margin-top: 3rem;
    font-family: 'Lato', sans-serif;
        font-weight: 700;
}
h2{
    font-family: 'Lato', sans-serif;
        font-weight: 700;
}

img{
    width: 15rem;
}

button {
    height: 2rem;
    width: 10rem;
    margin-top: 0.5rem;
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