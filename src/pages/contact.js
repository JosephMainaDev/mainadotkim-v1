import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Helmet from "react-helmet"
import {
  FaGlobe,
  FaEnvelope,
  FaGithub,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa"

import Layout from "../components/Layout"
import Container from "../components/Container"
import Masthead from "../components/Masthead"

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 2rem;
  background-color: transparent;
`

const Td = styled.td`
  line-height: inherit;
  color: #212529;
  font-size: 1.25rem;
  font-weight: 500;
  text-decoration: none;
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;

  > a {
    color: #757575;
    font-weight: 300;
    &:hover {
      text-decoration: underline;
      color: #ff9800;
    }
  }
`

const ExternalLink = ({ children, href, target, rel }) => (
  <a href={href} target={target} rel={rel}>
    {children}
  </a>
)

const ContactPage = () => (
  <Layout>
    <Helmet title="Kimani Maina | Contact Me" />
    <Masthead
      title="Contact"
      summary="Get in touch with me through any of the following contacts. I will try my best to get back to you as soon as possible."
    />
    <Container>
      <Table>
        <tr>
          <Td>
            <FaGlobe />
          </Td>
          <Td>
            <Link to="/">www.maina.kim</Link>
          </Td>
        </tr>

        <tr>
          <Td>
            <FaEnvelope />
          </Td>
          <Td>
            <ExternalLink
              href="mailto:kim@maina.kim"
              target="_blank"
              rel="noopener"
            >
              kim@maina.kim
            </ExternalLink>
          </Td>
        </tr>

        <tr>
          <Td>
            <FaGithub />
          </Td>
          <Td>
            @
            <ExternalLink
              href="https://github.com/jmkimani"
              target="_blank"
              rel="noopener"
            >
              jmkimani
            </ExternalLink>
          </Td>
        </tr>

        <tr>
          <Td>
            <FaTwitter />
          </Td>
          <Td>
            @
            <ExternalLink
              href="https://www.twitter.com/mainadotkim"
              target="_blank"
              rel="noopener"
            >
              mainadotkim
            </ExternalLink>
          </Td>
        </tr>

        <tr>
          <Td>
            <FaPaperPlane />
          </Td>
          <Td>
            @
            <ExternalLink
              href="https://t.me/jmkimani"
              target="_blank"
              rel="noopener"
            >
              jmkimani
            </ExternalLink>
          </Td>
        </tr>
      </Table>

      <p>
        If you found a bug, a part of this site is not behaving as you would
        expect, your browser does not render the content properly, please get in
        touch with me.
      </p>

      <p>
        This is a work in progress and I am continuously trying to improve it.
      </p>

      <h4>Thank you in advance, for your feedback.</h4>
    </Container>
  </Layout>
)

export default ContactPage
