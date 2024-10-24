import { 
    CardContainer, 
    Content, 
    HasInfo, 
    ImageBackground, 
    PostInfo,
    UserInfo,
    UserPicture 
} from './styles';
import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'

const Card = () => {
  return (
    <CardContainer>
       <ImageBackground src="https://hermes.dio.me/articles/cover/364fb700-4c6f-482b-91fe-6c66b31ae8a1.jpg"/>
       <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/168795483?s=400&u=fe76b34936d3575e820a9a42f1441b0fa3ecfd9b&v=4"/>
                <div>
                    <h4>Lucas Machado</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <div>
                    <h4>Projeto para curso de HTML e CSS</h4>
                    <p>Projeto feito para o curso de HTML e CSS no bootcamp dio do Global avanade...<strong>Saiba mais</strong></p>
                </div>
            </PostInfo>
            <HasInfo>
                <div>
                    <h4>#HTML #CSS #JavaScript</h4>
                    <p>
                        <FiThumbsUp /> 10
                    </p>
                </div>
            </HasInfo>
       </Content>
    </CardContainer>
  )
}

export { Card }
