import styled from 'styled-components';

function Footer() {
  const FooterSection = styled.section`
    padding: 4.5rem var(--page-margin) 0;
  `;
  const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: var(--container-width);
    font-size: 0.8rem;
    text-transform: uppercase;
    border-top: 0.2rem solid black;
    margin: 0 auto;
    padding: 1.25rem 0 3.6875rem;
  `;
  const FooterLink = styled.a`
    font-weight: 700;
    transition: color 0.2s;
    &:hover {
      color: var(--gray-6);
    }
    &:active {
      color: black;
      transition: color 0s;
    }
  `;

  return (
    <FooterSection>
      <FooterContainer>
        <div>
          Phone: <FooterLink>885.827.1938</FooterLink>
        </div>
        <div>
          © Copyright 2013 <FooterLink>Designory.com</FooterLink>
        </div>
      </FooterContainer>
    </FooterSection>
  );
}

export default Footer;
