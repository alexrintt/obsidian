import React from "react";
import styled, { css } from "styled-components";

export const resetBorder = css`
  border: none;
`;

export const withBorder = css`
  border: 1px dashed var(--border-color);
`;

export const withBorderBottom = css`
  border-bottom: 1px dashed var(--border-color);
`;

export const withBorderTop = css`
  border-top: 1px dashed var(--border-color);
`;

export const withBorderLeft = css`
  border-left: 1px dashed var(--border-color);
`;

export const withBorderRight = css`
  border-right: 1px dashed var(--border-color);
`;
