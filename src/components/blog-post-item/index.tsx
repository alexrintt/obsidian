import React from "react";

import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";

import * as S from "./style";

type IBlogPostItem = {
  post: {
    title: string;
    excerpt: string;
    shortExcerpt: {
      excerpt: string;
    };
    path: string;
    thumbnailImage?: {
      childImageSharp: ImageDataLike;
    };
    humanReadableCreatedAt: string;
    slug: string;
  };
};

export function BlogPostItem({ post }: IBlogPostItem) {
  return (
    <S.BlogPostItem>
      <S.BlogPostItemLink to={post.path}>
        {post.thumbnailImage && (
          <S.BlogPostItemThumb>
            <GatsbyImage
              image={
                getImage(
                  post.thumbnailImage!.childImageSharp! as ImageDataLike
                )!
              }
              alt={post.title}
            />
          </S.BlogPostItemThumb>
        )}
        <S.BlogPostItemContent>
          <p>{post.humanReadableCreatedAt}</p>
          <h1>{post.title}</h1>
          <p>{post.shortExcerpt.excerpt}</p>
        </S.BlogPostItemContent>
      </S.BlogPostItemLink>
    </S.BlogPostItem>
  );
}
