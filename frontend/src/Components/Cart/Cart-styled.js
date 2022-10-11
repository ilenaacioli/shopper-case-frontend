import styled from "styled-components";

export const ContainerCartItem = styled.div`
display: flex;
    margin: 1rem;
    max-width: 21rem;
    min-height: 7rem;
    justify-content: center;
    align-items: center;
    background-color: #edfaf6;
    border-radius:0.5rem ;

    div{
        display: flex;
        padding: 0.5rem;
        justify-content: center;
    align-items: center;
    }

    p{
        padding: 0.5rem;
       font-size: 1rem ;
       font-family: 'Lato', sans-serif;
    font-weight: 300;
    }
`

export const ProductName = styled.div`
display: flex;
    min-height: 4rem;
    max-width: 9.5rem;
    justify-content: center;
    align-items: center;
`

export const ButtonAdd = styled.button`
    border-radius: 0.3rem;
    background-color: white;
    border: 1px solid #2da77a;
    color: #2da77a;
    height: 2.2rem;
`

export const ButtonRemove = styled.button`
    border-radius: 0.3rem;
    background-color: white;
    border: 1px solid red;
    color: red;
    height:2.2rem;
`

export const ContainerCartSection = styled.section`
display: flex;
flex-direction: column;
margin-top: 4rem;
margin-left: 1.5rem;
align-items: center;
background-color: white;
border: none;
border-radius:0.5rem ;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
h2{
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
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

`

export const ItemSection = styled.section`
overflow-y: scroll;
max-height: 15rem;
`

export const OrderButton = styled.button`
   height: 2rem;
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
`