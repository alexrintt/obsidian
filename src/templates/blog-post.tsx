import * as React from "react";
import { graphql, HeadFC, navigate, PageProps, Link } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import { Layout } from "../components/layout";
import * as S from "./blog-post.style";
import { LayoutHeader } from "../components/layout-header";
import { NavLink } from "../components/layout-nav/style";
import { BlogPostItem } from "./blog-list";

export default function BlogPostPage(
  props: PageProps<Queries.BlogPostPageQuery>
) {
  const {
    data: { gitHubDiscussion, relatedPosts },
  } = props;

  const post = gitHubDiscussion!;

  const thumbnailImage = getImage(post?.thumbnailImage as ImageDataLike);

  return (
    <Layout>
      <S.MarkdownStyle />
      {gitHubDiscussion?.thumbnailImage && (
        <S.ContentHero>
          <GatsbyImage
            image={getImage(gitHubDiscussion!.thumbnailImage.childImageSharp)!}
            alt={gitHubDiscussion!.title!}
          />
        </S.ContentHero>
      )}
      <S.ContentMeta>
        <h1>{post.title}</h1>
        {gitHubDiscussion?.timeAgo} on{" "}
        {gitHubDiscussion?.humanReadableCreatedAt} by @
        <Link to={`https://github.com/${gitHubDiscussion?.author?.login}`}>
          {gitHubDiscussion?.author?.login}
        </Link>{" "}
        at <Link to={gitHubDiscussion!.editPostUrl!}>GitHub</Link>
      </S.ContentMeta>
      <S.Content
        className="markdown-body"
        dangerouslySetInnerHTML={{
          __html: gitHubDiscussion!.childMarkdownRemark!.html!,
        }}
      />
      <S.ContentDivider>
        <h1>Other posts</h1>
      </S.ContentDivider>
      <S.ContentMeta noPadding>
        {relatedPosts.nodes.map((relatedPost) => {
          return <BlogPostItem post={relatedPost as any} />;
        })}
      </S.ContentMeta>
    </Layout>
  );
}

export const query = graphql`
  fragment PostPreviewInfo on GitHubDiscussion {
    slug
    title
    githubId
    url
    path
    editPostUrl: discussionUrl
    humanReadableCreatedAt: createdAt(formatString: "dddd, MMMM Do YYYY")
    timeAgo: createdAt(fromNow: true)
    shortExcerpt: childMarkdownRemark {
      excerpt(format: PLAIN, pruneLength: 240)
    }
  }

  query BlogPostPage($discussionGithubId: String!) {
    relatedPosts: allGitHubDiscussion(
      filter: { githubId: { ne: $discussionGithubId } }
      limit: 50
    ) {
      totalCount
      nodes {
        childMarkdownRemark {
          html
          id
        }
        author {
          login
        }
        thumbnailImage {
          ...PostCoverImageData
          publicURL
        }
        ...PostPreviewInfo
      }
    }

    gitHubDiscussion(githubId: { eq: $discussionGithubId }) {
      childMarkdownRemark {
        html
        id
      }
      author {
        login
      }
      thumbnailImage {
        ...PostCoverImageData
        publicURL
      }
      ...PostPreviewInfo
    }
  }
`;
