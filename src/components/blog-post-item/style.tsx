import styled from "styled-components";
import { Link } from "gatsby";
import { withBorder, withBorderBottom } from "../../style/common";

export const BlogPostItem = styled.div`
  padding: 1.5rem;
  ${withBorderBottom}
`;

export const BlogPostItemLink = styled(Link)`
  color: var(--text-color);
  &:hover {
    color: var(--link-color);
  }

  display: block;
`;

export const BlogPostItemContent = styled.div`
  display: block;
`;

export const BlogPostItemThumb = styled.div`
  ${withBorder};
`;
