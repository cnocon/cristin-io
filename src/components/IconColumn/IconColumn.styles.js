import styled from '@emotion/styled'
import Theme from '../Theme/Theme'

export const IconColumnDiv = styled.div`
  text-align: center;
  padding: ${Theme.spacing.default} 0 ${Theme.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  h4 {
    font-size: ${Theme.fonts.sizes.sm};
    line-height: ${Theme.fonts.sizes.lineHeights.sm};
    font-family: ${Theme.fonts.headings.family};
    letter-spacing: 1px;
    font-weight: 600;
    margin: 0;
    text-transform: uppercase;
    margin-bottom: 0;
    line-height: ${Theme.fonts.sizes.lineHeights.default};

    span {
      padding-bottom: 1px;
      color: ${Theme.colors.default.base};
    }
  }

  p {
    font-size: ${Theme.fonts.sizes.default};
    margin: ${Theme.spacing.xs} 0 0;
    font-weight: 400;
    color: ${Theme.colors.grays.textDark};

    b {  
      font-weight: 500;
    }
  }

  i {
    display: block;
    font-size: 16px;
    width: 36px;
    height: 36px;
    line-height: 20px;
    padding: 8px;
    text-align: center;
    font-weight: 100;
    margin: 0 auto ${Theme.spacing.default};
    border-radius: 50%;

    &.dark {
      background-color: #345 !important;
      
      &::before {
        
      }
    }
  }

  a {
    color: inherit;
    background-image: linear-gradient(205deg, 
    ${Theme.colors.accents.yellow} 10%,
    ${Theme.colors.accents.green} 30%, 
    ${Theme.colors.accents.green} 40%, 
    ${Theme.colors.accents.blue} 52%, 
    ${Theme.colors.accents.blue} 62%, 
    ${Theme.colors.accents.purple} 70%,
    ${Theme.colors.accents.red} 90%);
    background-size: 100% 2px;
    background-position: center bottom;
    background-repeat: no-repeat;
    transition: background-image .4s;
  }
`

