import * as React from "react";
import { graphql, PageProps, HeadFC } from "gatsby";

import * as S from "./blog-list.style.tsx";
import { GitHubUser, Layout } from "../components/layout";
import { BlogListPaginator } from "../components/blog-list-paginator/index.tsx";
import Seo from "../components/seo/index.tsx";
import { BlogPostItem } from "../components/blog-post-item/index.tsx";

export type BlogListPageContext = {
  currentPage: number;
  pageCount: number;
  skip: number;
  limit: number;
};

export default function BlogListPage(
  props: PageProps<Queries.BlogListPageQuery, BlogListPageContext>
) {
  const {
    pageContext: { currentPage, pageCount },
    data: {
      discussions: { nodes: discussions },
      owner,
    },
  } = props;

  if (discussions.length <= 0) {
    return <></>;
  }

  return (
    <Layout owner={owner as GitHubUser}>
      <S.Main>
        {discussions.map((e: any) => {
          return <BlogPostItem key={e.githubId} post={e} />;
        })}
        <BlogListPaginator
          currentPage={currentPage}
          totalPages={pageCount}
          isDisabled={(page: number) => page === currentPage}
          generateLink={(page: number) => {
            if (page === 1) {
              return "/";
            }
            return `/page/${page}`;
          }}
        />
      </S.Main>
    </Layout>
  );
}

export const Head: HeadFC = () => <Seo />;

export const query = graphql`
  fragment PostCoverImageData on File {
    childImageSharp {
      gatsbyImageData(
        layout: CONSTRAINED
        width: 1920
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
      )
    }
  }
  query BlogListPage($skip: Int!, $limit: Int!, $ownerLogin: String!) {
    owner: gitHubUser(login: { eq: $ownerLogin }) {
      avatarUrl
      githubId
      login
      bio
      avatarUrlSharpOptimized {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            width: 50
            height: 50
            placeholder: TRACED_SVG
            formats: [AUTO, WEBP, AVIF]
          )
        }
        publicURL
      }
    }
    discussions: allGitHubDiscussion(
      sort: [{ createdAt: DESC }, { updatedAt: DESC }]
      skip: $skip
      limit: $limit
    ) {
      totalCount
      nodes {
        githubId
        title
        path
        slug
        shortExcerpt: childMarkdownRemark {
          excerpt(format: PLAIN, pruneLength: 240)
        }
        humanReadableCreatedAt: createdAt(formatString: "dddd, MMMM Do YYYY")
        thumbnailImage {
          ...PostCoverImageData
          publicURL
        }
      }
    }
  }
`;
