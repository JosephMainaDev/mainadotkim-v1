import React from "react"
import { Link } from 'gatsby'
import Helmet from "react-helmet"
import styled from "styled-components"
import { FaTwitterSquare } from "react-icons/fa"
import { IoIosArrowForward } from "react-icons/io"

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 38rem;
  height: 100vh;
  background-color: #fff;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
`

const HomeHeader = styled.h1`
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 500;
  font-size: 3rem;
  color: inherit;
  line-height: 1.20849;
`

const HomeLead = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  color: #6d6d6d;
  line-height: inherit;
  margin-top: 0;
  margin-bottom: 1rem;
`
const TwitterLink = styled.a`
  font-weight: inherit;
  line-height: inherit;
  color: #1b95e0;
  text-decoration: none;
  font-size: inherit;

  &:hover {
    text-decoration: Underline;
  }
`

const AboutLink = styled(Link)`
  display: block;
  padding: 2rem 0;
  color: inherit;
  font-weight: 400;
  text-decoration: none;

  &:hover {
    text-decoration: Underline;
    color: inherit;
  }
`

const IndexPage = () => (
  <HomeContainer>
    <Helmet title="Kimani Maina | Home" />
    <HomeHeader>Hello there!</HomeHeader>

    <HomeLead>Nice to meet you. And, thank you for stopping by.</HomeLead>

    <p>
      My name is <strong>Kimani Maina</strong>, an electrical engineer from
      Nairobi, Kenya. I teach Electronics as my day job and learn programming
      every (other) time.
    </p>

    <p>
      This is my online home, for documenting my progress as I learn programming
      and my experience teaching young people.
    </p>

    <h3>
      <AboutLink to="/about">Read more <IoIosArrowForward /></AboutLink>
    </h3>
    
    <p>
      This blog is still under construction. I will let you know when there is more content.
    </p>

    <p>
      In the meantime, follow me on &nbsp;
      <TwitterLink href="https://twitter.com/mainadotkim">
        <FaTwitterSquare />
        &nbsp;&nbsp;@mainadotkim
      </TwitterLink> for more updates.
    </p>
    
    <h3>Again, thank you for visiting.</h3>
  </HomeContainer>
)

export default IndexPage
