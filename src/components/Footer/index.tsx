import { Container, UserContainer } from "./styles";
import verify from '../../assets/verify.png'

const Footer: React.FC = () => {
  return (
    <Container>
      <UserContainer>
        <p className="username">
          Furlani
        </p>
        <img src={verify} alt="verificado" />
      </UserContainer>
      <h2>OPPOSITION TEAM
        <br /><br />O acesso à comunidade e as estratégias nele passadas não garantem a obtenção de resultados.
        <br /><br />Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.
        <br /><br />Este site não faz parte do site do FACEBOOK, META ou META Inc. Além disso, este site NÃO é endossado pelo Facebook de forma alguma.

        <br /><br />FACEBOOK é uma marca comercial da META Inc.
      </h2>
    </Container>
  )
}

export default Footer;