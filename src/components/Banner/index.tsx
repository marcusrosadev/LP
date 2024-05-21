// import { useState } from "react";
import VideoPlayer from "../VideoPlayer";
import { Container, BannerContainer, Title, BannerImgContainer, Subtitle, Tags } from "./styles";

const Banner: React.FC = () => {
  // const [videoClicked, setVideoClicked] = useState(false);

  // const onVideoClicked = () => {
  //   setVideoClicked(true);
  // };

  return (
    <Container>
      <BannerContainer>
        <Title>
          O MÉTODO QUE ESTÁ F0DENDO O BOLSO DOS CHINESES E COLOCANDO DE  <span>R$3.000 A R$5.000</span> NO NOSSO BOLSO TODOS OS DIAS
        </Title>
        <BannerImgContainer>
          <VideoPlayer />
        </BannerImgContainer>
          {/* <BtnContainer>
            <Button>
              RESERVAR VAGA DA COMUNIDADE
            </Button>
          </BtnContainer> */}
        <Subtitle>ASSISTA <span>ATÉ O FINAL</span> ANTES QUE OS CHINESES TIREM O SITE DO AR!</Subtitle>
        <Tags>#dolphinanty #casachinesa #igamingbug</Tags>
      </BannerContainer>
    </Container>
  )
}

export default Banner;