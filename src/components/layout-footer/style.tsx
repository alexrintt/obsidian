import React from "react";
import styled from "styled-components";
import {
  withBorderBottom,
  withBorderLeft,
  withBorderRight,
  withBorderTop,
} from "../../style/common";

export const FooterWrapper = styled.div<ISFooterProps>`
  display: flex;
  justify-content: center;

  ${withBorderBottom}
`;

export const FooterContainer = styled.div<ISFooterProps>`
  width: 100%;
  max-width: var(--container-width);

  padding: 1.5rem;
  display: flex;
  font-size: 2rem;
  text-align: center;
  background: var(--surface-color);

  ${withBorderLeft}
  ${withBorderRight}
`;

export type ISFooterProps = {};

export function Footer({ children }: React.PropsWithChildren<ISFooterProps>) {
  return (
    <FooterWrapper>
      <FooterContainer>{children}</FooterContainer>
    </FooterWrapper>
  );
}
