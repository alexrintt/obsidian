import * as React from "react";
import { graphql, Link, PageProps, HeadFC, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";

import * as S from "./blog-list.style.tsx";
import { Layout } from "../components/layout";
import LineDecoration from "../components/line-decoration/index.tsx";
import { BlogListPaginator } from "../components/blog-list-paginator/index.tsx";
import blogConfig from "../../blog.config.ts";

// export const Head: HeadFC = () => <Seo />;

type IBlogPostItem = {
  post: {
    title: string;
    excerpt: string;
    shortExcerpt: {
      excerpt: string;
    };
    path: string;
    thumbnailImage?: ImageDataLike;
    humanReadableCreatedAt: string;
    slug: string;
    timeAgo: string;
  };
};

export function BlogPostItem({ post }: IBlogPostItem) {
  return (
    <S.BlogPostItem>
      <S.BlogPostItemLink to={post.path}>
        {post.thumbnailImage && (
          <S.BlogPostItemThumb>
            <GatsbyImage image={getImage(post.thumbnailImage)!} alt={""} />
          </S.BlogPostItemThumb>
        )}
        <p>
          {post.timeAgo} on {post.humanReadableCreatedAt}
        </p>
        <h1>{post.title}</h1>
        <p>{post.shortExcerpt.excerpt}</p>
      </S.BlogPostItemLink>
    </S.BlogPostItem>
  );
}

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
    },
  } = props;

  if (discussions.length <= 0) {
    return <></>;
  }

  return (
    <Layout>
      <S.Main>
        {discussions.map((e: any) => {
          return <BlogPostItem post={e} />;
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

export const query = graphql`
  fragment PostCoverImageData on File {
    childImageSharp {
      gatsbyImageData(
        width: 1920
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
      )
    }
  }
  query BlogListPage($skip: Int!, $limit: Int!) {
    discussions: allGitHubDiscussion(
      sort: [{ createdAt: DESC }, { updatedAt: DESC }]
      skip: $skip
      limit: $limit
    ) {
      totalCount
      nodes {
        id
        title
        path
        slug
        shortExcerpt: childMarkdownRemark {
          excerpt(format: PLAIN, pruneLength: 240)
        }
        humanReadableCreatedAt: createdAt(formatString: "dddd, MMMM Do YYYY")
        timeAgo: createdAt(fromNow: true)
        thumbnailImage {
          ...PostCoverImageData
          publicURL
        }
      }
    }
  }
`;
