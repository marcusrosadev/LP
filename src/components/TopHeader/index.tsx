import { Container, Img, ImgContainer } from "./styles";
import logo from '../../assets/logo.png'

const TopHeader: React.FC = () => {
  return (
    <Container>
      <ImgContainer>
        <Img src={logo} alt="Logotipo"/>
      </ImgContainer>
    </Container>
  )
}

export default TopHeader;