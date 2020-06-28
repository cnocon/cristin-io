// import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
// import { Link } from "gatsby"
import Theme from '../Theme/Theme'

export const Timeline = styled.div`
  position: relative; 
  padding-left: 112px; 
  padding-bottom: 8px;

  @media screen and (max-width: ${Theme.breakpoints.max.md}) {
    padding-left: 0;
  }

  h2 {
    position: relative; 
    margin-bottom: 2rem; 
    font-size: ${Theme.fonts.sizes.default}; 
    font-weight: 300; 
    letter-spacing: 1px;

    @media screen and (max-width: ${Theme.breakpoints.max.md}) {
      text-align: center;
    }
    
    &:last-of-type {
      padding-left: 0;
    }
    
    [class^="icon-"], 
    [class*=" icon-"],
    .far {
      display: block;
      font-size: 28px;
      position: absolute;
      top: -27px;
      left: -112px;
      width: 86px;
      line-height: 78px; 
      margin: 0;  
      z-index: 120;

      @media screen and (max-width: ${Theme.breakpoints.max.md}) {
        position: relative;
        top: auto;
        left: auto;
        margin: -12px auto 6px auto;
        border: 0;
        line-height: 1;
        font-size: 16px;
        margin-right: 14px;
        line-height: 39px;
        text-align: center;
        color: #DDE4E6;
        background: #fff;
        border-radius: 50%;
        border: 4px solid #f4f6f7;
        display: inline-block;
        width: 47px;
      }

      &::before {
        // margin:0;
        // display: inline; 
        // margin-left: 0; 
        // margin-right: 0;
      }
    }
  }

  .event {
    position: relative;
    position: relative;
    padding: 26px 32px;
    margin-bottom: 3em;
    background: #ffffff;
    border: 3px solid #EDF1F3;
    border-radius: 6px;

    @media screen and (max-width: ${Theme.breakpoints.max.md}) {
      margin-top: 15px;

      &.current { 
        margin-top: 15px;
      }

      &:last-child p:before {
        height: 100%;
      }
    }

    &::after, 
    &::before {
      right: 100%;
      top: 50%;
      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
    }

    &::before {
      border-right-color: #EDF1F3;
      border-width: 15px;
      margin-top: -15px;
    }

    &::after {
      border-right-color: #ffffff;
      border-width: 10px;
      margin-top: -10px;
    }

    .list::before {
      display: block;
      content: "";
      position: absolute;
      top: -30px;
      left: -72px;
      height: 120%;
      width: 4px;
      background: #F4F6F7;
    }

    .date {
      top: 34px;
      color: #345;
      border: 4px solid whitesmoke;
      background-color: white;
      font-family: 'Oswald', 'sans-serif';
      position: absolute;
      top: 45%;
      margin-top: -24px;
      left: -106px;
      width: 68px;
      line-height: 58px;
      text-align: center;
      background: #fff;
      display: block;
      z-index: 120;
      color: #345;
      border-radius: 50%;
      border: 5px solid ${Theme.colors.grays.border};
      font-family: Oswald;
      font-weight: 400;
      font-size: 11px;
      letter-spacing: 1px;

      @media screen and (max-width: ${Theme.breakpoints.max.md}) {
        display: none;
      }
    }

    &.current {
      &::before {
        // top: -34px;
      }

      .date {
        background: #345;
        color: #fff;
        border: 4px solid transparent;
      }
    }
  }
`

export const HistoryHeading = css`
  position: relative;
  font-size: 19px;
  font-weight: 300;
  letter-spacing: 1px;
  font-family: "Lato", sans-serif;
  margin: 35px 0 50px 0;
  text-align: left;
  color: #345;
  padding-left: 112px;
  text-transform: uppercase;


  @media screen and (max-width: ${Theme.breakpoints.max.md}) {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    opacity: .8;
    padding-left: 50px;
    text-align: center;

    &:first-of-type i {
      width: 86px;
      height: 86px;
      font-size: 43px;
      line-height: 72px;
    }

    &:not(:first-of-type) i {
      width: 86px;
      height: 86px;
      font-size: 43px;
      line-height: 72px;
      background-color: white;
    }
  }
  
  i {
    &::before {
      font-size: 54px;
      font-size: 28px;
      line-height: 72px;
      vertical-align: middle;
      color: #EDF1F3;
      z-index: 9999999999;
      font-weight: 400;
      display: block;
      position: absolute;
      top: -27px;
      left: 0px;
      width: 86px;
      line-height: 78px;
      margin: 0;
      z-index: 120;
      text-align: center;
      color: #b7c6c9;
      background: #fff;
      border-radius: 50%;
      border: 4px solid #f4f6f7;
      color: ${Theme.colors.grays.textDark};
    }
  }
`

