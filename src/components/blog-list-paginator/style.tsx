import React from "react";
import styled from "styled-components";
import { withBorderBottom } from "../../style/common";
import { InLink } from "../inlink";

export const BlogListPaginatorWrapper = styled.div<ISBlogListPaginatorProps>`
  display: flex;
  justify-content: center;

  ${withBorderBottom}
`;

export const BlogListPaginatorContainer = styled.div<ISBlogListPaginatorProps>`
  width: 100%;
  max-width: var(--container-width);
  background: ;
  background: var(--surface-color);
  padding: 1.5rem;
  display: flex;
  font-size: 5rem;
`;

export type ISBlogListPaginatorProps = {};

export function BlogListPaginator({
  children,
}: React.PropsWithChildren<ISBlogListPaginatorProps>) {
  return (
    <BlogListPaginatorWrapper>
      <BlogListPaginatorContainer>{children}</BlogListPaginatorContainer>
    </BlogListPaginatorWrapper>
  );
}

export const BlogListPageLink = styled(InLink)`
  font-size: 2rem;
  margin-right: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

export const BlogListPageLinkDisabled = styled.div`
  opacity: 0.5;
  margin-right: 1rem;
  font-size: 2rem;
`;
