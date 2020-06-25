import { css } from "@emotion/core"
import Theme from '../Theme/Theme'


export const CrumbLink = css`
  font-family: inherit;
  color: inherit;
  font-weight: inherit;
  border-bottom: 1px solid ${Theme.colors.grays.textLight};
  text-decoration: none;

  &:hover {
    color: ${Theme.colors.grays.text};
    border-bottom: 0;
  }
`

export const CrumbItem = css`
  font-family: ${Theme.fonts.headings.family};
  display: inline-block;
  font-weight: 400;
  list-style-type: none;
  margin-left: 0;
  color: ${Theme.colors.grays.text};
  text-transform: uppercase;
`

export const CrumbsContainer = css`
  margin: 0 0 0 -40px;
  ${'' /* width: 50%; */}
  display: block;

  @media screen and (max-width: ${Theme.breakpoints.max.xs}) {
    text-align: center;
    width: 100%;
    margin: 0 0 0 -15px;
    display: none;
  }

`
