import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  padding-bottom: 100px;
`;

export const BannerContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 27px;
  letter-spacing: .3px;
  color: #FFF;
  text-align: center;
  font-weight: bold;
  width: 100%;
  max-width: 80%;
  margin-top: 36px;
  margin-bottom: 36px;

    span {
      color: #c70002;
    }


    @media (min-width: 720px) {
      font-size: 48px;
      line-height: 45px;
    }
`;

export const BannerImgContainer = styled.div`
  width: 100%;
  max-width: 790px;
`

export const BannerImg = styled.div`
`

export const Subtitle = styled.p`
 font-size: 40px;
 letter-spacing: .3px;
 font-weight: 400;
 color: #FFF;
 margin-top: 32px;
 text-align: center;

 span {
  color: #c70002;
 }
`

export const Tags = styled.p`
  letter-spacing: .3px;
  font-size: 25px;
  font-weight: 700;
  color: #C9C9C9;
  text-align: center;
`
