import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Theme from '../../../Theme/Theme'

export const LatestPost = styled.div`
  padding: ${Theme.spacing.default} ${Theme.spacing.xs} ${Theme.spacing.md};
  margin: 2rem auto 0;
  background: #fff;
  display: inline-block;
  text-align: center;
  padding: 0 ${Theme.spacing.default};

  &::before {
    display: none !important;
  }
`

export const LatestPostHeading = styled.h2`
  display: block;
  margin: 0 auto ${Theme.spacing.sm};
  font-weight: 200;
  padding: 0;
  text-align: center;
  line-height: ${Theme.fonts.sizes.lineHeights.xs};

  .post-link {
    color: ${Theme.colors.default.base};
    font-size: ${Theme.fonts.sizes.default};
    text-decoration: none;
    padding-bottom: 1px;
    line-height: ${Theme.fonts.sizes.lineHeights.default};
    font-family: ${Theme.fonts.headings.family};
    font-weight: 900;
    letter-spacing: .25px;
    text-align: center;
    transition: box-shadow .2s;
    box-shadow: 0 1px 0 0 ${Theme.colors.default.base};

    &:hover,
    &:focus,
    &:active {
      box-shadow: none;
    }
  }
`

export const ImageContainer = styled.span`
  display: block;
  width: 6rem;
  height: auto;
  vertical-align: middle;
  margin: 0 auto .5rem;

  img {
    display: block;
    height: auto;
    vertical-align: middle;
    margin: 0 auto;
    text-align: center;
    line-height: calc(100% - 14px);
  }
`


export const Date = styled.time`
  display: block;
  font-size: ${Theme.fonts.sizes.sm};
  line-height: ${Theme.fonts.sizes.lineHeights.xs};
  color: ${Theme.colors.grays.textDark};
  // font-weight: 500;
  font-weight: 400;
  // font-family: ${Theme.fonts.accent.family};
  text-transform: uppercase;
  letter-spacing: .25px;
  text-align: center;
  margin: .5rem 0;

`

export const PostParagraph = css`
  font-size: ${Theme.fonts.sizes.sm};
  line-height: ${Theme.fonts.sizes.lineHeights.md};
  text-align: left;
  margin: 0 auto;
`
