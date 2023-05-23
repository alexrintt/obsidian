import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql, Link } from "gatsby";
import * as S from "./style.tsx";
import { Layout } from "../components/layout";
import LineDecoration from "../components/line-decoration/index.tsx";

export default function IndexPage({
  data: {
    allContentfulPost: { totalCount, nodes },
  },
}: any) {
  return (
    <Layout>
      <S.Main>
        <LineDecoration />
        {nodes.map((e: any) => {
          return (
            <BlogPostItem
              post={{
                ...e,
                postUrl: "https://google.com",
              }}
            />
          );
        })}
      </S.Main>
    </Layout>
  );
}

export type IContentfulPost = {
  title?: string;
  body?: string;
  tags?: string;
  createdAt?: string;
  postUrl: string;
  updatedAt?: string;
};

export type IBlogPostItem = {
  post: IContentfulPost;
};

export function BlogPostItem({ post }: IBlogPostItem) {
  return (
    <S.BlogPostItem>
      <p>{post.createdAt}</p>
      <Link to={post.postUrl}>
        <h1>{post.title}</h1>
      </Link>
    </S.BlogPostItem>
  );
}

export const query = graphql`
  query AllContentfulPost {
    allContentfulPost {
      totalCount
      nodes {
        id
        title
        node_locale
        createdAt(formatString: "YYYY MMMM DD")
      }
    }
  }
`;

export const Head: HeadFC = () => <title>Home Page</title>;
