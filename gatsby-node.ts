import path from "path";
import type { GatsbyNode } from "gatsby";
import blogConfig from "./blog.config";
import { assert } from "console";

type CreatePagesAPI = GatsbyNode[`createPages`];
type OnCreatePageAPI = GatsbyNode[`onCreatePage`];

const createBlogListPagination: CreatePagesAPI = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions;

  const query = `
    query GetAllGitHubDiscussions {
      allGitHubDiscussion {
        totalCount
      }
    }
  `;

  const response = await graphql<Queries.Query>(query);

  const data = response.data;

  if (!data) {
    throw Error(
      `Was not possible to fetch data: ` +
        data +
        "\nQuery: " +
        query +
        "\nErrors: " +
        response.errors
    );
  }

  const { totalCount } = data.allGitHubDiscussion;

  const perPage = blogConfig.postsPerPage;

  const pageCount = Math.ceil(totalCount / perPage);

  for (let i = 0; i < pageCount; i++) {
    const skip = i * perPage;
    const limit = perPage;
    const page = i + 1;

    const listingPath = `/page`;

    // Base path for post list (www.domain.com/)
    const homePath = `/`;

    // If someday I want to realocate the post list to the post base path (www.domain.com/blog):
    // const homePath = blogConfig.postsBasePath;

    createPage({
      path: page === 1 ? homePath : `${listingPath}/${page}`,
      component: path.resolve(`./src/templates/blog-list.tsx`),
      context: {
        currentPage: page,
        pageCount: pageCount,
        skip,
        limit,
      },
    });
  }
};

const createBlogPostPages: CreatePagesAPI = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const query = `
    query GetAllGitHubDiscussions {
      allGitHubDiscussion {
        nodes {
          id
          githubId
          path
        }
      }
    }
  `;

  const response = await graphql<Queries.Query>(query);

  const data = response.data;

  if (!data) {
    throw Error(
      `Was not possible to fetch data: ` +
        data +
        "\nQuery: " +
        query +
        "\nErrors: " +
        response.errors
    );
  }

  for (const discussion of data.allGitHubDiscussion.nodes) {
    assert(discussion.path !== undefined);

    createPage({
      path: discussion.path!,
      component: path.resolve(`./src/templates/blog-post.tsx`),
      ownerNodeId: discussion.id,
      context: {
        discussionGithubId: discussion.githubId,
        ownerLogin: blogConfig.owner,
      },
    });
  }
};

export const createPages: CreatePagesAPI = async function (...args) {
  // await createProjectsPage(...args);
  // await createAboutPage(...args);
  await createBlogListPagination(...args);
  await createBlogPostPages(...args);
};
