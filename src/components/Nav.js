import styled, { keyframes } from 'styled-components';
import { useState } from 'react';
import { ReactComponent as Logo } from '../logo.svg';
import breakpoints from '../breakpoints';

const Link = styled.a`
  color: var(--gray-6, #595959);
  font-size: 1rem;
  text-transform: uppercase;
  transition: color 0.2s;
  &:hover {
    color: black;
  }
  &:active {
    color: var(--gray-5);
    transition: color 0s;
  }
`;
const MobileLink = styled(Link)`
  display: block;
  font-size: 1.1rem;
  text-align: right;
  margin-bottom: 1rem;
`;

function MobileLinks() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const MobileLinksWrapper = styled.div`
    display: none;
    @media (max-width: ${breakpoints.sm}) {
      display: block;
    }
  `;
  const MobileLinksIcon = styled(Link)`
    font-size: 1.25rem;
    color: var(--gray-6, #595959);
    cursor: pointer;
  `;
  const MobileLinksIconClose = styled(MobileLinksIcon)`
    margin-bottom: 1rem;
  `;

  const slideIn = keyframes`
    from {
      transform: translateY(-3rem);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  `;

  const MobileLinksMenuWrapper = styled.div`
    box-sizing: border-box;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    padding: calc(2 * var(--page-margin)) var(--page-margin);
    border-bottom: 0.2rem solid black;
    animation: ${slideIn} 0.25s;
  `;
  const MobileLinksMenu = styled.div``;

  return (
    <MobileLinksWrapper>
      {isOpen ? null : (
        <MobileLinksIcon onClick={toggle} className="fas fa-bars" />
      )}

      {!isOpen ? null : (
        <MobileLinksMenuWrapper>
          <MobileLinksIconClose onClick={toggle} className="fas fa-times" />
          <MobileLinksMenu>
            <MobileLink>Portfolio</MobileLink>
            <MobileLink>Process</MobileLink>
            <MobileLink>Journal</MobileLink>
            <MobileLink>Contact Info</MobileLink>
          </MobileLinksMenu>
        </MobileLinksMenuWrapper>
      )}
    </MobileLinksWrapper>
  );
}

function Nav() {
  const NavSection = styled.section`
    position: fixed;
    background-color: white;
    width: 100vw;
    border-bottom: 0.2rem solid black;
    z-index: 10;
  `;
  const NavContainer = styled.div`
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 2.6rem var(--page-margin);
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const DesignoryLogo = styled(Logo)`
    height: 2.45rem;
    transition: filter 0.2s;
    &:hover {
      filter: contrast(0.4);
    }
    &:active {
      filter: contrast(1);
      transition: filter 0s;
    }
  `;
  const Links = styled.div`
    display: flex;
    flex-direction: row;
    gap: min(5vw, 4.75rem);
    @media (max-width: ${breakpoints.sm}) {
      display: none;
    }
  `;

  return (
    <NavSection>
      <NavContainer>
        <Link>
          <DesignoryLogo />
        </Link>
        <Links>
          <Link>Portfolio</Link>
          <Link>Process</Link>
          <Link>Journal</Link>
          <Link>Contact Info</Link>
        </Links>
        <MobileLinks />
      </NavContainer>
    </NavSection>
  );
}

export default Nav;
