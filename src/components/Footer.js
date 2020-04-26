import React from 'react';
import styled from 'styled-components';

import { ButtonLink } from '../components';
import { BREAKPOINT } from '../utils/constants';

const Container = styled.footer`
  font-size: 17px;
  margin-top: 20vh;
  padding-bottom: 10vh;
  padding-top: 5vh;
  text-align: left;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 16px;
  }
`;

export const Footer = () => {
  return (
    <Container>
      <ButtonLink
        className="footerLink"
        href="https://www.javed.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        javed.dev
      </ButtonLink>
      <ButtonLink
        className="footerLink"
        href="https://twitter.com/AkhtarJa"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </ButtonLink>
      <ButtonLink
        className="footerLink"
        href="https://github.com/akhtarja"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </ButtonLink>
    </Container>
  );
};
