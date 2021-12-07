import styled from 'styled-components';
import { Button } from './Button';

function Hero() {
  const HeroSection = styled.section`
    background-color: var(--gray-1);
    border-bottom: 0.2rem solid var(--gray-3);
    padding-top: 7.5rem;
  `;
  const HeroContainer = styled.div`
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 7.5rem var(--page-margin) 18rem;
  `;
  const HeroContent = styled.div`
    max-width: 52rem;
    margin-left: clamp(0rem, calc(20vw - 7rem), 7rem);
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
