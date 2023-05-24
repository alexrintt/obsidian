const socialMedia = `
GitHub https://github.com/alexrintt/obsidian
Email mailto:reach@alexrintt.io
Fork this blog https://alexrintt.io/obsidian/how-to-use-obsidian's-blog-template-using-gatsby-and-github-actions-(no-coding-skills-are-required)/
`;

export default {
  owner: "alexrintt",
  repo: "obsidian",
  pathPrefix: "/obsidian",
  // This will prevent someone else creating a discussion and publishing to your blog without your authorization.
  // Only users with repo-write access can modify announcement-type categories.
  safeCategories: [`Published`],
  siteMetadata: {
    title: `Obsidian's Blog Template`,
    twitterUsername: `<your-tt-username>`,
    description: `Obsidian is a blog template built with Gatsby and GitHub, free and open-source.`,
    image: `https://user-images.githubusercontent.com/51419598/240399860-a9fb362c-28a0-4838-b8d5-8332c2feecb5.png`,
    siteUrl: `https://alexrintt.io`,
  },
  socialMedia: socialMedia,
  postsPerPage: 10,
};
