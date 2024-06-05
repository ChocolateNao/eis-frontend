import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  variant: 'neutral' | 'destructive' | 'disabled';
  onClick: () => void;
  children: ReactNode;
}

const neutralStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: lightgray;
  }
`;

const destructiveStyles = css`
  background-color: red;
  color: white;
  border: 1px solid darkred;

  &:hover {
    background-color: darkred;
  }
`;

const disabledStyles = css`
  background-color: #f2f5f8;
  color: #9da6b4;
  border: 1px solid #f2f5f8;
  cursor: not-allowed;
`;

const StyledButton = styled.button<{ variant: string }>`
  display: inline-block;
  height: 36px;
  width: 30px;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 8px;
  ${(props) => props.variant === 'neutral' && neutralStyles}
  ${(props) => props.variant === 'destructive' && destructiveStyles}
  ${(props) => props.variant === 'disabled' && disabledStyles}
`;

function Button({ variant, onClick, children }: ButtonProps) {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export { Button };
