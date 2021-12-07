import styled from 'styled-components';
import { ReactComponent as Logo } from '../logo.svg';

function Nav() {
  const NavSection = styled.section`
    border-bottom: 0.2rem solid black;
  `;
  const NavContainer = styled.div`
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 2.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const DesignoryLogo = styled(Logo)`
    height: 2.45rem;
  `;
  const Link = styled.a`
    color: #595959;
    font-size: 1rem;
    text-transform: uppercase;
  `;
  const Links = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4.75rem;
  `;

  return (
    <NavSection>
      <NavContainer>
        <DesignoryLogo />
        <Links>
          <Link>Portfolio</Link>
          <Link>Process</Link>
          <Link>Journal</Link>
          <Link>Contact Info</Link>
        </Links>
      </NavContainer>
    </NavSection>
  );
}

export default Nav;