export const SectionTitle = css`
  position: relative;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: 700;
  font-family: Lato;
  margin: 0 0 1em;
  text-align: left;
  display: block;

  &:first-of-type {
    margin: 25px 0 40px 0;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: 0;
    width: 100%;
    border-bottom: 4px solid #F4F6F7;
  }

  span {
    position: relative;
    display: inline-block;
    padding-right: 1em;
    background: #fff;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: 900;
    font-family: Lato;
    text-transform: uppercase;

    i {
      font-size: 16px;
      margin-right: 14px;
      line-height: 39px;
      text-align: center;
      color: #B7C6C9;
      background: #fff;
      border-radius: 50%;
      border: 4px solid #F4F6F7;
      display: inline-block;
      width: 47px;

      &::before {
        font-style: normal;
        font-weight: normal;
        speak: none;
        display: inline-block;
        text-decoration: inherit;
        width: 39px;
        height: 39px;
        margin-right: auto;
        text-align: center;
        opacity: .8;
        font-variant: normal;
        text-transform: none;
        line-height: 39px;
        margin-left: auto;
        font-size: 120%;
        margin: 0 auto;
        vertical-align: middle;
        color: ${Theme.colors.grays.textDark};
      }
    }
  }
`

export const LeftCol = css`
  padding-right: 20px;
`

export const RightCol = css`
  padding-left: 20px;

  @media screen and (max-width: ${Theme.breakpoints.max.md}) {
    padding-left: 15px;
  }

  .event::before,
  .event::after,
  .list::before,
  p::before {
    display: none;
  }

  .event {
  }

  .list {
    display: inline-block;

    li {
      list-style: none;
      font-size: 16px;
      font-weight: 300;
      font-family: Roboto;
      color: ${Theme.colors.default.base};
      line-height: 1.4;
      margin-left: 0;

      i, span {
        display: table-cell;
      }

      i {
        padding-right: 10px;
        font-size: 20px;
        color: ${Theme.colors.accents.text.green};
        font-weight: 200;
      }

      b {
        font-weight: 400;
      }
    }
  }

  article:not(:first-of-type) h2 {
    margin: 25px 0 15px 0;
  }

  .skillset {
    padding: 0 0 3.2em 1em;

    .skill-unit {
      padding-bottom: 0;

      @media screen and (max-width: ${Theme.breakpoints.max.md}) {
        padding-bottom: 10px;
      }

      h4 {    
        font-weight: 700;
        font-size: 14px !important;
        position: relative;
        z-index: 100;
        color: ${Theme.colors.default.darker};
        line-height: 1.6rem;
        vertical-align: baseline;
        /* font-style: italic; */
        /* vertical-align: top; */
        /* text-transform: uppercase; */
        font-family: Lato;

        @media screen and (max-width: ${Theme.breakpoints.max.md}) {      
          margin-bottom: 8px;
          padding-left: 0;
        }
      }

      i {
        font-size: 16px;
        vertical-align: baseline;
        line-height: 1.6rem;
        margin-right: 3px;
        transform: translateY(2px);

        &::before {
          font-weight: 400;
        }
      }

      .bar {
        position: relative;
        background-color: hsla(197, 100%, 94%, 1);
        background-color: ${Theme.colors.grays.border};
        /* background-color: ${Theme.colors.grays.text}; */
        width: 100%;
        height: 8px;
        border-radius: 4px;

        .progress {
          position: absolute;
          /* background-color: hsl(139, 70%, 70%); */
          background-color: hsla(139, 45%, 72%, 1);
          background-color: hsla(139, 60%, 75%, 1);
          background-color: ${Theme.colors.accents.green};
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
        }
      }

      .score {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 2.6rem;
        height: 2rem;
        background-color: #345;
        color: #fff;
        text-align: center;
        line-height: 2rem;
        font-weight: 600;
        font-size: 1rem !important;
      }
    }
  }

`

export const BlockquoteIcon = css`
  color: ${Theme.colors.grays.text};
`