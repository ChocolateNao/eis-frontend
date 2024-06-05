import styled from 'styled-components';

interface HeaderProps {
  children: string;
}

const H1 = styled.h1`
  font-family: 'Roboto Medium', Roboto, sans-serif;
  text-align: left;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  margin: 20px;
`;

function Header({ children }: HeaderProps) {
  return <H1>{children}</H1>;
}

export { Header };
