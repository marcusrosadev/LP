import { Container, BannerContainer, Title, BannerImgContainer, ImgContainer, Img } from "./styles";
import print1 from '../../assets/prints/print1.jpeg'
import print2 from '../../assets/prints/print2.png'
import print3 from '../../assets/prints/print3.png'
import print4 from '../../assets/prints/print4.png'

const Prints: React.FC = () => {
  return (
    <Container>
      <BannerContainer>
        <Title>
          FOTOS ENVIADAS POR MEMBROS <span>QUE ENTRARAM NA COMUNIDADE INÍCIO DO MÊS DE ABRIL</span>
        </Title>
        <BannerImgContainer>
          <ImgContainer>
            <Img src={print1} />
          </ImgContainer>
          <ImgContainer>
            <Img src={print2} />
          </ImgContainer>
          <ImgContainer>
            <Img src={print3} />
          </ImgContainer>
          <ImgContainer>
            <Img src={print4} />
          </ImgContainer>
        </BannerImgContainer>
      </BannerContainer>
    </Container>
  )
}

export default Prints;