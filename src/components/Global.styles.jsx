import { css } from '@emotion/core'
import Theme from './Theme/Theme'

export default {styles: css`
  html {
    font-size: 10px;
    overflow-x: hidden;
    max-width: 100%;
    box-sizing: border-box;
  }

  body {
    box-sizing: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${Theme.fonts.body.family};
    height: 100%;
    max-width: 100%;
    overflow-x: hidden;
    margin: 0;
  }

  main {
    height: 100%;
    display: block;
    padding: 2rem 0;
  }

  .wrapper-outer {
    padding: ${Theme.spacing.xs} ${Theme.spacing.default} ${Theme.spacing.xl};
    font-size: 1.4rem;
  }

  /* COLOR HELPER CLASSES */
  .text-shadow-purple {
    text-shadow: 0 1px 1px ${Theme.colors.accents.purple};
  }

  .text-shadow-red {
    text-shadow: 0 1px 1px ${Theme.colors.accents.red};
  }

  .text-shadow-yellow {
    text-shadow: 0 1px 1px ${Theme.colors.accents.background.yellow};
  }

  .text-shadow-blue {
    text-shadow: 0 1px 1px ${Theme.colors.accents.blue};
  }
  
  .text-shadow-green {
    text-shadow: 0 1px 1px ${Theme.colors.accents.green};
  }

  .color-purple {
    color: ${Theme.colors.accents.text.purple};
  }

  .color-red {
    color: ${Theme.colors.accents.text.red};
  }

  .color-yellow {
    color: ${Theme.colors.accents.text.yellow};
  }

  .color-blue {
    color: ${Theme.colors.accents.text.blue};
  }
  
  .color-green {
    color: ${Theme.colors.accents.text.green};
  }



  .background-color-purple {
    padding: 1px 3px;
    border-radius: 1px;
    background-color: ${Theme.colors.accents.background.purple};
  }

  .background-color-red {
    padding: 1px 3px;
    border-radius: 1px;
    background-color: ${Theme.colors.accents.background.red};
  }

  .background-color-yellow {
    padding: 1px 3px;
    border-radius: 1px;
    background-color: ${Theme.colors.accents.background.yellow};
  }

  .background-color-blue {
    padding: 1px 3px;
    border-radius: 1px;
    background-color: ${Theme.colors.accents.background.blue};
  }
  
  .background-color-green {
    padding: 1px 3px;
    border-radius: 1px;
    background-color: ${Theme.colors.accents.background.green};
  }

  .box-shadow-purple {
    padding-bottom: 1px;
    box-shadow: 0 3px 0 ${Theme.colors.accents.purple};
    transition: all .4s;
    
    &:hover {
      box-shadow: 0 3px 0 ${Theme.colors.accents.text.purple};
    }
  }

  .box-shadow-red {
    padding-bottom: 1px;
    box-shadow: 0 3px 0 ${Theme.colors.accents.red};
    transition: all .4s;
    
    &:hover {
      box-shadow: 0 3px 0 ${Theme.colors.accents.text.red};
    }
  }

  .box-shadow-yellow {
    padding-bottom: 1px;
    box-shadow: 0 3px 0 ${Theme.colors.accents.yellow};
    transition: all .4s;
    
    &:hover {
      box-shadow: 0 3px 0 ${Theme.colors.accents.text.yellow};
    }
  }

  .box-shadow-blue {
    padding-bottom: 1px;
    box-shadow: 0 3px 0 ${Theme.colors.accents.blue};
    transition: all .4s;
    
    &:hover {
      box-shadow: 0 3px 0 ${Theme.colors.accents.text.blue};
    }
  }
  
  .box-shadow-green {
    padding-bottom: 1px;
    box-shadow: 0 3px 0 ${Theme.colors.accents.green};
    transition: all .4s;
    
    &:hover {
      box-shadow: 0 3px 0 ${Theme.colors.accents.text.green};
    }
  }

  .background-accent-purple {
    background: ${Theme.colors.accents.purple};
    color: #000;
    border: 1px solid ${Theme.colors.accents.purple};
  }
  
  .background-accent-red {
    background: ${Theme.colors.accents.red};
    color: #000;
    border: 1px solid ${Theme.colors.accents.red};
  }

  .background-accent-yellow {
    background: ${Theme.colors.accents.yellow};
    color: #000;
    border: 1px solid ${Theme.colors.accents.yellow};
  }

  .background-accent-blue {
    background: ${Theme.colors.accents.blue};
    color: #000;
    border: 1px solid ${Theme.colors.accents.blue};
  }

  .background-accent-green {
    background: ${Theme.colors.accents.green};
    color: #000;
    border: 1px solid ${Theme.colors.accents.green};
  }

  .border-accent-purple {
    border: 2px solid ${Theme.colors.accents.background.purple};
    padding: 1px 2px;
    border-radius: 4px;
    
    &a:hover {
      border: 2px solid ${Theme.colors.accents.text.purple};
    }
  }
  
  .border-accent-red {
    border: 2px solid ${Theme.colors.accents.background.red};
    padding: 1px 2px;
    border-radius: 4px;
    
    &a:hover {
      border: 2px solid ${Theme.colors.accents.text.red};
    }
  }
    
  .border-accent-yellow {
    border: 2px solid ${Theme.colors.accents.background.yellow};
    padding: 1px 2px;
    border-radius: 4px;
    
    &a:hover {
      border: 2px solid ${Theme.colors.accents.yellow};
    }
  }

  .border-accent-blue {
    border: 2px solid ${Theme.colors.accents.background.blue};
    padding: 1px 2px;
    border-radius: 4px;
    
    &a:hover {
      border: 2px solid ${Theme.colors.accents.text.blue};
    }
  }

  .border-accent-green {
    border: 2px solid ${Theme.colors.accents.background.green};
    padding: 1px 2px;
    border-radius: 4px;
    
    &a:hover {
      border: 2px solid ${Theme.colors.accents.text.green};
    }
  }

  .border-radius {
    border-radius: 50%;
    line-height: 1;
  }
`}
