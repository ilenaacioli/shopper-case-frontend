import styled from "styled-components";

export const ContainerHome = styled.div`
    min-height: 36.5rem;
    display: flex;
    flex-direction: row;
    background-color: #edfaf6;

    
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    }
`

export const TextSection = styled.section`
margin-top: 5rem;
padding: 3rem;
h2{
    font-family: 'Lato', sans-serif;
    font-weight: 700;
}
p{
    font-family: 'Lato', sans-serif;
    font-weight: 400;

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

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 1rem;
    }
`

export const ImgSection = styled.section`
img{
    margin-top: 5rem;
    max-width: 25rem;

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        margin-top: 1rem;
        max-width: 10rem;
    }
}

`


    
    