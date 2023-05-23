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

  background: black;

  ${withBorderBottom}
`;

export const FooterContainer = styled.div<ISFooterProps>`
  width: 100%;
  max-width: var(--container-width);
  background: var(--surface-color);
  padding: 1.5rem;
  display: flex;
  font-size: 2rem;
  text-align: center;
  color: white;

  ${withBorderLeft}
  ${withBorderRight}
`;

export type ISFooterProps = {
  inverse?: boolean;
};

export function Footer({
  children,
  inverse,
}: React.PropsWithChildren<ISFooterProps>) {
  return (
    <FooterWrapper inverse>
      <FooterContainer inverse>{children}</FooterContainer>
    </FooterWrapper>
  );
}
