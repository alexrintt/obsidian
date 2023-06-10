import * as React from "react";
import { Link } from "gatsby";

import * as S from "./style.tsx";
import { GitHubUser } from "../layout/index.tsx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

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
        <Link to={`https://github.com/${owner.login}`}>@{owner.login}</Link>
        {owner.bio}
      </S.OwnerHeader>
    </S.Header>
  );
}
