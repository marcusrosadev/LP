import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
`;

export const BannerContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  font-size: 40px;
  letter-spacing: .3px;
  color: #FFF;
  text-align: center;
  font-weight: 500;
  width: 100%;
  max-width: 80%;
  margin-bottom: 20px;

    span {
      color: #c70002;
      font-weight: 600;
    }


    @media (min-width: 720px) {
      font-size: 48px;
      line-height: 55px;
    }
`;

export const BannerImgContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 80px;
  padding-bottom: 24px;

  @media (min-width: 720px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Img = styled.img`
  width: 100%;
  max-width: 300px;
`