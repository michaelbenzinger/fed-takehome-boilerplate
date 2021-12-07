import styled from 'styled-components';
import { Button } from './Button';

function Hero() {
  const HeroSection = styled.section`
    background-color: #ebebeb;
    border-bottom: 0.2rem solid #b5b5b5;
  `;
  const HeroContainer = styled.div`
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 7.5rem 2.6rem 18rem;
  `;
  const HeroContent = styled.div`
    max-width: 52rem;
    margin-left: 7rem;
  `;

  return (
    <HeroSection>
      <HeroContainer>
        <HeroContent>
          <h3>Well, Hello there</h3>
          <h1>This is where your message should go.</h1>
          <Button>Download Now</Button>
        </HeroContent>
      </HeroContainer>
    </HeroSection>
  );
}

export default Hero;
