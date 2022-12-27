import React, { Fragment, useEffect, useState } from 'react'

import { ContentArea, ResetStyle, PerguntaArea, RespostaArea, RespostaItemArea, OpcoesArea, ItemOrdem, Resposta, PerguntaItemArea, OpcoesItemArea, CronometroArea } from './style'
function App() {
  const [timer, setTimer] = useState(60);
  useEffect(() => {
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
  }, [timer]);
  return (
    <Fragment>
      <ResetStyle />
      <ContentArea>
        <PerguntaArea>
          <PerguntaItemArea>
            em qual pais foi inventada a carruagem francesa carriole?
          </PerguntaItemArea>
          
        </PerguntaArea>
        <CronometroArea> {timer} </CronometroArea>
        <RespostaArea>
          <RespostaItemArea>
            <ItemOrdem>1</ItemOrdem>
            <Resposta>franca</Resposta>
          </RespostaItemArea>
          <RespostaItemArea>
            <ItemOrdem>2</ItemOrdem>
            <Resposta>venezuela</Resposta>
          </RespostaItemArea>
          <RespostaItemArea>
            <ItemOrdem>3</ItemOrdem>
            <Resposta>espanha</Resposta>
          </RespostaItemArea>
          <RespostaItemArea>
            <ItemOrdem>4</ItemOrdem>
            <Resposta>quenia</Resposta>
          </RespostaItemArea>
        </RespostaArea>
        <OpcoesArea>

          <OpcoesItemArea>DICA</OpcoesItemArea>
          <OpcoesItemArea>REVISAR</OpcoesItemArea>
          <OpcoesItemArea>PULAR</OpcoesItemArea>
          <OpcoesItemArea>CONFIRMAR</OpcoesItemArea>
        </OpcoesArea>
      </ContentArea>
    </Fragment>

  );
}

export default App;
