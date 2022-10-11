import styled from "styled-components";

export const ContainerProductCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    max-width: 12.5rem;
    min-height: 13rem;
    align-items: center;
    margin: 10px;
    justify-content: space-evenly;
    background-color: white;
    border-radius:0.5rem ;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    
    img{
        height: 5rem;
        padding-right: 3rem;
        margin-top: 1.5rem;
    }
    
    P{
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        text-align: center;
    }

    
    button {
        margin-bottom: 1.5rem;
    height: 2rem;
    width: 10rem;
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