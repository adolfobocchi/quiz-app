import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'

export const ResetStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-size: 14px;
    }

    body {
        width: 100vw;
        height: 100vh;
        background: #0B1249
    }
`

export const ContentArea = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    
`
export const PerguntaArea = styled.div`
    flex: 1;
    background: #0B0B3D;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const PerguntaItemArea = styled.div`
    background: #0084D6;
    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 70% 75%, 0 75%);
    color: #fff;
    width: 60%;
    height: 50%;
    padding: 8px;
    text-transform: uppercase;
    word-wrap: break-word;
    font-size: 18px;
`

export const RespostaArea = styled.div`
    height: 35%;
    background: #043B95;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`
export const RespostaItemArea = styled.div`
    height: 30px;
    background: #E63B08;
    border: 3px solid #6A1B00;
    border-radius: 15px;
    display: flex;
    margin-top: 5px;
    margin-bottom: 5px;
    align-items: center;
    width: 90%;
    cursor: pointer;
`


export const ItemOrdem = styled.div`
    background: #FFF;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    margin-right: 20px;
`

export const Resposta = styled.p`
    color: #FFF;
    text-transform: uppercase;
`
export const OpcoesArea = styled.div`
    height: 15%;
    background: #004CAE;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
`

export const OpcoesItemArea = styled.div`
    background: #E63B08;
    border: 3px solid #6A1B00;
    border-radius: 5px;
    width: 90px;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5px;
    color: #FFF;
    cursor: pointer;
`

export const CronometroArea = styled.div`
    width: 60px;
    height: 60px;
    border: 4px solid #34DEAB;
    border-radius: 50%;
    background: #2051D0;
    z-index: 1000;
    color: #DDA84D;
    position: absolute;
    left: 46%;
    top: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
`