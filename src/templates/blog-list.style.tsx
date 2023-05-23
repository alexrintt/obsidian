import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import {
  resetBorder,
  withBorderBottom,
  withBorderLeft,
  withBorderRight,
} from "../style/common";

export const MainWrapper = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: var(--container-width);
  ${withBorderRight}
  ${withBorderLeft}
  background: var(--surface-color);
  position: relative;
`;

export function Main({ children }: React.PropsWithChildren) {
  return (
    <MainWrapper>
      <MainContainer>{children}</MainContainer>
    </MainWrapper>
  );
}

export const BlogPostItem = styled.div`
  padding: 1.5rem;
  ${withBorderBottom}
`;

export const BlogPostItemLink = styled(Link)`
  color: var(--text-color);
  &:hover {
    color: var(--link-color);
  }
`;

export const BlogPostItemThumb = styled.div``;
