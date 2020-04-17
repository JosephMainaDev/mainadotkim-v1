import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Helmet from "react-helmet"

const NotFoundContainer = styled.div`
  max-width: 38rem;
  margin-top: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

const NotFoundTitle = styled.h1`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 300;
  font-size: 3rem;
  color: inherit;
  line-height: 1.20849;
`

const NotFoundInfo = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: #6d6d6d;
  line-height: inherit;
  margin-top: 0;
  margin-bottom: 1rem;
`

const NotFoundLink = styled(Link)`
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  padding-bottom: 1rem;
  line-height: 1.20849;
  color: inherit;
  font-size: 2rem;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.1rem;
`

const NotFoundPage = () => (
  <NotFoundContainer>
    <Helmet title="Kimani Maina | 404" />
    <NotFoundLink to="/">Kimani Maina</NotFoundLink>
    <hr />
    <NotFoundTitle>404 - Page Not Found</NotFoundTitle>
    <NotFoundInfo>
      Sorry, we can&#39;t find that page that you&#39;re looking for.
    </NotFoundInfo>
    <p>
      If you&#39;ve just run into a broken link, please{" "}
      <Link to="/contact/">contact me</Link> or the owner of the site that
      linked you to the original URL and let them know their link is broken.
    </p>
    <p>
      You can also visit the <Link to="/">home page</Link>.
    </p>
  </NotFoundContainer>
)

export default NotFoundPage
