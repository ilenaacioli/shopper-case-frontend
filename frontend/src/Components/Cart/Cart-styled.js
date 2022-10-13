import styled from "styled-components";

export const ContainerCartItem = styled.div`
display: flex;
    margin: 1rem;
    max-width: 21rem;
    min-height: 7rem;
    justify-content: center;
    align-items: center;
    background-color: white;

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
    font-weight: 700;
    }
`

export const ProductName = styled.div`
display: flex;
    min-height: 4rem;
    max-width: 9.5rem;
    justify-content: center;
    align-items: center;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
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
min-height: 30rem;
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
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
            width: 20rem;
            
    }

`

export const ItemSection = styled.section`
overflow-y: scroll;
height: 15rem;
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

`

export const OrderButton = styled.button`
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
`