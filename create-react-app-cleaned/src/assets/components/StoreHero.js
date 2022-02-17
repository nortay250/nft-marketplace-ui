import styled from "styled-components"
import { Colors } from "../Theme"
import storeImage from "../images/shopImage1.png"
import Img from "./styled/Img.styled"
import Button from "./styled/Button.styled"

const StoreHeroEl = styled.section`
  margin-top: 1rem;
  display: flex;
  row-gap: 1rem;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 1.5rem;
`;

const SubTitle = styled.span`
  color: ${Colors.Gray}
`;

const InfoContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  column-gap: 1rem;
`;

const ButtonContainer = styled.span`
  display: flex;
  column-gap: 1rem;
`;

const StoreHero = () => {
  return (
    <StoreHeroEl>
        <Img src={storeImage} width="30vw" />
        <InfoContainer>
          <Title>Cristals</Title>
          <SubTitle>Verified Artist</SubTitle>
        </InfoContainer>
        <ButtonContainer>
          <Button>Follow</Button>
          <Button np>Content</Button>
        </ButtonContainer>
    </StoreHeroEl>
  )
}

export default StoreHero