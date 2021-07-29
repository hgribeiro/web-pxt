import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;


  aside {
    flex: 1;
    background: #C8EB00;
    color: #FFF;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 120px 80px;

    img {
      max-height: 300px;
    }

    strong {
      margin-top: 50px;
      text-align: center;
      /* font-weight: 500; */
      font-size: 24px;
    }

    p{
      margin-top: 8px;
      text-align: center;
      font-size: 16px;
    }
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding: 0 32px;
    div{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 300px;
      
      strong{
        font-size: 32px;
        opacity: 0.7;
        margin-bottom: 24px;
      }
      
      button{
        display: flex;
        justify-content: center;
        align-items: center;
        
        padding: 8px;
        border-radius: 8px;
        border: 0;
        
        width: 100%;
        background-color: #ea4335;
        color: #FFF;

        cursor: pointer;

        transition: 0.3s;

        &:hover{
          filter: brightness(0.9);
        }
        img{
          margin-right: 8px;
        }
      }
    }
  }

`;
