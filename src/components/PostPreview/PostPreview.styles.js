// import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Theme from "../Theme/Theme"

export const ReadableContent = styled.article`
  margin: ${Theme.spacing.default} auto;
  padding: ${Theme.spacing.xs} 0 ${Theme.spacing.xl};
  display: block;
  width: 100%;
  max-width: 100%;

  @media screen and (min-width: ${Theme.breakpoints.md}) {
    width: ${Theme.layout.widths.full};
    max-width: ${Theme.layout.widths.fullMax};
    padding-left: ${Theme.spacing.default};
    padding-right: ${Theme.spacing.default};
  }
`;

export const Button = styled(Link)`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  background-color: ${Theme.colors.blue.base};
  color: #fff;
  font-size: ${Theme.fonts.sizes.xs};
  padding: ${Theme.spacing.sm} ${Theme.spacing.default};
  display: block;
  max-width: 21rem;
  text-align: center;
  letter-spacing: .03rem;
  border: 2px solid transparent;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 800;
  line-height: ${Theme.fonts.sizes.sm};
  outline: 0;
  text-shadow: none;
  transition: all .2s;

  &:hover {
    background-color: ${Theme.colors.blue.darker};
    color: #fff;
    transform: scale(1.05);
  }
`

export const TitleLink = styled(Link)`
  font-size: ${Theme.fonts.sizes.md};
  line-height: ${Theme.fonts.sizes.xl};
  color: ${Theme.colors.default.base};
  box-shadow: inset 0 -3px 0 ${Theme.colors.blue.boxShadow};

  &:hover {
    box-shadow: none;
    color: ${Theme.colors.default.base};
  }
`

export const Title = styled.h2`
  margin: 1rem auto 1.6rem;
`
