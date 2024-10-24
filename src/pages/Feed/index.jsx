import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import { Container, Column, Title, TitleHighlight } from "./styles";
import React from "react";

 const Feed = () => {
  return (<>
    <Header autenticado={true}/>
    <Container>
      <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
      </Column>
      <Column flex={1}>
          <TitleHighlight># RANKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo percentual={80} nome="Lucas Machado" image="https://avatars.githubusercontent.com/u/168795483?s=400&u=fe76b34936d3575e820a9a42f1441b0fa3ecfd9b&v=4"/>
          <UserInfo percentual={34} nome="Lucas Machado" image="https://avatars.githubusercontent.com/u/168795483?s=400&u=fe76b34936d3575e820a9a42f1441b0fa3ecfd9b&v=4"/>
          <UserInfo percentual={22} nome="Lucas Machado" image="https://avatars.githubusercontent.com/u/168795483?s=400&u=fe76b34936d3575e820a9a42f1441b0fa3ecfd9b&v=4"/>
          <UserInfo percentual={94} nome="Lucas Machado" image="https://avatars.githubusercontent.com/u/168795483?s=400&u=fe76b34936d3575e820a9a42f1441b0fa3ecfd9b&v=4"/>
          <UserInfo percentual={64} nome="Lucas Machado" image="https://avatars.githubusercontent.com/u/168795483?s=400&u=fe76b34936d3575e820a9a42f1441b0fa3ecfd9b&v=4"/>
      </Column>    
    </Container>

  </>)
}

export { Feed }