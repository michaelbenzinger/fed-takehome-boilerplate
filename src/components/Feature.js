import styled from 'styled-components';
import { Button } from './Button';

function Feature(props) {
  const { feature } = props;

  const sectionHeight = '35rem';

  const FeatureSection = styled.section``;
  const FeatureContainer = styled.div`
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 4.375rem 2.6rem 0rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4.375rem;
  `;
  const FeatureImageContainer = styled.div`
    flex: 1 1 45%;
    padding: 1rem;
    height: 100%
    background-color: white;
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.4);
  `;
  const FeatureImage = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${feature.color};
  `;
  const FeatureContent = styled.div`
    flex: 1 1 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: ${sectionHeight};
  `;
  const FeatureTitle = styled.h2`
    margin: 0 0 0.75rem;
  `;
  const FeatureSubtitle = styled.h4`
    margin: 0 0 2.25rem;
  `;
  const FeatureText = styled.p`
    font-size: 1.25rem;
    font-weight: 700;
    text-align: justify;
    width: 90%;
  `;
  const FeatureTextStroke = styled.span`
    color: white;
    letter-spacing: 0;
    -webkit-text-stroke: 0.25px #7f7f7f;
  `;
  const FeatureButton = styled(Button)`
    margin: auto 0 1.625rem;
  `;

  return (
    <FeatureSection>
      <FeatureContainer>
        <FeatureImageContainer>
          <FeatureImage />
        </FeatureImageContainer>
        <FeatureContent>
          <FeatureTitle>{feature.title}</FeatureTitle>
          <FeatureSubtitle>{feature.subtitle}</FeatureSubtitle>
          <FeatureText>
            <FeatureTextStroke>{feature.text1}</FeatureTextStroke>
            <span>{feature.text2}</span>
          </FeatureText>
          <FeatureButton>Download Now</FeatureButton>
        </FeatureContent>
      </FeatureContainer>
    </FeatureSection>
  );
}

export default Feature;
