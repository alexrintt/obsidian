import React from "react";

import * as S from "./style";

export type IBlogListPaginator = {
  currentPage: number;
  totalPages: number;
  generateLink: (page: number) => string;
  isDisabled: (page: number) => boolean;
};

export function BlogListPaginator(props: IBlogListPaginator) {
  return (
    <S.BlogListPaginator>
      {Array.from({ length: props.totalPages }).map((_, i) => {
        const page = i + 1;

        const link = props.generateLink(page);

        if (props.isDisabled(page)) {
          return (
            <S.BlogListPageLinkDisabled key={link}>
              {page}
            </S.BlogListPageLinkDisabled>
          );
        }

        return (
          <S.BlogListPageLink key={link} to={props.generateLink(page)}>
            {page}
          </S.BlogListPageLink>
        );
      })}
    </S.BlogListPaginator>
  );
}
