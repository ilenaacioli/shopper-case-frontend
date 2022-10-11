import styled from "styled-components";

export const TextSection = styled.section`
padding: 3rem;
h2{
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
}
p{
    font-family: 'Lato', sans-serif;
    font-weight: 300;

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

export const ImgSection = styled.section`
img{
    margin-top: 5rem;
    max-width: 25rem;
}

`

export const ContainerHome = styled.div`
    min-height: 35rem;
    display: flex;
    flex-direction: row;
    background-color: #edfaf6;
`