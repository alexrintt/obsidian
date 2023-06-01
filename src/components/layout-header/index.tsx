import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

import * as S from "./style.tsx";
import { useSiteMetadata } from "../../hooks/use-site-metadata";
import { GitHubUser } from "../layout/index.tsx";
import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";
import { NavLink } from "../layout-nav/style.tsx";

export type ILayoutHeaderProps = {
  owner: GitHubUser;
};

export function LayoutHeader({
  owner,
}: React.PropsWithoutRef<ILayoutHeaderProps>) {
  return (
    <S.Header>
      <S.OwnerHeader>
        <S.OwnerPfp>
          <GatsbyImage
            image={getImage(owner.avatarUrlSharpOptimized!)!}
            alt={owner.login!}
          />
        </S.OwnerPfp>
        @<Link to={`https://github.com/${owner.login}`}>{owner.login}</Link>
      </S.OwnerHeader>
      {owner.bio}
    </S.Header>
  );
}
