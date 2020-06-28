// import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Theme from '../Theme/Theme'

export const Event = styled.article`
  font-size: ${Theme.fonts.sizes.sm};
  position: relative; 
  padding: 26px 32px;
  margin-bottom: 3em;
  background: #ffffff;
  border: 3px solid #EDF1F3;
  border-radius: 6px;
  
  @media screen and (max-width: ${Theme.breakpoints.max.md}) {
    padding: 16px; 
    // margin-top: 104px;
  }

  &::before,
  &::after {
    right: 100%;
    top: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &::after {
    border-right-color: #ffffff;
    border-width: 10px;
    margin-top: -10px;
  }

  &::before {
    border-right-color: #EDF1F3;
    border-width: 15px;
    margin-top: -15px;
  }

  .date {
    position: absolute;
    top: 50%;
    // margin-top: -24px;
    transform: translateY(-50%);
    left: -106px;
    width: 68px;
    height: 68px;
    line-height: 58px;
    text-align: center;
    background: ${Theme.colors.accents.blue} !important;
    display: block;
    z-index: 120;
    color: #345 !important;
    border-radius: 50%;
    border: 5px solid #fff !important;
    font-family: Oswald, sans-serif;
    font-weight: 400;
    font-size: 11px;
    letter-spacing: 1px;
  }

  &.current {
    .date {
      border-color: #345 !important;
      outline: 5px solid #FFF !important;
      color: #fff !important;
      background-color: #345 !important;
    }
  }

  header {
    margin-bottom: 15px;
    
    h5 {
      margin: 0;
      padding: 0 0 .3em 0;
      font-size: 12px;
      letter-spacing: 1px;
      text-transform: uppercase;
      font-weight: 700;
      color: #C9D5D6;
      letter-spacing: 0;
      font-size: 13px;
      font-family: Roboto;
      font-weight: 400;
      line-height: 1.4;
      text-transform: uppercase;
      color: ${Theme.colors.default.base};
      padding-bottom: 0;
      margin: 2px 0;
      font-weight: 500;
  
      .far {
        &::before {
          color: ${Theme.colors.default.base};
          font-weight: 200;
          display: inline-block;
          margin: 0 2px;
          
        }
      }
  
      em {
        font-weight: 400;
        text-transform: none;
        font-style: normal;
      }
    }


    h4 {
      margin: 0; 
      padding: 0;
      font-family: Lato, Arial, sans-serif;
      font-size: 1.4rem;
      line-height: 1.2;
      font-size: 15px;
      font-family: Lato;
      font-weight: 900;
      text-transform: uppercase;
    }


    .range,
    small {
      font-size: 13px !important;
      font-weight: 400;
      text-align: left;
      padding: 0;
      margin-bottom: 6px;
      line-height: 1.4;
      text-transform: none;
      font-family: Roboto;
      color: ${Theme.colors.default.base};
    }
  }

  .award {
    margin: 0 0 0.75rem 10px;
    color: rgba(28, 38, 43, 0.7);
    font-weight: 600;
    text-transform: none;
    letter-spacing: 0;
    font-size: 12px;
    color: #345;
    display: block;
    font-family: Lato;
    letter-spacing: .5px;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: .5px;

    span {
      color: #345;
      display: block;
      width: 100%;
      font-weight: 300;
      font-style: italic;
      text-transform: none;
      text-indent: 16px;
      font-family: Roboto;
      letter-spacing: 0;
      margin: 0px;
      font-size: 13px;
    }

    &:last-of-type {
      margin-bottom: 0;
    }

    .fa-trophy-alt {
      color: ${Theme.colors.default.base};
      padding: 0 6px 0 0;
      font-weight: 300;
      margin: 0 0 0 -12px;
      font-size: 16px;
      transform: translateY(3px);
      text-shadow: 0 1px 1px ${Theme.colors.accents.yellow};
    }
  }
  
  ul {
    list-style: disc;
    padding-left: 0;
    margin: 15px 0 15px 15px;
    
    li {
      line-height: 1.4em;
      margin-left: 0;
      
      &:not(:first-of-type) {
        margin-top: 10px;
      }
    }
  }

`


