import styled from "styled-components";

export const ContainerAdminLoginPage = styled.div`
  background-color: #edfaf6; 
  min-height: 36.5rem;
  
  div{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img{
    margin-top: 4rem;
   width: 8rem;
  }

  form{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input{
    width: 35%;
    height: 1.5rem;
    margin-top: 1rem;
    
  }

  button {
        height: 2rem;
        width: 7rem;
        margin-top: 1rem;
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
    min-height: 37.6rem;
    }
`