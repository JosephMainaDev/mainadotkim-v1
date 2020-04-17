import React from "react"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

import Header from "../Header/"
import Footer from "../Footer/"

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  html {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 1rem;
    line-height: 1.5;
  }

  body {
    color: #212529;
    font-size: 1rem;
    background-color: #fff;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    
    @media (min-width: 1200px) {
      font-size: 1.2rem;
    }
  }

  a {
    color: #ff9800;
    text-decoration: none;
  }
  a strong {
    color: inherit;
  }

  a:hover,
  a:focus {
    text-decoration: underline;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.25;
    color: #313131;
    text-rendering: optimizeLegibility;
  }
  
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    margin-top: 1.5rem;
    font-size: 2rem;
  }
  h3 {
    margin-top: 1.5rem;
    font-size: 1.75rem;
  }
  h4 {
    margin-top: 1rem;
    font-size: 1.5rem;
  }
  h5, h6 {
    margin-top: 1rem;
    font-size: 1.25rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  strong {
    color: #303030;
  }

  ul, ol, dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  dt {
    font-weight: bold;
  }
  dd {
    margin-bottom: .5rem;
  }

  hr {
    position: relative;
    margin: 1.5rem 0;
    border: 0;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #fff;
  }

  code,
  pre {
    font-family: "SF Mono", Menlo, Monaco, "Courier New", monospace;
  }
  code {
    font-size: 90%;
    color: #bf616a;
  }
  pre {
    display: block;
    margin-top: 0;
    margin-bottom: 1rem;
    padding: 1rem;
    font-size: .8rem;
    line-height: 1.4;
    white-space: pre;
    white-space: pre-wrap;
    word-break: break-all;
    word-wrap: break-word;
    background-color: #f9f9f9;
  }
  pre code {
    padding: 0;
    font-size: 100%;
    color: inherit;
    background-color: transparent;
  }

  .highlight {
    margin: 0 0 1rem;
    border-radius: .25rem;
  }
  .highlight pre {
    margin-bottom: 0;
  }

  blockquote {
    padding: .5rem 1rem;
    margin: .8rem 0;
    color: #7a7a7a;
    border-left: .25rem solid #e5e5e5;
  }
  blockquote p:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 30em) {
    blockquote {
      padding-right: 5rem;
      padding-left: 1.25rem;
    }
  }

  img {
    display: block;
    max-width: 100%;
    margin: 0 0 1rem;
    border-radius: 5px;
  }

  iframe {
    border: 0;
  }
`

const LayoutDiv = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100%;
  left: 0;
  top: 0;
`

const Layout = ({ children }) => (
  <>
    <LayoutDiv>
      <Header />
      {children}
      <Footer />
    </LayoutDiv>
    <GlobalStyle />
  </>
)

export default Layout
