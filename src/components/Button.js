import styled from 'styled-components';

export const Button = styled.button`
  font-size: 1.15rem;
  font-weight: 700;
  text-transform: uppercase;
  color: white;
  background-color: black;
  padding: 1rem 3rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: var(--gray-7);
  }
  &:active {
    background-color: black;
    color: var(--gray-1);
    transition: background-color 0s;
  }
`;
