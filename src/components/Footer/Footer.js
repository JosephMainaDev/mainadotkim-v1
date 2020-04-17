import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Container from '../Container'

const FooterStyle = styled.div`
  position: relative;
  padding: 1.5rem 0;
  background-color: #757575;
  width: 100%;
  left: 0;
  height: auto;
  min-height: 3rem;
  margin-top: 1.5rem;
  color: #f8f9fa;
  font-size: 0.75rem;
  text-align: center;
`

const FooterNav = styled.nav`
  display: flex;
  padding: 0 0 0.875rem 0;
  margin-bottom: 0.75rem;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 100%;
  line-height: inherit;
  flex-wrap: wrap;
  font-size: 0.875rem;
  justify-content: center;
  border-bottom: 1px solid rgba(242, 242, 242, 0.3);
`

const Span = styled.span`
  display: flex;
  flex-direction: row;
  padding: 0 2rem 0 0;
  line-height: inherit;
  color: #f8f9fa;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: #ff9800;
  }
`

const Licence = styled.span`
  text-decoration: none;
  color: #f8f9fa;
  font-weight: 600;
  
  &:hover {
    text-decoration: none;
    color: #ff9800;
  }
`

const LinkStyle = styled(Link)`
  line-height: inherit;
  color: #f8f9fa;
  text-decoration: none;
  font-weight: 600;
  &:hover {
    text-decoration: underline;
    color: #ff9800;
  }
`

const ExternalLink = ({ children, href, target, rel }) => (
  <a href={href} target={target} rel={rel}>
    {children}
  </a>
)

const Footer = () => (
  <FooterStyle>
    <Container>
      <FooterNav>
        <Link to="/contact/">
          <Span>Contact</Span>
        </Link>

        <ExternalLink
          href="https://github.com/jmkimani"
          target="_blank"
          rel="noopener"
        >
          <Span>GitHub</Span>
        </ExternalLink>

        <ExternalLink
          href="https://www.twitter.com/mainadotkim"
          target="_blank"
          rel="noopener"
        >
          <Span>Twitter</Span>
        </ExternalLink>

        <ExternalLink
          href="https://t.me/jmkimani"
          target="_blank"
          rel="noopener"
        >
          <Span>Telegram</Span>
        </ExternalLink>

        <ExternalLink
          href="https://dev.to/jmkimani"
          target="_blank"
          rel="noopener"
        >
          <Span>Dev.to</Span>
        </ExternalLink>
      </FooterNav>

      <div>
        <span>
          &copy; 2020&nbsp;&nbsp;<LinkStyle to="/">Kimani Maina</LinkStyle>
        </span>
        <span>
          &nbsp;&#8226;&nbsp;Content is available under the{' '}
          <ExternalLink
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            target="_blank"
            rel="noopener"
          >
            <Licence>CC BY-NC-SA 4.0</Licence>
          </ExternalLink>{' '}
          licence.
        </span>
      </div>
    </Container>
  </FooterStyle>
)

export default Footer
