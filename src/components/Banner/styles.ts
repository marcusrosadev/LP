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
  font-size: 24px;
  letter-spacing: .3px;
  line-height: 25px;
  color: #FFF;
  text-align: center;
  font-weight: bold;
  width: 100%;
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
  font-size: 24px;
  font-weight: 400;
  color: #FFF;
  margin-top: 32px;
  text-align: center;
  line-height: 26px;

 @media (min-width: 720px) {
  font-size: 40px;
 }

 span {
  color: #c70002;
 }
`

export const Tags = styled.p`
  letter-spacing: .3px;
  font-size: 16px;
  font-weight: 700;
  color: #C9C9C9;
  text-align: center;

  @media (min-width: 720px) {
    font-size: 25px;
  }
`

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 10px;
`

export const Button = styled.div`
  background-color: #06BD68;
  color: #FFFFFF;
  padding: 1em 3em;
  display: inline-block;
  border-radius: 0.4em;
  font-size: 18px;
  line-height: 1;
  font-weight: 600;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #7A0103;
    color: #FFFFFF;
    text-decoration: none;
  }
`