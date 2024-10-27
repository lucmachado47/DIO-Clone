import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Container, TextContent, Title, TitleHighlight } from "./styles";
import banner from "../../assets/banner.png"
import React from "react";

 const Home = () => {

  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate('/cadastro')
  }

  return (<>
    <Header />
    <Container>
      <div>
        <Title>
            <TitleHighlight>
              Implemente <br/>
            </TitleHighlight>
            O seu futuro global agora!
        </Title>
        <TextContent>
          Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo 
          e encare seu novo desafio profissional, evoluindo em comunidade com os 
          melhores experts.
        </TextContent>
        <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn}/>
      </div>
      <div>
        <img src={banner} alt="Imagem principal" />
      </div>
    </Container>

  </>)
}

export { Home }